import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  BedDouble, Bath, Car, Maximize, ArrowRight,
  Star, Sparkles, Crown, Gem, Calculator, Check
} from "lucide-react";
import packageBudget from "@/assets/package-budget.jpg";
import packagePremium from "@/assets/package-premium.jpg";
import packageVip from "@/assets/package-vip.jpg";
import packageVvip from "@/assets/package-vvip.jpg";

const packages = [
  {
    id: "budget-home-1",
    name: "Budget Home 1",
    tagline: "Smart Foundations for First-Time Builders",
    rate: 10000,
    badge: "Essential",
    icon: Star,
    badgeColor: "bg-safety-blue",
    image: packageBudget,
    specs: { bedrooms: "3", bathrooms: "2", parking: "1 Car", area: "From 800 sq ft" },
    highlights: ["Standard finishing", "Essential fittings", "Basic electrical & plumbing", "Standard flooring"],
    popular: false,
  },
  {
    id: "budget-home-2",
    name: "Budget Home 2",
    tagline: "Best Value — Upgraded Budget Build",
    rate: 12000,
    badge: "Popular",
    icon: Sparkles,
    badgeColor: "bg-safety-green",
    image: packagePremium,
    specs: { bedrooms: "3–4", bathrooms: "2–3", parking: "1–2 Cars", area: "From 1,000 sq ft" },
    highlights: ["Improved finishing", "Better quality fittings", "Enhanced electrical", "Ceramic tile flooring"],
    popular: true,
  },
  {
    id: "vip",
    name: "VIP Package",
    tagline: "Premium Living — Superior Materials",
    rate: 18000,
    badge: "Premium",
    icon: Crown,
    badgeColor: "bg-safety-orange",
    image: packageVip,
    specs: { bedrooms: "4–5", bathrooms: "3–4", parking: "2 Cars", area: "From 1,500 sq ft" },
    highlights: ["Premium materials", "Design support", "Porcelain tile flooring", "Custom woodwork"],
    popular: false,
  },
  {
    id: "vvip",
    name: "VVIP Package",
    tagline: "Ultimate Luxury for Discerning Clients",
    rate: 35000,
    badge: "Luxury",
    icon: Gem,
    badgeColor: "bg-safety-yellow",
    image: packageVvip,
    specs: { bedrooms: "5+", bathrooms: "4+", parking: "3+ Cars", area: "From 2,500 sq ft" },
    highlights: ["Luxury finishing", "Smart home ready", "Imported materials", "Designer interiors"],
    popular: false,
  },
];

export default function Packages() {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-LK").format(amount);

  return (
    <Layout>
      {/* ─── Hero ─── */}
      <section className="relative py-28 md:py-40 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-safety-yellow rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.3, 1, 1.3], opacity: [0.04, 0.1, 0.04] }}
            transition={{ duration: 14, repeat: Infinity }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-safety-orange rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-safety-yellow/20 backdrop-blur-sm border border-safety-yellow/30 px-5 py-2.5 rounded-full text-safety-yellow text-sm font-semibold mb-8"
          >
            <Calculator className="w-4 h-4" />
            Dream House Packages
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-5 leading-none"
          >
            Choose Your<br />
            <span className="text-safety-yellow">Dream Home</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/60 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Four expertly crafted packages — from essential to luxury — each built with quality materials and expert workmanship.
          </motion.p>
        </div>
      </section>

      {/* ─── Packages ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {packages.map((pkg, index) => {
              const PIcon = pkg.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`group relative rounded-3xl border-2 overflow-hidden bg-card transition-all duration-500 hover:shadow-2xl ${
                    pkg.popular ? "border-safety-green ring-4 ring-safety-green/10" : "border-border hover:border-safety-yellow/50"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-5 right-5 z-20">
                      <span className="bg-safety-green text-foreground px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <Sparkles className="w-3 h-3" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    {/* Image side */}
                    <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden flex-shrink-0">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-${isEven ? "r" : "l"} from-transparent to-card/80`} />
                      {/* Price badge on image */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-primary/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-safety-yellow/30">
                          <span className="font-display text-2xl font-bold text-safety-yellow">
                            LKR {formatCurrency(pkg.rate)}
                          </span>
                          <span className="text-primary-foreground/50 text-xs ml-1">/ sq ft</span>
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="flex-1 p-7 md:p-9 flex flex-col justify-between">
                      <div>
                        {/* Badge + name */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`${pkg.badgeColor} p-2 rounded-xl`}>
                            <PIcon className="w-5 h-5 text-foreground" />
                          </span>
                          <span className={`${pkg.badgeColor} text-foreground px-3 py-1 rounded-full text-xs font-bold`}>
                            {pkg.badge}
                          </span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-1">{pkg.name}</h2>
                        <p className="text-muted-foreground text-base mb-6">{pkg.tagline}</p>

                        {/* Specs strip */}
                        <div className="grid grid-cols-4 gap-3 mb-6">
                          {[
                            { icon: BedDouble, label: "Beds", value: pkg.specs.bedrooms },
                            { icon: Bath, label: "Baths", value: pkg.specs.bathrooms },
                            { icon: Car, label: "Parking", value: pkg.specs.parking },
                            { icon: Maximize, label: "Area", value: pkg.specs.area },
                          ].map((s) => (
                            <div key={s.label} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-secondary text-center">
                              <s.icon className="w-4 h-4 text-muted-foreground" />
                              <span className="font-bold text-sm leading-tight">{s.value}</span>
                              <span className="text-[10px] text-muted-foreground">{s.label}</span>
                            </div>
                          ))}
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-2 mb-7">
                          {pkg.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2 text-sm">
                              <div className="w-5 h-5 rounded-full bg-safety-green/15 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-safety-green" />
                              </div>
                              <span className="text-muted-foreground">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-border">
                        <Link to={`/packages/${pkg.id}`} className="flex-1">
                          <Button
                            size="lg"
                            className={`w-full gap-2 font-semibold ${
                              pkg.popular ? "bg-safety-green hover:bg-safety-green/90" : ""
                            }`}
                          >
                            View Full Details
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Link to="/calculator">
                          <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                            <Calculator className="w-4 h-4" />
                            Calculate
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto"
          >
            <strong>Note:</strong> Rates are estimates; final cost depends on design, site conditions, and material selections.
            Contact us for a personalized quote.
          </motion.p>
        </div>
      </section>
    </Layout>
  );
}
