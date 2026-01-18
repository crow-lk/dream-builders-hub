import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, CheckCircle, Shield, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import heroImage from "@/assets/hero-construction.jpg";
const highlights = [{
  icon: Clock,
  text: "20+ Years Experience"
}, {
  icon: CheckCircle,
  text: "On-time Delivery"
}, {
  icon: Shield,
  text: "Quality Materials"
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // Auto-play video on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, that's ok
      });
    }
  }, []);
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} className="w-full h-full object-cover" poster={heroImage} muted={isMuted} loop playsInline autoPlay>
          <source src="https://videos.pexels.com/video-files/3194277/3194277-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Mute/Unmute Button */}
      <motion.button initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1
    }} onClick={toggleMute} className="absolute bottom-8 right-8 z-20 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors border border-white/20">
        {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
      </motion.button>

      {/* Centered Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center space-y-8">
          

          <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
            Build Your{" "}
            <span className="text-safety-yellow relative inline-block">
              Dream Home
              <motion.span initial={{
              width: 0
            }} animate={{
              width: "100%"
            }} transition={{
              delay: 1,
              duration: 0.8
            }} className="absolute bottom-2 left-0 h-3 bg-safety-yellow/30 -z-10" />
            </span>
            <br />
            in Sri Lanka
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Trusted construction partner for quality builds, renovations, and end-to-end project management. Transform your vision into reality with Sandali Construction.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold group text-lg px-8 py-6">
                Get a Free Consultation
                <motion.span className="ml-2" animate={{
                x: [0, 5, 0]
              }} transition={{
                duration: 1,
                repeat: Infinity
              }}>
                  →
                </motion.span>
              </Button>
            </Link>
            <Link to="/#packages">
              <Button size="lg" variant="outline" className="group text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                View Packages
              </Button>
            </Link>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 pt-8">
            {highlights.map((item, index) => <motion.div key={item.text} initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 1 + index * 0.2
          }} className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <item.icon className="w-5 h-5 text-safety-yellow" />
                <span className="text-sm font-medium text-white">{item.text}</span>
              </motion.div>)}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating stats cards */}
      <motion.div initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1.2,
      duration: 0.5
    }} className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-sm border-2 border-border rounded-xl p-4 shadow-lg hidden lg:block z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-safety-yellow rounded-lg flex items-center justify-center">
            <span className="font-bold text-lg text-foreground">500+</span>
          </div>
          <div>
            <p className="font-semibold">Projects Completed</p>
            <p className="text-xs text-muted-foreground">Since 2003</p>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{
      opacity: 0,
      y: -50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1.4,
      duration: 0.5
    }} className="absolute top-24 right-8 bg-safety-yellow text-foreground rounded-xl p-3 shadow-lg hidden lg:block z-10">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold text-sm">ISO Certified</span>
        </div>
      </motion.div>
    </section>;
}