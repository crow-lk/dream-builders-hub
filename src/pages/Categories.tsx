import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Ruler, Calculator, Wrench, Droplets, Zap, Shield, Paintbrush, Leaf, Layers } from "lucide-react";

const categories = [
  { icon: Home, name: "Full House Construction", desc: "Complete residential construction from foundation to finishing." },
  { icon: Ruler, name: "Architectural & Design Support", desc: "Professional design services and architectural planning." },
  { icon: Calculator, name: "Quantity Surveying & Costing", desc: "Accurate cost estimation and project budgeting." },
  { icon: Wrench, name: "Concrete Work", desc: "High-quality structural concrete for foundations and slabs." },
  { icon: Droplets, name: "Plumbing", desc: "Complete plumbing solutions for residential projects." },
  { icon: Zap, name: "Electrical", desc: "Safe and reliable electrical installations." },
  { icon: Shield, name: "Waterproofing", desc: "Advanced waterproofing for lasting protection." },
  { icon: Wrench, name: "Chemical Anchoring", desc: "Professional anchoring solutions for structural integrity." },
  { icon: Layers, name: "Tiling", desc: "Premium floor and wall tiling services." },
  { icon: Home, name: "Roofing", desc: "Durable roofing solutions for all climates." },
  { icon: Paintbrush, name: "Painting", desc: "Interior and exterior painting with quality finishes." },
  { icon: Leaf, name: "Landscaping", desc: "Beautiful outdoor spaces and garden design." },
];

export default function Categories() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Categories</h1>
          <p className="text-xl text-muted-foreground">Comprehensive construction services for every need</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Card key={cat.name} className="card-hover border-2">
                <CardContent className="p-6">
                  <cat.icon className="w-10 h-10 text-safety-yellow mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="w-full">Enquire</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <SectionHeader title="View Our Packages" subtitle="Explore our dream house packages with transparent pricing." />
            <Link to="/#packages">
              <Button size="lg" className="bg-safety-yellow text-foreground hover:bg-safety-yellow/90">View Packages</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
