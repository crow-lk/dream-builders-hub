import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Check, ArrowRight, Calculator, MessageCircle, Phone,
  BedDouble, Bath, Car, Maximize, Layers, Ruler,
  Zap, Droplets, Paintbrush, Star, Sparkles, Crown, Gem,
  Home, UtensilsCrossed, Trees, Shield, ChevronLeft
} from "lucide-react";
import packageBudget from "@/assets/package-budget.jpg";
import packagePremium from "@/assets/package-premium.jpg";
import packageVip from "@/assets/package-vip.jpg";
import packageVvip from "@/assets/package-vvip.jpg";

interface IncludedItem {
  icon: React.ElementType;
  label: string;
}

interface PackageData {
  id: string;
  name: string;
  tagline: string;
  rate: number;
  badge: string;
  icon: React.ElementType;
  badgeColor: string;
  accentClass: string;
  glowClass: string;
  description: string;
  image: string;
  specs: {
    bedrooms: string;
    bathrooms: string;
    parking: string;
    livingArea: string;
    floors: string;
    kitchen: string;
  };
  features: string[];
  included: IncludedItem[];
  popular: boolean;
}

const packages: Record<string, PackageData> = {
  "budget-home-1": {
    id: "budget-home-1",
    name: "Budget Home 1",
    tagline: "Smart Foundations for First-Time Builders",
    rate: 10000,
    badge: "Essential",
    icon: Star,
    badgeColor: "bg-safety-blue",
    accentClass: "text-safety-blue",
    glowClass: "from-safety-blue/30 to-transparent",
    description:
      "Our Budget Home 1 package is designed for first-time homeowners who want a quality-built home without stretching finances. Every square foot is optimized for functionality and value.",
    image: packageBudget,
    specs: { bedrooms: "3", bathrooms: "2", parking: "1 Car", livingArea: "From 800 sq ft", floors: "1–2 Floors", kitchen: "Open-plan" },
    features: [
      "Standard cement/block finishing",
      "Essential sanitary fittings",
      "Basic electrical wiring & sockets",
      "Standard ceramic floor tiles",
      "Basic interior & exterior paint",
      "Aluminium window frames",
      "Standard door fittings",
      "Basic kitchen cupboards",
    ],
    included: [
      { icon: Home, label: "Full construction" },
      { icon: Ruler, label: "Architectural plan" },
      { icon: Zap, label: "Electrical work" },
      { icon: Droplets, label: "Plumbing work" },
      { icon: Paintbrush, label: "Basic painting" },
      { icon: Shield, label: "1-year warranty" },
    ],
    popular: false,
  },
  "budget-home-2": {
    id: "budget-home-2",
    name: "Budget Home 2",
    tagline: "Best Value — Upgraded Budget Build",
    rate: 12000,
    badge: "Most Popular",
    icon: Sparkles,
    badgeColor: "bg-safety-green",
    accentClass: "text-safety-green",
    glowClass: "from-safety-green/30 to-transparent",
    description:
      "Budget Home 2 offers an upgrade from the Essential package with improved finishes and fittings, making it the most popular choice for families wanting more comfort at a controlled cost.",
    image: packagePremium,
    specs: { bedrooms: "3–4", bathrooms: "2–3", parking: "1–2 Cars", livingArea: "From 1,000 sq ft", floors: "1–2 Floors", kitchen: "Semi-closed" },
    features: [
      "Improved plastered finishing",
      "Better quality sanitary fittings",
      "Enhanced electrical with MCB panel",
      "Ceramic tile flooring throughout",
      "Quality interior & exterior paint",
      "UPVC window frames",
      "Solid wood door frames",
      "Improved kitchen with granite top",
      "Basic garden landscaping",
    ],
    included: [
      { icon: Home, label: "Full construction" },
      { icon: Ruler, label: "Architectural plan" },
      { icon: Zap, label: "Electrical work" },
      { icon: Droplets, label: "Plumbing work" },
      { icon: Paintbrush, label: "Quality painting" },
      { icon: Trees, label: "Basic landscaping" },
      { icon: Shield, label: "2-year warranty" },
    ],
    popular: true,
  },
  "vip": {
    id: "vip",
    name: "VIP Package",
    tagline: "Premium Living — Superior Materials",
    rate: 18000,
    badge: "Premium",
    icon: Crown,
    badgeColor: "bg-safety-orange",
    accentClass: "text-safety-orange",
    glowClass: "from-safety-orange/30 to-transparent",
    description:
      "The VIP Package delivers premium construction quality with designer selections and upgraded systems throughout. Ideal for families who want a home that stands out in both style and durability.",
    image: packageVip,
    specs: { bedrooms: "4–5", bathrooms: "3–4", parking: "2 Cars", livingArea: "From 1,500 sq ft", floors: "1–3 Floors", kitchen: "Closed gourmet" },
    features: [
      "Premium plaster & smooth finish",
      "Designer sanitary ware",
      "Premium MCB + surge protected electrical",
      "Porcelain tile flooring",
      "Premium paint with texture accents",
      "Aluminium sliding & casement windows",
      "Engineered wood door frames",
      "Custom kitchen with island & granite top",
      "Garden landscaping with irrigation",
      "Built-in wardrobes",
      "Custom woodwork & joinery",
    ],
    included: [
      { icon: Home, label: "Full construction" },
      { icon: Ruler, label: "Design support" },
      { icon: Zap, label: "Premium electrical" },
      { icon: Droplets, label: "Premium plumbing" },
      { icon: Paintbrush, label: "Premium finishes" },
      { icon: Trees, label: "Landscaping" },
      { icon: UtensilsCrossed, label: "Custom kitchen" },
      { icon: Shield, label: "3-year warranty" },
    ],
    popular: false,
  },
  "vvip": {
    id: "vvip",
    name: "VVIP Package",
    tagline: "Ultimate Luxury for Discerning Clients",
    rate: 35000,
    badge: "Luxury",
    icon: Gem,
    badgeColor: "bg-safety-yellow",
    accentClass: "text-safety-yellow",
    glowClass: "from-safety-yellow/30 to-transparent",
    description:
      "The VVIP Package represents the pinnacle of residential construction. Every detail is crafted to the highest standards with imported materials, bespoke design, and smart home integration.",
    image: packageVvip,
    specs: { bedrooms: "5+", bathrooms: "4+", parking: "3+ Cars", livingArea: "From 2,500 sq ft", floors: "2–4 Floors", kitchen: "Chef's kitchen" },
    features: [
      "Luxury hand-finished interiors",
      "Imported designer sanitary ware",
      "Smart home electrical system (app-controlled)",
      "Imported marble & porcelain flooring",
      "Designer paint, Venetian plaster & feature walls",
      "Premium aluminium curtain wall systems",
      "Solid teak & engineered wood joinery",
      "Bespoke kitchen with imported appliances",
      "Full landscape design & water features",
      "Home theatre & entertainment prep",
      "Solar-ready roofing system",
      "EV car charger point",
      "CCTV & security system",
      "Swimming pool consultation",
    ],
    included: [
      { icon: Home, label: "Full luxury build" },
      { icon: Ruler, label: "Bespoke design" },
      { icon: Zap, label: "Smart electrical" },
      { icon: Droplets, label: "Luxury plumbing" },
      { icon: Paintbrush, label: "Designer finishes" },
      { icon: Trees, label: "Full landscaping" },
      { icon: UtensilsCrossed, label: "Chef's kitchen" },
      { icon: Shield, label: "5-year warranty" },
    ],
    popular: false,
  },
};

export default function PackageDetail() {
  const { packageId } = useParams<{ packageId: string }>();
  const pkg = packageId ? packages[packageId] : null;

  if (!pkg) return <Navigate to="/packages" replace />;

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-LK").format(amount);

  const PackageIcon = pkg.icon;

  const specItems = [
    { icon: BedDouble, label: "Bedrooms", value: pkg.specs.bedrooms },
    { icon: Bath, label: "Bathrooms", value: pkg.specs.bathrooms },
    { icon: Car, label: "Parking", value: pkg.specs.parking },
    { icon: Maximize, label: "Living Area", value: pkg.specs.livingArea },
    { icon: Layers, label: "Floors", value: pkg.specs.floors },
    { icon: UtensilsCrossed, label: "Kitchen", value: pkg.specs.kitchen },
  ];

  return (
    <Layout>
      {/* ─── Hero ─── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/10" />
          {/* Colored glow from accent */}
          <div className={`absolute inset-0 bg-gradient-to-tr ${pkg.glowClass} opacity-40`} />
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-14">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link
              to="/packages"
              className="inline-flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Packages
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`${pkg.badgeColor} p-2.5 rounded-xl shadow-lg`}>
                <PackageIcon className="w-6 h-6 text-foreground" />
              </span>
              <span className={`${pkg.badgeColor} text-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-lg`}>
                {pkg.badge}
              </span>
              {pkg.popular && (
                <span className="bg-safety-green text-foreground px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </span>
              )}
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-3 leading-none">
              {pkg.name}
            </h1>
            <p className="text-primary-foreground/70 text-xl md:text-2xl font-light">{pkg.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* ─── Sticky Price Bar ─── */}
      <div className="bg-primary border-b border-border/20 sticky top-16 md:top-20 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl md:text-4xl font-bold text-safety-yellow">
              LKR {formatCurrency(pkg.rate)}
            </span>
            <span className="text-primary-foreground/50 text-sm">per sq ft</span>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link to="/calculator">
              <Button size="sm" className="gap-2 bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold">
                <Calculator className="w-4 h-4" />
                Calculate Budget
              </Button>
            </Link>
            <a href="https://wa.me/94776265636" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 bg-safety-green hover:bg-safety-green/90">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Left column */}
            <div className="lg:col-span-2 space-y-14">

              {/* About */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-safety-yellow rounded-full" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold">About this Package</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg pl-4 border-l border-border">
                  {pkg.description}
                </p>
              </motion.div>

              {/* Key Specs */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-safety-yellow rounded-full" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold">Key Specifications</h2>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {specItems.map((spec, i) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card hover:border-safety-yellow/60 transition-all duration-300 hover:shadow-lg p-5"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-safety-yellow/5 rounded-full -translate-y-8 translate-x-8 group-hover:bg-safety-yellow/10 transition-colors" />
                      <div className="flex items-start gap-4">
                        <div className="bg-secondary rounded-xl p-2.5 flex-shrink-0">
                          <spec.icon className="w-5 h-5 text-foreground" />
                        </div>
                        <div>
                          <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-widest mb-1">
                            {spec.label}
                          </p>
                          <p className="font-bold text-foreground text-base">{spec.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-safety-yellow rounded-full" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold">What's Included</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {pkg.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-transparent hover:border-safety-green/30 hover:bg-secondary/80 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-full bg-safety-green/15 flex items-center justify-center flex-shrink-0 group-hover:bg-safety-green/25 transition-colors">
                        <Check className="w-4 h-4 text-safety-green" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">

              {/* Services included */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="rounded-2xl border-2 border-border bg-card overflow-hidden">
                  <div className="bg-secondary px-6 py-4 border-b border-border">
                    <h3 className="font-display font-bold text-lg">Services Included</h3>
                  </div>
                  <div className="p-5 grid grid-cols-2 gap-3">
                    {pkg.included.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary hover:bg-secondary/60 transition-colors text-center"
                      >
                        <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center shadow-sm">
                          <item.icon className="w-5 h-5 text-foreground" />
                        </div>
                        <span className="text-xs font-semibold leading-tight text-muted-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CTA card */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="rounded-2xl overflow-hidden border-2 border-safety-yellow/40 shadow-lg shadow-safety-yellow/5">
                  {/* Yellow header strip */}
                  <div className="bg-safety-yellow px-6 py-4">
                    <h3 className="font-display font-bold text-lg text-foreground">Ready to Build?</h3>
                    <p className="text-foreground/70 text-sm mt-0.5">Get your personalised estimate today</p>
                  </div>
                  <div className="bg-card p-5 space-y-3">
                    <Link to="/calculator" className="block">
                      <Button className="w-full gap-2 h-11">
                        <Calculator className="w-4 h-4" />
                        Calculate My Budget
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </Button>
                    </Link>
                    <a href="tel:+94776265636" className="block">
                      <Button variant="outline" className="w-full gap-2 h-11">
                        <Phone className="w-4 h-4" />
                        Call Us Now
                      </Button>
                    </a>
                    <a href="https://wa.me/94776265636" target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full gap-2 h-11 bg-safety-green hover:bg-safety-green/90">
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                    <p className="text-xs text-muted-foreground text-center pt-1">
                      Rates are estimates. Final cost depends on design, site conditions, and material selections.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Other Packages ─── */}
      <section className="py-16 border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-safety-yellow rounded-full" />
            <h2 className="font-display text-2xl font-bold">Explore Other Packages</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {Object.values(packages)
              .filter((p) => p.id !== pkg.id)
              .map((p) => {
                const PIcon = p.icon;
                return (
                  <Link key={p.id} to={`/packages/${p.id}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group rounded-2xl border-2 border-border bg-card hover:border-safety-yellow/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                          <span className={`${p.badgeColor} p-1.5 rounded-lg`}>
                            <PIcon className="w-3.5 h-3.5 text-foreground" />
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="font-bold text-sm mb-0.5">{p.name}</p>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-1">{p.tagline}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-safety-yellow text-sm">
                            LKR {formatCurrency(p.rate)}<span className="text-muted-foreground font-normal text-xs">/sqft</span>
                          </span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
