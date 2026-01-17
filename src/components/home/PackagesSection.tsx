import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const packages = [
  {
    name: "Budget Home 1",
    rate: 10000,
    badge: "Essential",
    badgeColor: "bg-safety-blue",
    description: "Best for budget-conscious builds",
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
    badgeColor: "bg-safety-green",
    description: "Best for upgraded budget builds",
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
    badgeColor: "bg-safety-orange",
    description: "Best for premium living",
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
    badgeColor: "bg-safety-yellow",
    description: "Best for luxury builds",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function PackagesSection() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-LK").format(amount);
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety-blue via-safety-yellow to-safety-orange" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Home Builders Dream House Packages"
            subtitle="Choose the perfect package for your dream home. All packages include complete construction with quality materials and expert workmanship."
          />
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {packages.map((pkg, index) => (
              <CarouselItem key={pkg.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="h-full"
                >
                  <Card className={`h-full bg-card border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative ${pkg.popular ? 'border-safety-green ring-2 ring-safety-green/20' : 'hover:border-primary/20'}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-safety-green text-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                        >
                          <Sparkles className="w-3 h-3" />
                          Most Popular
                        </motion.span>
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className={`${pkg.badgeColor} text-foreground px-3 py-1 rounded-full text-xs font-semibold`}
                        >
                          {pkg.badge}
                        </motion.span>
                      </div>
                      <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    </CardHeader>
                    
                    <CardContent className="pb-4">
                      <div className="mb-6">
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="font-display text-3xl font-bold"
                        >
                          LKR {formatCurrency(pkg.rate)}
                        </motion.span>
                        <span className="text-muted-foreground text-sm"> / sq ft</span>
                      </div>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: featureIndex * 0.05 }}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check className="w-4 h-4 text-safety-green flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                    
                    <CardFooter>
                      <Link to="/calculator" className="w-full">
                        <Button className="w-full bg-primary hover:bg-primary/90 gap-2 group">
                          <Calculator className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                          Calculate Budget
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto"
        >
          <strong>Note:</strong> Rates are estimates; final cost depends on design, site conditions, and material selections.
        </motion.p>
      </div>
    </section>
  );
}
