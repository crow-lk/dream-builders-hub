import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Globe, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroContact from "@/assets/hero-contact.jpg";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", phone: "", email: "", location: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "1/54, Daraniyagala Road, Dehiowita, Sri Lanka", color: "bg-safety-blue" },
    { icon: Phone, label: "Phone", value: "+94 776 265 636 / +94 788 231 878", color: "bg-safety-green" },
    { icon: Mail, label: "Email", value: "sandali.construction2@gmail.com", color: "bg-safety-orange" },
    { icon: Globe, label: "Website", value: "www.sandaliconstruction.com", color: "bg-safety-yellow" },
    { icon: Clock, label: "Working Hours", value: "Mon - Sat: 8:00 AM - 6:00 PM", color: "bg-safety-red" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroContact} alt="Contact Us" className="w-full h-full object-cover brightness-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-safety-yellow/20 backdrop-blur-sm px-4 py-2 rounded-full text-safety-yellow text-sm font-semibold mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </motion.span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Contact <span className="text-safety-yellow">Us</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss your dream project together
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Let's Build <span className="text-safety-yellow">Together</span>
                </h2>
                <p className="text-muted-foreground">
                  Have a project in mind? We'd love to hear about it. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-2 hover:border-safety-yellow/50 transition-all duration-300 hover:shadow-lg group">
                      <CardContent className="p-4 flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <item.icon className="w-5 h-5 text-foreground" />
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-sm text-muted-foreground">{item.label}</h3>
                          <p className="text-foreground text-sm md:text-base break-words">{item.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <a href="tel:+94776265636" className="flex-1">
                  <Button className="w-full bg-safety-red hover:bg-safety-red/90 gap-2 h-12 text-sm md:text-base">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/94776265636" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-safety-green hover:bg-safety-green/90 gap-2 h-12 text-sm md:text-base">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>

              {/* Map */}
              <Card className="border-2 overflow-hidden">
                <div className="aspect-[16/10] bg-secondary">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123!2d80.21!3d6.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMzYuMCJOIDgwwrAxMiczMi40IkU!5e0!3m2!1sen!2slk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 lg:sticky lg:top-24">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-safety-yellow rounded-xl flex items-center justify-center">
                      <Send className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold">Send us a Message</h2>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Name *</Label>
                        <Input 
                          value={form.name} 
                          onChange={(e) => setForm({ ...form, name: e.target.value })} 
                          placeholder="Your name"
                          className="h-12"
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Phone *</Label>
                        <Input 
                          value={form.phone} 
                          onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                          placeholder="+94 XXX XXX XXX"
                          className="h-12"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Email</Label>
                      <Input 
                        type="email" 
                        value={form.email} 
                        onChange={(e) => setForm({ ...form, email: e.target.value })} 
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Location</Label>
                      <Input 
                        value={form.location} 
                        onChange={(e) => setForm({ ...form, location: e.target.value })} 
                        placeholder="Your city or area"
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Message *</Label>
                      <Textarea 
                        value={form.message} 
                        onChange={(e) => setForm({ ...form, message: e.target.value })} 
                        placeholder="Tell us about your project..."
                        rows={5} 
                        required 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold h-12 gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-secondary rounded-xl">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-safety-green flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground">
                        By submitting this form, you agree to our terms. We respect your privacy and will never share your information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
