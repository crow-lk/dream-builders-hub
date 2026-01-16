import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get in touch with our team for a free consultation. We're here to help you build your dream home.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+94776265636">
              <Button
                size="lg"
                className="bg-safety-red hover:bg-safety-red/90 text-primary-foreground font-semibold gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +94 776 265 636
              </Button>
            </a>
            <a
              href="https://wa.me/94776265636"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-safety-green hover:bg-safety-green/90 text-primary-foreground font-semibold gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
