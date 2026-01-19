import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Ruler, Calculator, Wrench, Droplets, Zap, Shield, Paintbrush, Leaf, Layers, ArrowRight } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";

const categories = [
  { icon: Home, name: "Full House Construction", desc: "Complete residential construction from foundation to finishing.", color: "bg-safety-yellow" },
  { icon: Ruler, name: "Architectural & Design Support", desc: "Professional design services and architectural planning.", color: "bg-safety-blue" },
  { icon: Calculator, name: "Quantity Surveying & Costing", desc: "Accurate cost estimation and project budgeting.", color: "bg-safety-green" },
  { icon: Wrench, name: "Concrete Work", desc: "High-quality structural concrete for foundations and slabs.", color: "bg-safety-orange" },
  { icon: Droplets, name: "Plumbing", desc: "Complete plumbing solutions for residential projects.", color: "bg-safety-blue" },
  { icon: Zap, name: "Electrical", desc: "Safe and reliable electrical installations.", color: "bg-safety-yellow" },
  { icon: Shield, name: "Waterproofing", desc: "Advanced waterproofing for lasting protection.", color: "bg-safety-green" },
  { icon: Wrench, name: "Chemical Anchoring", desc: "Professional anchoring solutions for structural integrity.", color: "bg-safety-red" },
  { icon: Layers, name: "Tiling", desc: "Premium floor and wall tiling services.", color: "bg-safety-orange" },
  { icon: Home, name: "Roofing", desc: "Durable roofing solutions for all climates.", color: "bg-safety-blue" },
  { icon: Paintbrush, name: "Painting", desc: "Interior and exterior painting with quality finishes.", color: "bg-safety-yellow" },
  { icon: Leaf, name: "Landscaping", desc: "Beautiful outdoor spaces and garden design.", color: "bg-safety-green" },
];

export default function Categories() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroServices} alt="Our Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
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
            <Wrench className="w-4 h-4" />
            What We Do
          </motion.span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Our <span className="text-safety-yellow">Services</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive construction services for every need
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border-2 hover:border-safety-yellow/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group overflow-hidden">
                  <CardContent className="p-6 relative">
                    {/* Background decoration */}
                    <div className={`absolute -top-12 -right-12 w-24 h-24 ${cat.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`${cat.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}
                    >
                      <cat.icon className="w-7 h-7 text-foreground" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="w-full group/btn">
                        Enquire
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20 p-12 rounded-3xl bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden"
          >
            <div className="absolute inset-0 pattern-grid opacity-10" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-safety-yellow rounded-full blur-3xl"
            />
            
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                Explore our dream house packages with transparent pricing and comprehensive features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#packages">
                  <Button size="lg" className="bg-safety-yellow text-foreground hover:bg-safety-yellow/90 gap-2">
                    View Packages
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
