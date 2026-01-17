import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import luxuryHome from "@/assets/luxury-home.jpg";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={luxuryHome}
          alt="Luxury home background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90" />
      </div>

      {/* Animated shapes */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-64 h-64 border border-primary-foreground/10 rounded-full"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-48 h-48 border border-primary-foreground/10 rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-safety-yellow text-foreground px-4 py-1 rounded-full text-sm font-semibold mb-6"
            >
              Let's Build Together
            </motion.span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Build Your{" "}
              <span className="text-safety-yellow">Dream Home?</span>
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and personalized quote for your construction project. 
              Our expert team is ready to bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/calculator">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Calculate Budget
              </Button>
            </Link>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-primary-foreground/80"
          >
            <motion.a
              href="tel:+94776265636"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 hover:text-safety-yellow transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+94 776 265 636</span>
            </motion.a>
            <motion.a
              href="mailto:info@sandaliconstruction.lk"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 hover:text-safety-yellow transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@sandaliconstruction.lk</span>
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              <span>Colombo, Sri Lanka</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
