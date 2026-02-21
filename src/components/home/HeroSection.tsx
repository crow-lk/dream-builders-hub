import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import heroImage from "@/assets/hero-construction.jpg";
import heroVideo from "@/assets/hero-video.mp4";

const highlights = [
  { icon: Clock, text: "20+ Years Experience" },
  { icon: CheckCircle, text: "On-time Delivery" },
  { icon: Shield, text: "Quality Materials" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.5;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative overflow-hidden w-screen min-h-screen flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center animate-ken-burns"
          poster={heroImage}
          muted
          loop
          playsInline
          autoPlay
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Centered Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
          >
            Build Your{" "}
            <span className="text-primary relative inline-block italic">
              Dream Home
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-[2px] bg-primary/60 -z-10"
              />
            </span>
            <br />
            in Sri Lanka
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light"
          >
            Trusted construction partner for quality builds, renovations, and
            end-to-end project management. Transform your vision into reality
            with Sandali Construction.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="font-medium group text-xs uppercase tracking-[0.2em] px-10 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-none"
              >
                Get a Free Consultation
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
            <Link to="/#packages">
              <Button
                size="lg"
                variant="outline"
                className="group text-xs uppercase tracking-[0.2em] px-10 py-6 border-white/30 text-white/80 hover:border-primary hover:text-primary transition-all rounded-none"
              >
                View Packages
              </Button>
            </Link>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2 }}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating stats cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm border border-border rounded-sm p-4 shadow-lg hidden lg:block z-10"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
            <span className="font-display font-bold text-lg text-primary-foreground">
              500+
            </span>
          </div>
          <div>
            <p className="font-display font-semibold text-foreground">Projects Completed</p>
            <p className="text-xs text-muted-foreground">Since 2003</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute top-24 right-8 bg-primary text-primary-foreground rounded-sm p-3 shadow-lg hidden lg:block z-10"
      >
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span className="font-display font-semibold text-sm">ISO Certified</span>
        </div>
      </motion.div>
    </section>
  );
}
