import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BedDouble, Bath, Car, Maximize, ArrowRight,
  Star, Sparkles, Crown, Gem, Calculator
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
      {/* Hero */}
      <section className="relative py-24 md:py-36 bg-primary overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 -left-32 w-64 h-64 bg-safety-orange rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-safety-yellow/20 backdrop-blur-sm px-4 py-2 rounded-full text-safety-yellow text-sm font-semibold mb-6"
          >
            <Calculator className="w-4 h-4" />
            Dream House Packages
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            Choose Your <span className="text-safety-yellow">Dream Home</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-xl max-w-2xl mx-auto"
          >
            Four expertly crafted packages — from essential to luxury — each built with quality materials and expert workmanship.
          </motion.p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => {
              const PIcon = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full overflow-hidden border-2 group hover:shadow-2xl transition-all duration-500 relative ${
                    pkg.popular ? "border-safety-green ring-2 ring-safety-green/20" : "hover:border-safety-yellow/50"
                  }`}>
                    {pkg.popular && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-safety-green text-foreground px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Sparkles className="w-3 h-3" /> Most Popular
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className={`${pkg.badgeColor} p-2 rounded-xl`}>
                          <PIcon className="w-5 h-5 text-foreground" />
                        </span>
                        <span className={`${pkg.badgeColor} text-foreground px-3 py-1 rounded-full text-xs font-semibold`}>
                          {pkg.badge}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h2 className="font-display text-2xl font-bold mb-1">{pkg.name}</h2>
                      <p className="text-muted-foreground text-sm mb-5">{pkg.tagline}</p>

                      {/* Specs row */}
                      <div className="grid grid-cols-4 gap-2 mb-6 p-4 bg-secondary rounded-xl">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <BedDouble className="w-4 h-4 text-muted-foreground" />
                          <span className="font-bold text-sm">{pkg.specs.bedrooms}</span>
                          <span className="text-[10px] text-muted-foreground leading-tight">Beds</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <Bath className="w-4 h-4 text-muted-foreground" />
                          <span className="font-bold text-sm">{pkg.specs.bathrooms}</span>
                          <span className="text-[10px] text-muted-foreground leading-tight">Baths</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <Car className="w-4 h-4 text-muted-foreground" />
                          <span className="font-bold text-sm">{pkg.specs.parking}</span>
                          <span className="text-[10px] text-muted-foreground leading-tight">Parking</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <Maximize className="w-4 h-4 text-muted-foreground" />
                          <span className="font-bold text-[10px] leading-tight text-center">{pkg.specs.area}</span>
                          <span className="text-[10px] text-muted-foreground leading-tight">Area</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6">
                        {pkg.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-safety-green flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Price + CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <span className="font-display text-2xl font-bold text-safety-yellow">
                            LKR {formatCurrency(pkg.rate)}
                          </span>
                          <span className="text-muted-foreground text-xs ml-1">/ sq ft</span>
                        </div>
                        <Link to={`/packages/${pkg.id}`}>
                          <Button className={`gap-2 ${pkg.popular ? "bg-safety-green hover:bg-safety-green/90" : ""}`}>
                            View Details
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
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
