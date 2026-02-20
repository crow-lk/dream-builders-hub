
-- Step 1: Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Step 2: Create user_roles table (roles stored separately, NOT on profiles)
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Step 3: Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Users can only view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Step 4: Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Step 5: Fix consultants table - remove permissive write policies, add admin-only
DROP POLICY "Anyone can insert consultants" ON public.consultants;
DROP POLICY "Anyone can update consultants" ON public.consultants;
DROP POLICY "Anyone can delete consultants" ON public.consultants;

CREATE POLICY "Admins can insert consultants"
ON public.consultants FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update consultants"
ON public.consultants FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete consultants"
ON public.consultants FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Step 6: Fix hardware_items table - remove permissive write policies, add admin-only
DROP POLICY "Anyone can insert hardware items" ON public.hardware_items;
DROP POLICY "Anyone can update hardware items" ON public.hardware_items;
DROP POLICY "Anyone can delete hardware items" ON public.hardware_items;

CREATE POLICY "Admins can insert hardware items"
ON public.hardware_items FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update hardware items"
ON public.hardware_items FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete hardware items"
ON public.hardware_items FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
