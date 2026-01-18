import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Check, Sparkles, Crown, Gem, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import blueprints from "@/assets/blueprints.jpg";

const packages = [
  {
    name: "Budget Home 1",
    rate: 10000,
    badge: "Essential",
    icon: Star,
    badgeColor: "bg-safety-blue",
    description: "Perfect for budget-conscious first-time home builders",
    features: [
      "Standard finishing",
      "Essential fittings",
      "Basic electrical & plumbing",
      "Standard flooring",
      "Basic paint finish",
    ],
  },
  {
    name: "Budget Home 2",
    rate: 12000,
    badge: "Popular",
    icon: Sparkles,
    badgeColor: "bg-safety-green",
    description: "Best value for upgraded budget builds",
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
    name: "VIP",
    rate: 18000,
    badge: "Premium",
    icon: Crown,
    badgeColor: "bg-safety-orange",
    description: "Premium living with superior materials",
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
    name: "VVIP",
    rate: 35000,
    badge: "Luxury",
    icon: Gem,
    badgeColor: "bg-safety-yellow",
    description: "Ultimate luxury for discerning clients",
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
    <section id="packages" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={blueprints} alt="" className="w-full h-full object-cover opacity-5" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety-blue via-safety-yellow to-safety-orange" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-safety-yellow/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-safety-orange/10 rounded-full blur-3xl" />

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={`h-full bg-card border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative group ${
                pkg.popular ? 'border-safety-green ring-2 ring-safety-green/20 scale-105' : 'hover:border-safety-yellow/50'
              }`}>
                {pkg.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <span className="bg-safety-green text-foreground px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </motion.div>
                )}

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl ${
                  pkg.popular ? 'glow-sm-yellow' : ''
                }`} />

                <CardHeader className="pb-4 pt-8">
                  <div className="flex items-center justify-between mb-4">
                    <motion.span
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className={`${pkg.badgeColor} text-foreground p-2 rounded-xl`}
                    >
                      <pkg.icon className="w-5 h-5" />
                    </motion.span>
                    <span className={`${pkg.badgeColor} text-foreground px-3 py-1 rounded-full text-xs font-semibold`}>
                      {pkg.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="mb-6 p-4 rounded-xl bg-secondary/50">
                    <span className="font-display text-3xl font-bold">
                      LKR {formatCurrency(pkg.rate)}
                    </span>
                    <span className="text-muted-foreground text-sm"> / sq ft</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.05 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-safety-green flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4">
                  <Link to="/calculator" className="w-full">
                    <Button className={`w-full gap-2 group/btn ${
                      pkg.popular 
                        ? 'bg-safety-green hover:bg-safety-green/90' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}>
                      <Calculator className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      Calculate Budget
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
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
  );
}
