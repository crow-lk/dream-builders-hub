import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectsAerial from "@/assets/projects-aerial.jpg";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={projectsAerial}
          alt="Our completed projects"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-80 h-80 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-60 h-60 border border-primary/10 rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-sm text-xs font-semibold shadow-lg uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4" />
              Let's Build Together
            </motion.span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Ready to Build Your{" "}
              <span className="relative">
                <span className="text-primary italic">Dream Home?</span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-[2px] bg-primary/40 -z-10"
                />
              </span>
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light">
              Get a free consultation and personalized quote for your construction project. 
              Our expert team is ready to bring your vision to life with 20+ years of excellence.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group text-xs uppercase tracking-wider px-8 py-6 shadow-lg hover:shadow-xl transition-all rounded-sm"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/calculator">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:border-primary hover:text-primary text-xs uppercase tracking-wider px-8 py-6 rounded-sm"
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
            className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4"
          >
            <motion.a
              href="tel:+94776265636"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm">+94 776 265 636</span>
            </motion.a>
            
            <motion.a
              href="mailto:sandali.construction2@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm">sandali.construction2@gmail.com</span>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm">Dehiowita, Sri Lanka</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
