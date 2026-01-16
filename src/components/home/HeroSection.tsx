import { Link } from "react-router-dom";
import { Play, Clock, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Clock, text: "20+ Years Experience" },
  { icon: CheckCircle, text: "On-time Delivery" },
  { icon: Shield, text: "Quality Materials" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-safety-yellow rounded-full"></span>
              Sri Lanka's Trusted Construction Partner
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your{" "}
              <span className="text-safety-yellow">Dream Home</span>
              <br />
              in Sri Lanka
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Trusted construction partner for quality builds, renovations, and end-to-end project management. Transform your vision into reality with Sandali Construction.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/#packages">
                <Button size="lg" variant="outline">
                  View Packages
                </Button>
              </Link>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-6 pt-4">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-safety-yellow" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative animate-fade-in-up">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                <button className="w-20 h-20 bg-safety-yellow rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <Play className="w-8 h-8 text-foreground ml-1" />
                </button>
              </div>
              {/* Placeholder image */}
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction site"
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-safety-yellow rounded-lg flex items-center justify-center">
                  <span className="font-bold text-lg text-foreground">500+</span>
                </div>
                <div>
                  <p className="font-semibold">Projects Completed</p>
                  <p className="text-xs text-muted-foreground">Since 2003</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
