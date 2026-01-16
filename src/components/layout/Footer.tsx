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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">HomeBuilders.lk</span>
                <span className="text-[10px] text-primary-foreground/70 leading-tight">
                  Powered by Sandali Construction
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Building Dreams, Crafted with Excellence. Your trusted construction partner for quality builds, renovations, and end-to-end project management in Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  1/54, Daraniyagala Road, Dehiowita, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <div className="flex flex-col text-sm text-primary-foreground/80">
                  <a href="tel:+94776265636" className="hover:text-accent transition-colors">
                    +94 776 265 636
                  </a>
                  <a href="tel:+94788231878" className="hover:text-accent transition-colors">
                    +94 788 231 878
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:sandali.construction2@gmail.com"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  sandali.construction2@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="https://www.sandaliconstruction.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  www.sandaliconstruction.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Full House Construction</li>
              <li>Architectural Design</li>
              <li>Quantity Surveying</li>
              <li>Renovations & Remodeling</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} HomeBuilders.lk. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Powered by Sandali Construction (Pvt) Ltd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
