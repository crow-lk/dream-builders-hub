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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      {/* Animated decorative elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-80 h-80 border border-primary-foreground/10 rounded-full"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-60 h-60 border border-primary-foreground/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-safety-yellow rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-safety-orange rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-safety-yellow text-foreground px-5 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              Let's Build Together
            </motion.span>

            {/* Heading */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Ready to Build Your{" "}
              <span className="relative">
                <span className="text-safety-yellow">Dream Home?</span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-safety-yellow/30 -z-10"
                />
              </span>
            </h2>

            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
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
                className="bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold group text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/calculator">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
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
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-safety-yellow transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-safety-yellow/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium">+94 776 265 636</span>
            </motion.a>
            
            <motion.a
              href="mailto:sandali.construction2@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-safety-yellow transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-safety-yellow/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">sandali.construction2@gmail.com</span>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 text-primary-foreground/80"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-medium">Dehiowita, Sri Lanka</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
