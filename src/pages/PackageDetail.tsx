import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BedDouble, Bath, Car, Layers, Sofa, ChefHat, UtensilsCrossed,
  Archive, BookOpen, Check, Calculator, ArrowLeft, ArrowRight,
  Home, Zap, Droplets, Square
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { packages } from "@/data/packages";

export default function PackageDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const pkg = packages.find((p) => p.id === id);
  const pkgIndex = packages.findIndex((p) => p.id === id);
  const prevPkg = pkgIndex > 0 ? packages[pkgIndex - 1] : null;
  const nextPkg = pkgIndex < packages.length - 1 ? packages[pkgIndex + 1] : null;

  if (!pkg) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Package not found</h1>
            <Link to="/#packages"><Button>Back to Packages</Button></Link>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = pkg.icon;

  const specItems = [
    {
      icon: BedDouble,
      label: "Bedrooms",
      value: pkg.specs.bedrooms.min === pkg.specs.bedrooms.max
        ? `${pkg.specs.bedrooms.min}`
        : `${pkg.specs.bedrooms.min} – ${pkg.specs.bedrooms.max}`,
      sub: "rooms",
    },
    {
      icon: Bath,
      label: "Bathrooms",
      value: pkg.specs.bathrooms.min === pkg.specs.bathrooms.max
        ? `${pkg.specs.bathrooms.min}`
        : `${pkg.specs.bathrooms.min} – ${pkg.specs.bathrooms.max}`,
      sub: "rooms",
    },
    {
      icon: Car,
      label: "Parking",
      value: `${pkg.specs.parking}`,
      sub: "vehicles",
    },
    {
      icon: Layers,
      label: "Floors",
      value: `${pkg.specs.floors}`,
      sub: pkg.specs.floors === 1 ? "storey" : "storeys",
    },
    {
      icon: Sofa,
      label: "Living Rooms",
      value: `${pkg.specs.livingRooms}`,
      sub: "spaces",
    },
    {
      icon: ChefHat,
      label: "Kitchen",
      value: pkg.specs.kitchen,
      sub: "style",
    },
  ];

  const amenities = [
    { label: "Dining Room", included: pkg.specs.diningRoom, icon: UtensilsCrossed },
    { label: "Store Room", included: pkg.specs.store, icon: Archive },
    { label: "Study / Office", included: pkg.specs.study, icon: BookOpen },
  ];

  const materialItems = [
    { icon: Square, label: "Flooring", value: pkg.materials.flooring },
    { icon: Home, label: "Roofing", value: pkg.materials.roofing },
    { icon: Layers, label: "Wall Finish", value: pkg.materials.walls },
    { icon: Square, label: "Windows", value: pkg.materials.windows },
    { icon: Square, label: "Doors", value: pkg.materials.doors },
    { icon: Zap, label: "Electrical", value: pkg.materials.electrical },
    { icon: Droplets, label: "Plumbing", value: pkg.materials.plumbing },
  ];

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-LK").format(amount);

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/#packages"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Packages
              </Link>
              <div className="flex items-center gap-3 mb-2">
                <span className={`${pkg.badgeColor} text-foreground p-2 rounded-xl`}>
                  <Icon className="w-5 h-5" />
                </span>
                <Badge className={`${pkg.badgeColor} text-foreground border-0`}>
                  {pkg.badge}
                </Badge>
                {pkg.popular && (
                  <Badge className="bg-safety-green text-foreground border-0">
                    Most Popular
                  </Badge>
                )}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                {pkg.name}
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">{pkg.tagline}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Key Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Home className="w-5 h-5 text-safety-yellow" />
                Room & Space Overview
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {specItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Card className="border-border hover:border-safety-yellow/50 transition-colors">
                      <CardContent className="p-5 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-3">
                          <item.icon className="w-5 h-5 text-safety-yellow" />
                        </div>
                        <span className="font-display text-2xl font-bold text-foreground">
                          {item.value}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.sub}</span>
                        <span className="text-sm font-medium mt-1">{item.label}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-3 mt-5">
                {amenities.map((a) => (
                  <div
                    key={a.label}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                      a.included
                        ? "border-safety-green/40 bg-safety-green/10 text-foreground"
                        : "border-border text-muted-foreground opacity-50"
                    }`}
                  >
                    <a.icon className="w-4 h-4" />
                    {a.label}
                    {a.included && <Check className="w-3.5 h-3.5 text-safety-green" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-safety-green" />
                What's Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {pkg.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.04 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50"
                  >
                    <Check className="w-4 h-4 text-safety-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Materials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-safety-orange" />
                Materials & Finishes
              </h2>
              <div className="space-y-3">
                {materialItems.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-4 py-3 border-b border-border last:border-0"
                  >
                    <m.icon className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium w-28 flex-shrink-0 text-muted-foreground">
                      {m.label}
                    </span>
                    <span className="text-sm text-foreground">{m.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Card className={`border-2 ${pkg.popular ? "border-safety-green" : "border-border"}`}>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-sm font-medium text-muted-foreground">LKR</span>
                        <span className="font-display text-4xl font-bold text-safety-yellow">
                          {formatCurrency(pkg.rate)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">per sq ft (estimate)</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bedrooms</span>
                        <span className="font-semibold">
                          {pkg.specs.bedrooms.min}–{pkg.specs.bedrooms.max}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bathrooms</span>
                        <span className="font-semibold">
                          {pkg.specs.bathrooms.min}–{pkg.specs.bathrooms.max}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Parking</span>
                        <span className="font-semibold">{pkg.specs.parking} vehicles</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Floors</span>
                        <span className="font-semibold">Up to {pkg.specs.floors}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {pkg.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm">
                          <Check className="w-3.5 h-3.5 text-safety-green flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 pt-2">
                      <Link to="/calculator" className="block">
                        <Button className="w-full gap-2 bg-safety-yellow hover:bg-safety-yellow/90 text-background font-semibold">
                          <Calculator className="w-4 h-4" />
                          Calculate Budget
                        </Button>
                      </Link>
                      <Link to="/contact" className="block">
                        <Button variant="outline" className="w-full gap-2">
                          Request a Quote
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Navigation between packages */}
              <div className="grid grid-cols-2 gap-2">
                {prevPkg ? (
                  <Link to={`/packages/${prevPkg.id}`}>
                    <Button variant="outline" size="sm" className="w-full gap-1 text-xs">
                      <ArrowLeft className="w-3 h-3" />
                      {prevPkg.name}
                    </Button>
                  </Link>
                ) : <div />}
                {nextPkg && (
                  <Link to={`/packages/${nextPkg.id}`}>
                    <Button variant="outline" size="sm" className="w-full gap-1 text-xs justify-end">
                      {nextPkg.name}
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
