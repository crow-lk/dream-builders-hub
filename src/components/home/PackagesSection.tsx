import { Link } from "react-router-dom";
import { Calculator, Check } from "lucide-react";
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

export function PackagesSection() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-LK").format(amount);
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Home Builders Dream House Packages"
          subtitle="Choose the perfect package for your dream home. All packages include complete construction with quality materials and expert workmanship."
        />

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {packages.map((pkg) => (
              <CarouselItem key={pkg.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card border-2 hover:border-primary/20 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`${pkg.badgeColor} text-foreground px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        {pkg.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="mb-6">
                      <span className="font-display text-3xl font-bold">
                        LKR {formatCurrency(pkg.rate)}
                      </span>
                      <span className="text-muted-foreground text-sm"> / sq ft</span>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-safety-green flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to="/calculator" className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary/90 gap-2">
                        <Calculator className="w-4 h-4" />
                        Calculate Budget
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          <strong>Note:</strong> Rates are estimates; final cost depends on design, site conditions, and material selections.
        </p>
      </div>
    </section>
  );
}
