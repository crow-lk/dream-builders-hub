import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Consultant { id: string; name: string; description: string | null; rating: number; projects_count: number; }
interface HardwareItem { id: string; name: string; category: string; rating: number; notes: string | null; }

export default function Admin() {
  const { toast } = useToast();
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [hardware, setHardware] = useState<HardwareItem[]>([]);

  useEffect(() => {
    supabase.from("consultants").select("*").then(({ data }) => data && setConsultants(data));
    supabase.from("hardware_items").select("*").then(({ data }) => data && setHardware(data));
  }, []);

  const updateConsultant = async (id: string, field: string, value: string | number) => {
    await supabase.from("consultants").update({ [field]: value }).eq("id", id);
    setConsultants((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
    toast({ title: "Updated!" });
  };

  const updateHardware = async (id: string, field: string, value: string | number) => {
    await supabase.from("hardware_items").update({ [field]: value }).eq("id", id);
    setHardware((prev) => prev.map((h) => (h.id === id ? { ...h, [field]: value } : h)));
    toast({ title: "Updated!" });
  };

  return (
    <Layout>
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl font-bold">Admin Panel</h1>
          <p className="text-muted-foreground">Manage ratings and content</p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="consultants">
            <TabsList><TabsTrigger value="consultants">Consultants</TabsTrigger><TabsTrigger value="hardware">Hardware</TabsTrigger></TabsList>

            <TabsContent value="consultants" className="mt-6 space-y-4">
              {consultants.map((c) => (
                <Card key={c.id}><CardHeader className="pb-2"><CardTitle className="text-lg">{c.name}</CardTitle></CardHeader>
                  <CardContent className="grid sm:grid-cols-3 gap-4">
                    <div><Label>Rating (0-5)</Label><Input type="number" step="0.1" min="0" max="5" value={c.rating} onChange={(e) => updateConsultant(c.id, "rating", parseFloat(e.target.value))} /></div>
                    <div><Label>Projects</Label><Input type="number" value={c.projects_count} onChange={(e) => updateConsultant(c.id, "projects_count", parseInt(e.target.value))} /></div>
                    <div><Label>Description</Label><Input value={c.description || ""} onChange={(e) => updateConsultant(c.id, "description", e.target.value)} /></div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="hardware" className="mt-6 space-y-4">
              {hardware.map((h) => (
                <Card key={h.id}><CardHeader className="pb-2"><CardTitle className="text-lg">{h.name}</CardTitle></CardHeader>
                  <CardContent className="grid sm:grid-cols-3 gap-4">
                    <div><Label>Rating (0-5)</Label><Input type="number" step="0.1" min="0" max="5" value={h.rating} onChange={(e) => updateHardware(h.id, "rating", parseFloat(e.target.value))} /></div>
                    <div><Label>Category</Label><Input value={h.category} onChange={(e) => updateHardware(h.id, "category", e.target.value)} /></div>
                    <div><Label>Notes</Label><Input value={h.notes || ""} onChange={(e) => updateHardware(h.id, "notes", e.target.value)} /></div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
