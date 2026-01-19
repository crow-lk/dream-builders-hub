import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Clock, Users, Wrench, Paintbrush, Droplets, Zap, Home, Ruler, Leaf, Shield, Heart, Target, Lightbulb } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import constructionTeam from "@/assets/construction-team.jpg";
import aboutConstructionSite from "@/assets/about-construction-site.jpg";
import aboutOffice from "@/assets/about-office.jpg";
import aboutCompletedProject from "@/assets/about-completed-project.jpg";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import luxuryHome from "@/assets/luxury-home.jpg";

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

const values = [
  { icon: Award, title: "Excellence", desc: "We strive for the highest quality in every project" },
  { icon: Heart, title: "Integrity", desc: "Honest and transparent in all our dealings" },
  { icon: Target, title: "Reliability", desc: "Delivering on time, every time" },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing modern techniques and materials" },
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
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroAbout} alt="About Us" className="w-full h-full object-cover brightness-90" />
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
            <Users className="w-4 h-4" />
            Since 2003
          </motion.span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            About <span className="text-safety-yellow">Sandali Construction</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Your Trusted Construction Partner for Over Two Decades
          </p>
        </motion.div>
      </section>

      {/* Image Gallery Strip */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[aboutConstructionSite, aboutOffice, aboutCompletedProject, interiorLuxury].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group"
              >
                <img 
                  src={img} 
                  alt={`About image ${index + 1}`} 
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-safety-yellow font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Building Dreams <span className="text-safety-yellow">Since 2003</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Sandali Construction, we are dedicated to the art of construction and the pursuit of excellence. 
                  Our company thrives on delivering superior quality and meticulous attention to detail in every project we undertake.
                </p>
                <p>
                  With a steadfast commitment to timely completion, we ensure that your dreams are realized on schedule. 
                  Collaboration is at the heart of our approach—we work closely with clients, blending innovative techniques with traditional craftsmanship.
                </p>
                <p>
                  Established in 2003, Sandali Construction has evolved with industry trends and sustainable practices, 
                  building long-lasting connections and exceeding expectations for over two decades.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={constructionTeam} alt="Our Team" className="w-full h-96 object-cover brightness-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              </div>
              
              {/* Secondary images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-6 -left-6 w-32 h-32 rounded-xl overflow-hidden border-4 border-background shadow-xl"
              >
                <img src={luxuryHome} alt="Completed project" className="w-full h-full object-cover" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 w-40 h-32 rounded-xl overflow-hidden border-4 border-background shadow-xl"
              >
                <img src={aboutOffice} alt="Our office" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* CEO Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-4 right-4"
              >
                <Card className="bg-card/95 backdrop-blur-sm border-2 shadow-xl">
                  <CardContent className="p-4 flex items-center gap-4">
                    <img src={ceoPortrait} alt="CEO" className="w-16 h-16 rounded-full object-cover ring-2 ring-safety-yellow" />
                    <div>
                      <p className="text-sm text-muted-foreground">Founder & CEO</p>
                      <p className="font-display font-bold text-lg">Mr. A. Kulasiri Jayashingha</p>
                      <p className="text-xs text-safety-yellow">20+ Years of Leadership</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={aboutCompletedProject} alt="Completed luxury home" className="w-full h-full object-cover brightness-95" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-safety-yellow font-semibold text-sm uppercase tracking-wider">Our Work</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Creating <span className="text-safety-yellow">Masterpieces</span>
              </h2>
              <p className="text-primary-foreground/80">
                Every project we undertake is a testament to our commitment to excellence. 
                From initial concept to final handover, we ensure every detail reflects quality craftsmanship.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-primary-foreground/10 rounded-xl">
                  <p className="font-display text-3xl font-bold text-safety-yellow">500+</p>
                  <p className="text-sm text-primary-foreground/70">Projects</p>
                </div>
                <div className="text-center p-4 bg-primary-foreground/10 rounded-xl">
                  <p className="font-display text-3xl font-bold text-safety-yellow">20+</p>
                  <p className="text-sm text-primary-foreground/70">Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-safety-yellow font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Why Choose <span className="text-safety-yellow">Us</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-safety-yellow/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group text-center">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-safety-yellow rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                      <value.icon className="w-8 h-8 text-foreground" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-safety-yellow font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Our <span className="text-safety-yellow">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {services.map((s, index) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-10 h-10 bg-safety-yellow/20 rounded-lg flex items-center justify-center group-hover:bg-safety-yellow transition-colors">
                  <s.icon className="w-5 h-5 text-safety-yellow group-hover:text-foreground transition-colors" />
                </div>
                <span className="text-sm font-medium">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-safety-yellow font-semibold text-sm uppercase tracking-wider">Our People</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Meet Our <span className="text-safety-yellow">Team</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Skilled professionals dedicated to shaping your vision into reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((m, index) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-safety-yellow/50 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-safety-yellow to-safety-orange rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-foreground font-bold text-xl">{m.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</span>
                    </div>
                    <h3 className="font-semibold">{m.name}</h3>
                    <p className="text-sm text-muted-foreground">{m.role}</p>
                    {m.exp && (
                      <span className="inline-block mt-2 text-xs bg-safety-yellow/20 text-safety-yellow px-2 py-1 rounded-full">
                        {m.exp}
                      </span>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-safety-yellow font-semibold text-sm uppercase tracking-wider">Our Promise</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Our <span className="text-safety-yellow">Commitment</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {commitments.map((c, index) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-secondary rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-safety-green flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
