import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Check, Sparkles, Crown, Gem, Star, ArrowRight, BedDouble, Bath, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import packageBudget from "@/assets/package-budget.jpg";
import packagePremium from "@/assets/package-premium.jpg";
import packageVip from "@/assets/package-vip.jpg";
import packageVvip from "@/assets/package-vvip.jpg";

const packages = [
  {
    id: "budget-home-1",
    name: "Budget Home 1",
    rate: 10000,
    badge: "Essential",
    icon: Star,
    badgeColor: "bg-safety-blue",
    description: "Perfect for budget-conscious first-time home builders",
    image: packageBudget,
    specs: { bedrooms: "3", bathrooms: "2", parking: "1 Car" },
    features: [
      "Standard finishing",
      "Essential fittings",
      "Basic electrical & plumbing",
      "Standard flooring",
      "Basic paint finish",
    ],
  },
  {
    id: "budget-home-2",
    name: "Budget Home 2",
    rate: 12000,
    badge: "Popular",
    icon: Sparkles,
    badgeColor: "bg-safety-green",
    description: "Best value for upgraded budget builds",
    image: packagePremium,
    specs: { bedrooms: "3–4", bathrooms: "2–3", parking: "1–2 Cars" },
    features: [
      "Improved finishing",
      "Better quality fittings",
      "Enhanced electrical",
      "Ceramic tile flooring",
      "Quality paint finish",
    ],
    popular: true,
  },
  {
    id: "vip",
    name: "VIP",
    rate: 18000,
    badge: "Premium",
    icon: Crown,
    badgeColor: "bg-safety-orange",
    description: "Premium living with superior materials",
    image: packageVip,
    specs: { bedrooms: "4–5", bathrooms: "3–4", parking: "2 Cars" },
    features: [
      "Premium materials",
      "Design support included",
      "Premium electrical & plumbing",
      "Porcelain tile flooring",
      "Premium paint & finishes",
      "Custom woodwork",
    ],
  },
  {
    id: "vvip",
    name: "VVIP",
    rate: 35000,
    badge: "Luxury",
    icon: Gem,
    badgeColor: "bg-safety-yellow",
    description: "Ultimate luxury for discerning clients",
    image: packageVvip,
    specs: { bedrooms: "5+", bathrooms: "4+", parking: "3+ Cars" },
    features: [
      "Luxury finishing throughout",
      "Custom design selections",
      "High-end electrical systems",
      "Imported tile options",
      "Designer paint & textures",
      "Premium woodwork",
      "Smart home ready",
    ],
  },
];

export function PackagesSection() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-LK").format(amount);
  };

  return (
    <section id="packages" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-safety-blue via-safety-yellow to-safety-orange" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/4 -left-32 w-64 h-64 bg-safety-orange rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-safety-yellow font-semibold text-sm uppercase tracking-wider">
            <span className="w-8 h-px bg-safety-yellow" />
            Our Packages
            <span className="w-8 h-px bg-safety-yellow" />
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Dream House <span className="text-gradient-yellow">Packages</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Choose the perfect package for your dream home. All packages include complete construction 
            with quality materials and expert workmanship.
          </p>
        </motion.div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={`h-full overflow-hidden bg-card border-2 transition-all duration-500 hover:shadow-2xl relative group ${
                pkg.popular ? 'border-safety-green ring-2 ring-safety-green/20' : 'hover:border-safety-yellow/50'
              }`}>
                {pkg.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 z-20"
                  >
                    <span className="bg-safety-green text-foreground px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </motion.div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`${pkg.badgeColor} text-foreground p-2 rounded-xl`}>
                        <pkg.icon className="w-5 h-5" />
                      </span>
                      <span className={`${pkg.badgeColor} text-foreground px-3 py-1 rounded-full text-xs font-semibold`}>
                        {pkg.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{pkg.name}</h3>
                  </div>
                </div>

                <CardContent className="pt-6 pb-4">
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                  {/* Specs row */}
                  <div className="grid grid-cols-3 gap-2 mb-5 p-3 rounded-xl bg-secondary">
                    <div className="flex flex-col items-center gap-1">
                      <BedDouble className="w-4 h-4 text-muted-foreground" />
                      <span className="font-bold text-sm">{pkg.specs.bedrooms}</span>
                      <span className="text-[10px] text-muted-foreground">Beds</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-x border-border">
                      <Bath className="w-4 h-4 text-muted-foreground" />
                      <span className="font-bold text-sm">{pkg.specs.bathrooms}</span>
                      <span className="text-[10px] text-muted-foreground">Baths</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Car className="w-4 h-4 text-muted-foreground" />
                      <span className="font-bold text-sm text-center leading-tight">{pkg.specs.parking}</span>
                      <span className="text-[10px] text-muted-foreground">Parking</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-3 rounded-xl bg-secondary flex items-baseline gap-1">
                    <span className="font-display text-2xl font-bold text-safety-yellow">
                      LKR {formatCurrency(pkg.rate)}
                    </span>
                    <span className="text-muted-foreground text-sm">/ sq ft</span>
                  </div>
                  
                  <ul className="space-y-1.5">
                    {pkg.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-safety-green flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {pkg.features.length > 4 && (
                      <li className="text-sm text-muted-foreground pl-6">
                        +{pkg.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </CardContent>

                <CardFooter className="pt-0 pb-6 gap-2">
                  <Link to={`/packages/${pkg.id}`} className="flex-1">
                    <Button variant="outline" className="w-full gap-2 group/btn">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/calculator" className="flex-1">
                    <Button className={`w-full gap-2 ${
                      pkg.popular 
                        ? 'bg-safety-green hover:bg-safety-green/90' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}>
                      <Calculator className="w-4 h-4" />
                      Calculate
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/packages">
            <Button size="lg" variant="outline" className="gap-2">
              View All Packages
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto"
        >
          <strong>Note:</strong> Rates are estimates; final cost depends on design, site conditions, and material selections. 
          Contact us for a personalized quote.
        </motion.p>
      </div>
    </section>
  );
}
