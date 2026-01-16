-- Create consultants table for ratings management
CREATE TABLE public.consultants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  rating DECIMAL(2,1) NOT NULL DEFAULT 4.5 CHECK (rating >= 0 AND rating <= 5),
  projects_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create hardware_items table for product ratings
CREATE TABLE public.hardware_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  rating DECIMAL(2,1) NOT NULL DEFAULT 4.5 CHECK (rating >= 0 AND rating <= 5),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.consultants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hardware_items ENABLE ROW LEVEL SECURITY;

-- Public read access (no login required)
CREATE POLICY "Anyone can view consultants" 
ON public.consultants FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view hardware items" 
ON public.hardware_items FOR SELECT 
USING (true);

-- Public write access for admin page (no login)
CREATE POLICY "Anyone can insert consultants" 
ON public.consultants FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update consultants" 
ON public.consultants FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete consultants" 
ON public.consultants FOR DELETE 
USING (true);

CREATE POLICY "Anyone can insert hardware items" 
ON public.hardware_items FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update hardware items" 
ON public.hardware_items FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete hardware items" 
ON public.hardware_items FOR DELETE 
USING (true);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_consultants_updated_at
BEFORE UPDATE ON public.consultants
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_hardware_items_updated_at
BEFORE UPDATE ON public.hardware_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial consultants data
INSERT INTO public.consultants (name, description, rating, projects_count) VALUES
('Mr. Ajith Nihal Jayaweera', 'Senior architectural consultant with expertise in residential designs', 4.8, 45),
('Mr. Muditha Jayakodi', 'Structural engineering specialist for modern constructions', 4.7, 38),
('Design Forum (Pvt) Ltd', 'Full-service architectural and interior design firm', 4.9, 120),
('Mr. Nilantha (Nara Engineering, Kadawatha)', 'Civil engineering expert for large-scale projects', 4.6, 52),
('Mr. Pradeep (Architect)', 'Creative architect specializing in eco-friendly designs', 4.7, 35);

-- Insert initial hardware items data
INSERT INTO public.hardware_items (name, category, rating, notes) VALUES
('Cement (Premium Grade)', 'Building Materials', 4.8, 'High-strength cement for structural work'),
('Rebar / Steel Bars', 'Structural', 4.7, 'Grade 60 reinforcement steel'),
('Waterproofing Solution', 'Chemicals', 4.6, 'Advanced polymer-based waterproofing'),
('Tiles (Floor & Wall)', 'Finishing', 4.7, 'Premium ceramic and porcelain options'),
('Roofing Sheets / Materials', 'Roofing', 4.6, 'Weather-resistant roofing solutions'),
('Electrical Wiring & Breakers', 'Electrical', 4.7, 'Safety-certified electrical components'),
('Paint (Interior/Exterior)', 'Finishing', 4.6, 'Weather-resistant premium paints');