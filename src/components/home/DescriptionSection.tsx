import { motion } from "framer-motion";
import { Landmark, Sofa, Building2 } from "lucide-react";
import interiorLuxury from "@/assets/interior-luxury.jpg";

const specializations = [
  { name: "Architecture", icon: Landmark },
  { name: "Interiors", icon: Sofa },
  { name: "Planning", icon: Building2 },
];

export function DescriptionSection() {
  return (
    <section className="py-24 md:py-36 bg-background relative overflow-hidden">
      {/* Top border line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Large watermark */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
        <span className="font-display text-[12vw] font-bold text-foreground/[0.02] leading-none">
          about
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-[0.15em] text-foreground">
            About{" "}
            <span className="text-primary">Homebuilders</span>
          </h2>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid lg:grid-cols-[2fr_1fr_2fr] gap-10 lg:gap-8 items-start">
          {/* Left — philosophy text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground italic leading-snug">
              We turn ideas into
              <br />
              works of art.
            </h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              For each project we establish relationships with partners who we
              know will help us create added value for your project. As well as
              bringing together the public and private sectors, we make
              sector-overarching links to gather knowledge and to learn from each
              other. The way we undertake projects is based on permanently
              applying values that reinforce each other: socio-cultural value,
              experiental value, building-technical value and economical value.
              This way of working allows us to raise your project to a higher
              level.
            </p>
          </motion.div>

          {/* Center — specializations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground italic leading-snug">
              Our
              <br />
              specialization:
            </h3>

            <div className="space-y-6">
              {specializations.map((spec, i) => (
                <motion.div
                  key={spec.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <spec.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-[0.25em] text-foreground font-medium">
                    {spec.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src={interiorLuxury}
                alt="Architectural design showcase"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
