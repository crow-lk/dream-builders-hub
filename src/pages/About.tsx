import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Clock, Users, Wrench, Paintbrush, Droplets, Zap, Home, Ruler, Leaf, Shield } from "lucide-react";

const services = [
  { icon: Ruler, name: "Site Analysis & Feasibility Studies" },
  { icon: Home, name: "Preliminary Design Studies" },
  { icon: Wrench, name: "Concrete Work" },
  { icon: Droplets, name: "Plumbing Work" },
  { icon: Zap, name: "Electrical Work" },
  { icon: Leaf, name: "Landscaping" },
  { icon: Shield, name: "Chemical Anchoring" },
  { icon: Droplets, name: "Waterproofing" },
  { icon: Home, name: "Tiling" },
  { icon: Home, name: "Roofing" },
  { icon: Wrench, name: "Titanium Work" },
  { icon: Paintbrush, name: "Painting Walls" },
];

const team = [
  { name: "Mr. Indika Rupasinghe (BSc)", role: "Engineer", exp: "" },
  { name: "Mr. WLS Chaminda (NCT, Civil / QS)", role: "Quantity Surveyor", exp: "" },
  { name: "Mr. Nishantha Weerarathne (NCT, Civil)", role: "Site Manager", exp: "" },
  { name: "Mr. Sampath Manomashantha (NCT, Civil)", role: "Site Manager", exp: "" },
  { name: "Mr. Vinil Susantha Jayasinghe", role: "Site Supervisor", exp: "25+ Years Experience" },
  { name: "Mr. SL Sunil", role: "Site Supervisor", exp: "12+ Years Experience" },
  { name: "Mr. SP Weerarathne (BBA Special)", role: "Accountant", exp: "12+ Years Experience" },
];

const commitments = [
  "Committed to superior quality and results",
  "Broad vision. Careful thought. Hand-crafted design",
  "Our reputation is as solid as concrete",
  "Building your vision, creating reality",
  "Put us to the test; we are better than the rest",
  "Listen better. Plan better. Build better",
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Sandali Construction</h1>
          <p className="text-xl text-muted-foreground">Trusted Construction Partner Since 2003</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto text-muted-foreground space-y-4">
            <p>At Sandali Construction, we are dedicated to the art of construction and the pursuit of excellence. Our company thrives on delivering superior quality and meticulous attention to detail in every project we undertake.</p>
            <p>With a steadfast commitment to timely completion, we ensure that your dreams are realized on schedule. Collaboration is at the heart of our approach—we work closely with clients, blending innovative techniques with traditional craftsmanship.</p>
            <p>Established in 2003, Sandali Construction has evolved with industry trends and sustainable practices, building long-lasting connections and exceeding expectations for over two decades.</p>
          </div>
          <Card className="bg-secondary border-none mt-8 max-w-md mx-auto">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Owner / CEO</p>
                <p className="font-display font-semibold text-lg">Mr. A. Kulasiri Jayashingha</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader title="Why Choose Us" />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="card-hover border-2"><CardContent className="p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-safety-yellow" />
              <h3 className="font-semibold text-lg mb-2">Unwavering Quality</h3>
              <p className="text-sm text-muted-foreground">Superior craftsmanship and attention to detail in every project.</p>
            </CardContent></Card>
            <Card className="card-hover border-2"><CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-safety-orange" />
              <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
              <p className="text-sm text-muted-foreground">On time and within budget delivery for 20+ years.</p>
            </CardContent></Card>
            <Card className="card-hover border-2"><CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-safety-green" />
              <h3 className="font-semibold text-lg mb-2">Client-Centric</h3>
              <p className="text-sm text-muted-foreground">Innovative solutions tailored to your unique needs.</p>
            </CardContent></Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Services" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {services.map((s) => (
              <div key={s.name} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                <s.icon className="w-5 h-5 text-safety-yellow flex-shrink-0" />
                <span className="text-sm font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Team" subtitle="Skilled professionals dedicated to shaping your vision into reality." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((m) => (
              <Card key={m.name} className="border-2"><CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-bold">{m.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
                {m.exp && <p className="text-xs text-safety-yellow mt-1">{m.exp}</p>}
              </CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Commitment" />
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3">
              {commitments.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-safety-green flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
