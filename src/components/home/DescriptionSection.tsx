import { motion } from "framer-motion";
import { useRef } from "react";
import constructionTeam from "@/assets/construction-team.jpg";
import interiorLuxury from "@/assets/interior-luxury.jpg";

const specializations = [
  { name: "Architecture", icon: "◆" },
  { name: "Interiors", icon: "◆" },
  { name: "Planning", icon: "◆" },
  { name: "Renovation", icon: "◆" },
];

export function DescriptionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-right mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            About <span className="text-primary italic">HomeBuilders</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-secondary border border-border/50 p-8 rounded-sm">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4 italic">
                we turn ideas into<br />works of art.
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                For each project we establish relationships with partners who we know will help us 
                create added value for your project. As well as bringing together the public and 
                private sectors, we work to ensure the best solutions. This way we understand the 
                aspirations that reinforce each other, socio-cultural value, and economical value. 
                This way of working allows us to make your project fit in its environment naturally.
              </p>
            </div>

            <div className="bg-secondary border border-border/50 p-8 rounded-sm">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                Our <span className="text-primary">Specialization:</span>
              </h3>
              <div className="space-y-4">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={spec.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-primary text-xs">{spec.icon}</span>
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                      {spec.name}
                    </span>
                    <span className="flex-1 h-px bg-border/50" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden">
              <img
                src={interiorLuxury}
                alt="Interior design showcase"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Small overlapping image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-8 w-48 h-48 rounded-sm overflow-hidden border-4 border-background shadow-2xl hidden lg:block"
            >
              <img
                src={constructionTeam}
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
