import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import heroImage from "@/assets/hero-construction.jpg";
import heroVideo from "@/assets/hero-video.mp4";

const slides = [
  {
    number: "01",
    title: "Build Your Dream Home",
    subtitle: "in Sri Lanka",
    description:
      "HomeBuilders.lk is the construction partner of a new generation, delivering homes that exist not only in the dimension of space, but also in the dimension of quality and craftsmanship.",
  },
  {
    number: "02",
    title: "Premium Quality",
    subtitle: "Construction",
    description:
      "With over 20 years of excellence, we deliver 500+ projects across Sri Lanka with unmatched quality materials and expert workmanship.",
  },
  {
    number: "03",
    title: "Luxury Living",
    subtitle: "Redefined",
    description:
      "From architectural design to final finishing, we craft spaces that reflect your vision with precision and elegance.",
  },
];

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
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full-screen video background */}
      <div className="absolute inset-0 z-0">
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
      </div>

      {/* Right-side dark overlay (covers ~55% from right) */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-background/95 lg:from-transparent lg:via-background/70 lg:to-background" />
      </div>

      {/* Left side — slide number + prev/next (desktop) */}
      <div className="absolute left-0 top-0 bottom-0 z-10 hidden lg:flex flex-col justify-between p-10 w-[42%]">
        {/* Top spacer */}
        <div />

        {/* Slide number */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <span className="font-display text-[5rem] md:text-[7rem] font-bold text-white/80 italic leading-none">
              {slide.number}
            </span>
            <span className="text-white/30 text-sm ml-2">
              / 0{slides.length}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => goTo("prev")}
            className="text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-primary transition-colors flex items-center gap-3"
          >
            <span className="w-6 h-px bg-current" />
            Prev
          </button>
          <button
            onClick={() => goTo("next")}
            className="text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-primary transition-colors flex items-center gap-3"
          >
            Next
            <span className="w-6 h-px bg-current" />
          </button>
        </div>
      </div>

      {/* Vertical "architecture" text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/20 [writing-mode:vertical-lr] rotate-180">
          Architecture
        </span>
      </div>

      {/* Dot nav on left panel */}
      <div className="absolute left-10 bottom-1/3 z-10 hidden lg:flex flex-col gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-[5px] rounded-full transition-all duration-300 ${
              i === current
                ? "h-5 bg-primary"
                : "h-[5px] bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Large watermark behind content */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-[2] pointer-events-none hidden lg:block overflow-hidden">
        <span className="font-display text-[14vw] font-bold text-foreground/[0.03] leading-none whitespace-nowrap -mr-[2vw]">
          home
        </span>
      </div>

      {/* Right content area */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full lg:w-[58%] lg:ml-auto flex items-center justify-center px-6 md:px-12 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-center space-y-7"
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white uppercase tracking-[0.05em]">
                {slide.title}
              </h1>

              <p className="text-white/50 text-sm md:text-base max-w-md mx-auto font-light leading-relaxed italic">
                {slide.description}
              </p>

              <div>
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/80 font-medium text-[10px] uppercase tracking-[0.25em] px-10 py-5"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile controls at bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-6 lg:hidden">
        <button
          onClick={() => goTo("prev")}
          className="text-[10px] uppercase tracking-[0.2em] text-white/40 flex items-center gap-2"
        >
          <span className="w-4 h-px bg-current" />
          Prev
        </button>
        <span className="text-white/30 text-xs font-display italic">
          {slide.number} / 0{slides.length}
        </span>
        <button
          onClick={() => goTo("next")}
          className="text-[10px] uppercase tracking-[0.2em] text-white/40 flex items-center gap-2"
        >
          Next
          <span className="w-4 h-px bg-current" />
        </button>
      </div>

      {/* Social media icons — vertical on left side */}
      <div className="absolute bottom-10 left-5 z-10 hidden lg:flex flex-col gap-4">
        {[
          { icon: Facebook, href: "https://facebook.com" },
          { icon: Instagram, href: "https://instagram.com" },
          { icon: Twitter, href: "https://twitter.com" },
          { icon: Youtube, href: "https://youtube.com" },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-primary transition-colors"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </section>
  );
}
