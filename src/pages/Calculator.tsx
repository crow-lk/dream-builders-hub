import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, Calculator as CalcIcon } from "lucide-react";

const packages = [
  { id: "budget1", name: "Budget Home 1", rate: 10000, badge: "bg-safety-blue" },
  { id: "budget2", name: "Budget Home 2", rate: 12000, badge: "bg-safety-green" },
  { id: "vip", name: "VIP", rate: 18000, badge: "bg-safety-orange" },
  { id: "vvip", name: "VVIP", rate: 35000, badge: "bg-safety-yellow" },
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
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Home Builders Dream House</h1>
          <p className="text-xl text-muted-foreground">Calculate your estimated construction budget</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Selection */}
            <div className="space-y-6">
              <div>
                <Label className="text-lg font-semibold mb-4 block">Select Package</Label>
                <div className="grid grid-cols-2 gap-3">
                  {packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedPackage.id === pkg.id ? "border-primary bg-secondary" : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <span className={`${pkg.badge} text-foreground text-xs px-2 py-0.5 rounded-full font-medium`}>{pkg.name}</span>
                      <p className="font-semibold mt-2">LKR {formatCurrency(pkg.rate)}</p>
                      <p className="text-xs text-muted-foreground">per sq ft</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-lg font-semibold mb-4 block">Square Feet</Label>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" onClick={() => adjustSqft(-10)}><Minus className="w-4 h-4" /></Button>
                  <Input
                    type="number"
                    min={100}
                    step={10}
                    value={sqft}
                    onChange={(e) => setSqft(Math.max(100, parseInt(e.target.value) || 100))}
                    className="text-center text-xl font-semibold"
                  />
                  <Button variant="outline" size="icon" onClick={() => adjustSqft(10)}><Plus className="w-4 h-4" /></Button>
                </div>
              </div>
            </div>

            {/* Result */}
            <Card className="border-2">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <CalcIcon className="w-8 h-8 text-safety-yellow" />
                  <h2 className="font-display text-xl font-bold">Budget Breakdown</h2>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b"><span className="text-muted-foreground">Selected Package</span><span className="font-medium">{selectedPackage.name}</span></div>
                  <div className="flex justify-between py-2 border-b"><span className="text-muted-foreground">Rate per sq ft</span><span className="font-medium">LKR {formatCurrency(selectedPackage.rate)}</span></div>
                  <div className="flex justify-between py-2 border-b"><span className="text-muted-foreground">Square Feet</span><span className="font-medium">{formatCurrency(sqft)} sq ft</span></div>
                </div>

                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">Estimated Budget (LKR)</p>
                  <p className="font-display text-3xl font-bold text-safety-yellow">LKR {formatCurrency(budget)}</p>
                </div>

                <Link to="/contact" className="block">
                  <Button className="w-full bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold">Request Quote</Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center">This is an estimate. Final pricing may vary based on design, materials, and site conditions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
