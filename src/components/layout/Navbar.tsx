import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Categories", path: "/categories" },
  { name: "Packages", path: "/packages" },
  { name: "Calculator", path: "/calculator" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wide text-foreground">
                HomeBuilders<span className="text-primary">.lk</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground leading-tight">
                Sandali Construction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors underline-animated ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+94776265636">
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                <Phone className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider">Call</span>
              </Button>
            </a>
            <a
              href="https://wa.me/94776265636"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider">WhatsApp</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-2 pt-4 border-t border-border/50">
                <a href="tel:+94776265636" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full gap-2 border-border text-foreground">
                    <Phone className="w-4 h-4" />
                    Call
                  </Button>
                </a>
                <a
                  href="https://wa.me/94776265636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="sm" className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
