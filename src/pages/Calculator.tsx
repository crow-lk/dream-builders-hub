import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, Calculator as CalcIcon, ArrowRight, Check, Star, Sparkles, Crown, Gem } from "lucide-react";
import heroCalculator from "@/assets/hero-calculator.jpg";
import packageBudget from "@/assets/package-budget.jpg";
import packagePremium from "@/assets/package-premium.jpg";
import packageVip from "@/assets/package-vip.jpg";
import packageVvip from "@/assets/package-vvip.jpg";

const packages = [
  { id: "budget1", name: "Budget Home 1", rate: 10000, badge: "bg-safety-blue", icon: Star, image: packageBudget, features: ["Standard finishing", "Essential fittings", "Basic electrical"] },
  { id: "budget2", name: "Budget Home 2", rate: 12000, badge: "bg-safety-green", icon: Sparkles, image: packagePremium, features: ["Improved finishing", "Better quality fittings", "Enhanced electrical"], popular: true },
  { id: "vip", name: "VIP", rate: 18000, badge: "bg-safety-orange", icon: Crown, image: packageVip, features: ["Premium materials", "Design support", "Premium electrical"] },
  { id: "vvip", name: "VVIP", rate: 35000, badge: "bg-safety-yellow", icon: Gem, image: packageVvip, features: ["Luxury finishing", "Custom design", "Smart home ready"] },
];

export default function CalculatorPage() {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [sqft, setSqft] = useState(1000);

  const budget = selectedPackage.rate * sqft;
  const formatCurrency = (n: number) => new Intl.NumberFormat("en-LK").format(n);

  const adjustSqft = (delta: number) => {
    const newVal = Math.max(100, sqft + delta);
    setSqft(newVal);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCalculator} alt="Budget Calculator" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
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
            <CalcIcon className="w-4 h-4" />
            Budget Estimator
          </motion.span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Dream House <span className="text-safety-yellow">Calculator</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Calculate your estimated construction budget instantly
          </p>
        </motion.div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Package Selection */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              <div>
                <Label className="text-lg font-semibold mb-4 block">Select Your Package</Label>
                <div className="grid sm:grid-cols-2 gap-4">
                  {packages.map((pkg, index) => (
                    <motion.button
                      key={pkg.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`relative overflow-hidden rounded-2xl border-2 text-left transition-all duration-300 group ${
                        selectedPackage.id === pkg.id 
                          ? "border-safety-yellow ring-2 ring-safety-yellow/20 shadow-lg" 
                          : "border-border hover:border-muted-foreground hover:shadow-md"
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute top-3 right-3 z-10 bg-safety-green text-foreground text-xs px-2 py-0.5 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                      
                      {/* Image */}
                      <div className="relative h-28 overflow-hidden">
                        <img 
                          src={pkg.image} 
                          alt={pkg.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`${pkg.badge} text-foreground p-1.5 rounded-lg`}>
                            <pkg.icon className="w-4 h-4" />
                          </span>
                          <span className="font-semibold">{pkg.name}</span>
                        </div>
                        <p className="font-bold text-lg">LKR {formatCurrency(pkg.rate)}</p>
                        <p className="text-xs text-muted-foreground">per sq ft</p>
                        
                        <ul className="mt-3 space-y-1">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="text-xs text-muted-foreground flex items-center gap-1">
                              <Check className="w-3 h-3 text-safety-green" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {selectedPackage.id === pkg.id && (
                        <motion.div
                          layoutId="selected-indicator"
                          className="absolute inset-0 border-2 border-safety-yellow rounded-2xl pointer-events-none"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-lg font-semibold mb-4 block">Enter Square Feet</Label>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => adjustSqft(-100)}
                        className="w-14 h-14 rounded-xl"
                      >
                        <Minus className="w-5 h-5" />
                      </Button>
                      <Input
                        type="number"
                        min={100}
                        step={100}
                        value={sqft}
                        onChange={(e) => setSqft(Math.max(100, parseInt(e.target.value) || 100))}
                        className="text-center text-3xl font-bold h-14 flex-1"
                      />
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => adjustSqft(100)}
                        className="w-14 h-14 rounded-xl"
                      >
                        <Plus className="w-5 h-5" />
                      </Button>
                    </div>
                    <p className="text-center text-muted-foreground mt-2">square feet</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Result Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="border-2 border-safety-yellow/50 sticky top-24 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-safety-blue via-safety-yellow to-safety-orange" />
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-safety-yellow rounded-xl flex items-center justify-center">
                      <CalcIcon className="w-7 h-7 text-foreground" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold">Budget Estimate</h2>
                      <p className="text-sm text-muted-foreground">Based on your selection</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">Selected Package</span>
                      <span className="font-medium flex items-center gap-2">
                        <selectedPackage.icon className="w-4 h-4" />
                        {selectedPackage.name}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">Rate per sq ft</span>
                      <span className="font-medium">LKR {formatCurrency(selectedPackage.rate)}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">Area</span>
                      <span className="font-medium">{formatCurrency(sqft)} sq ft</span>
                    </div>
                  </div>

                  <motion.div
                    key={budget}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-center"
                  >
                    <p className="text-sm text-primary-foreground/70 mb-1">Estimated Budget</p>
                    <p className="font-display text-4xl font-bold text-safety-yellow">
                      LKR {formatCurrency(budget)}
                    </p>
                  </motion.div>

                  <Link to="/contact" className="block">
                    <Button className="w-full bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold h-12 gap-2">
                      Request Detailed Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <p className="text-xs text-muted-foreground text-center">
                    This is an estimate. Final pricing may vary based on design, materials, and site conditions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
