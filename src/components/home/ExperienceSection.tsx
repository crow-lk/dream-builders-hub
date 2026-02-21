import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export function ExperienceSection() {
  return (
    <section className="py-24 md:py-36 bg-secondary relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20vw] font-bold text-foreground/[0.02] leading-none">
          clients
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Big Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block">
              <span className="font-display text-[8rem] md:text-[12rem] lg:text-[14rem] font-bold leading-none text-gradient-gold">
                <AnimatedNumber target={20} />
              </span>
              <span className="font-display text-[3rem] md:text-[4rem] text-primary font-bold absolute top-4 -right-8">
                +
              </span>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
              Years of Successful Work
              <br />
              <span className="text-primary italic normal-case">in the Market</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed max-w-lg">
              With over two decades of excellence in construction and design, Sandali Construction
              has delivered 500+ projects across Sri Lanka. Our commitment to quality craftsmanship
              and client satisfaction has made us a trusted name in the industry.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
              {[
                { value: "500+", label: "Projects" },
                { value: "50+", label: "Team Members" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
