import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import heroImage from "@/assets/hero-construction.jpg";
import heroVideo from "@/assets/hero-video.mp4";

const slides = [
  {
    number: "01",
    total: "03",
    title: "Build Your Dream Home",
    subtitle: "in Sri Lanka",
    description:
      "HomeBuilders.lk is the construction partner of a new generation, delivering homes that exist not only in the dimension of space, but also in the dimension of quality and craftsmanship.",
  },
  {
    number: "02",
    total: "03",
    title: "Premium Quality",
    subtitle: "Construction",
    description:
      "With over 20 years of excellence, we deliver 500+ projects across Sri Lanka with unmatched quality materials and expert workmanship.",
  },
  {
    number: "03",
    total: "03",
    title: "Luxury Living",
    subtitle: "Redefined",
    description:
      "From architectural design to final finishing, we craft spaces that reflect your vision with precision and elegance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.5;
      video.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  const goTo = (dir: "prev" | "next") => {
    setCurrent((prev) =>
      dir === "prev"
        ? (prev - 1 + slides.length) % slides.length
        : (prev + 1) % slides.length
    );
  };

  return (
    <section className="relative w-screen min-h-screen flex">
      {/* Left panel — video + slide number */}
      <div className="hidden lg:flex flex-col w-[45%] relative">
        {/* Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
            poster={heroImage}
            muted
            loop
            playsInline
            autoPlay
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Slide number */}
        <div className="relative z-10 p-10 flex flex-col justify-between h-full">
          <div />
          <motion.div
            key={slide.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-display text-[6rem] font-bold text-white/90 italic leading-none">
              {slide.number}
            </span>
            <span className="text-white/40 text-sm ml-2">
              / {slide.total}
            </span>
          </motion.div>

          {/* Prev / Next */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => goTo("prev")}
              className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="w-5 h-px bg-current" />
              Prev
            </button>
            <button
              onClick={() => goTo("next")}
              className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-colors flex items-center gap-2"
            >
              Next
              <span className="w-5 h-px bg-current" />
            </button>
          </div>
        </div>

        {/* Vertical text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 [writing-mode:vertical-lr] rotate-180 ml-4">
            Architecture
          </span>
        </div>

        {/* Dot indicators */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === current ? "bg-primary h-4" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right panel — content */}
      <div className="flex-1 relative flex items-center">
        {/* Mobile video background */}
        <div className="absolute inset-0 lg:hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            poster={heroImage}
            muted
            loop
            playsInline
            autoPlay
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Desktop dark overlay */}
        <div className="absolute inset-0 bg-background hidden lg:block" />

        {/* Large watermark text */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-end overflow-hidden pointer-events-none">
          <motion.span
            key={`watermark-${current}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.03, x: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-[18vw] font-bold text-foreground leading-none -mr-[5vw]"
          >
            go.arch
          </motion.span>
        </div>

        <div className="relative z-10 px-8 md:px-16 lg:px-20 py-20 max-w-3xl">
          <motion.div
            key={current}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white lg:text-foreground uppercase tracking-wide"
            >
              {slide.title}
              <br />
              <span className="text-primary italic normal-case">{slide.subtitle}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white/60 lg:text-muted-foreground text-base md:text-lg max-w-lg font-light leading-relaxed italic"
            >
              {slide.description}
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs uppercase tracking-[0.2em] px-10 py-6 shadow-lg"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile slide controls */}
          <div className="flex items-center gap-6 mt-12 lg:hidden">
            <button
              onClick={() => goTo("prev")}
              className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="w-5 h-px bg-current" />
              Prev
            </button>
            <span className="text-white/40 text-xs">
              {slide.number} / {slide.total}
            </span>
            <button
              onClick={() => goTo("next")}
              className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors flex items-center gap-2"
            >
              Next
              <span className="w-5 h-px bg-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom social icons area (decorative) */}
      <div className="absolute bottom-8 left-4 z-10 hidden lg:flex flex-col gap-3">
        {["◇", "◇", "◇"].map((icon, i) => (
          <span key={i} className="text-white/20 text-xs">{icon}</span>
        ))}
      </div>
    </section>
  );
}
