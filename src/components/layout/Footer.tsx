import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Categories", path: "/categories" },
  { name: "Calculator", path: "/calculator" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wide text-foreground">
                HomeBuilders<span className="text-primary">.lk</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                Sandali Construction
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building Dreams, Crafted with Excellence. Your trusted construction partner for quality builds, renovations, and end-to-end project management in Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground">Quick <span className="text-primary">Links</span></h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground">Contact <span className="text-primary">Info</span></h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  1/54, Daraniyagala Road, Dehiowita, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col text-sm text-muted-foreground">
                  <a href="tel:+94776265636" className="hover:text-primary transition-colors">
                    +94 776 265 636
                  </a>
                  <a href="tel:+94788231878" className="hover:text-primary transition-colors">
                    +94 788 231 878
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:sandali.construction2@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  sandali.construction2@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="https://www.sandaliconstruction.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  www.sandaliconstruction.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground">Our <span className="text-primary">Services</span></h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Full House Construction</li>
              <li>Architectural Design</li>
              <li>Quantity Surveying</li>
              <li>Renovations & Remodeling</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HomeBuilders.lk. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Powered by Sandali Construction (Pvt) Ltd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
