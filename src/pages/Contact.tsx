import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", phone: "", email: "", location: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">Get in touch with our team</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2"><CardContent className="p-6 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-safety-yellow flex-shrink-0" />
                <div><h3 className="font-semibold">Address</h3><p className="text-sm text-muted-foreground">1/54, Daraniyagala Road, Dehiowita, Sri Lanka</p></div>
              </CardContent></Card>
              <Card className="border-2"><CardContent className="p-6 flex items-start gap-4">
                <Phone className="w-6 h-6 text-safety-yellow flex-shrink-0" />
                <div><h3 className="font-semibold">Phone</h3><p className="text-sm text-muted-foreground">+94 776 265 636 / +94 788 231 878</p></div>
              </CardContent></Card>
              <Card className="border-2"><CardContent className="p-6 flex items-start gap-4">
                <Mail className="w-6 h-6 text-safety-yellow flex-shrink-0" />
                <div><h3 className="font-semibold">Email</h3><p className="text-sm text-muted-foreground">sandali.construction2@gmail.com</p></div>
              </CardContent></Card>
              <Card className="border-2"><CardContent className="p-6 flex items-start gap-4">
                <Globe className="w-6 h-6 text-safety-yellow flex-shrink-0" />
                <div><h3 className="font-semibold">Website</h3><p className="text-sm text-muted-foreground">www.sandaliconstruction.com</p></div>
              </CardContent></Card>

              <div className="flex gap-3">
                <a href="tel:+94776265636" className="flex-1"><Button className="w-full bg-safety-red hover:bg-safety-red/90 gap-2"><Phone className="w-4 h-4" />Call Now</Button></a>
                <a href="https://wa.me/94776265636" target="_blank" rel="noopener noreferrer" className="flex-1"><Button className="w-full bg-safety-green hover:bg-safety-green/90 gap-2"><MessageCircle className="w-4 h-4" />WhatsApp</Button></a>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Map Embed Placeholder</p>
              </div>
            </div>

            {/* Form */}
            <Card className="border-2">
              <CardContent className="p-6">
                <h2 className="font-display text-xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div><Label>Name *</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
                  <div><Label>Phone *</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required /></div>
                  <div><Label>Email</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                  <div><Label>Location</Label><Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} /></div>
                  <div><Label>Message *</Label><Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} required /></div>
                  <Button type="submit" className="w-full bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold">Send Message</Button>
                </form>
                <p className="text-xs text-muted-foreground text-center mt-4">Do not hesitate to reach out with any construction needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
