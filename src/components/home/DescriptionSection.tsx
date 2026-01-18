import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Building2, TrendingUp, Play, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import constructionTeam from "@/assets/construction-team.jpg";

const stats = [
  { icon: Award, value: "20+", label: "Years Experience", color: "bg-safety-yellow" },
  { icon: Building2, value: "500+", label: "Projects Completed", color: "bg-safety-orange" },
  { icon: Users, value: "50+", label: "Team Members", color: "bg-safety-blue" },
  { icon: TrendingUp, value: "100%", label: "Client Satisfaction", color: "bg-safety-green" },
];

const features = [
  "Premium Quality Materials",
  "Expert Craftsmanship",
  "On-Time Delivery",
  "Transparent Pricing",
  "5 Year Warranty",
  "24/7 Support",
];

export function DescriptionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 gradient-mesh" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Column */}
          <motion.div style={{ y: imageY }} className="relative">
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={constructionTeam}
                alt="Our construction team at work"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              
              {/* Play button overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-safety-yellow rounded-full flex items-center justify-center shadow-lg pulse-glow">
                  <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
                </div>
              </motion.button>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
              >
                <p className="font-display text-4xl font-bold text-safety-yellow">20+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </motion.div>
            </motion.div>

            {/* Floating CEO card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-8 top-1/4 hidden lg:block"
            >
              <Card className="bg-background shadow-xl border-2 border-safety-yellow/20">
                <CardContent className="p-4 flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="w-16 h-16 rounded-full overflow-hidden border-2 border-safety-yellow"
                  >
                    <img src={ceoPortrait} alt="CEO" className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-sm">A. Kulasiri Jayashingha</p>
                    <p className="text-xs text-muted-foreground">Founder & CEO</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-safety-yellow" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right - Content Column */}
          <motion.div style={{ y: textY }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-safety-yellow font-semibold text-sm uppercase tracking-wider">
                <span className="w-8 h-px bg-safety-yellow" />
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Building Dreams with
                <span className="text-gradient-yellow"> Excellence</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              At Sandali Construction, we are dedicated to the art of construction and the pursuit of excellence. 
              Our company thrives on delivering superior quality and meticulous attention to detail in every project we undertake.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-relaxed"
            >
              Collaboration is at the heart of our approach. We work closely with our clients, 
              blending innovative techniques with traditional craftsmanship. Our use of cutting-edge 
              technology ensures that we provide tailored solutions that meet the unique needs of each project.
            </motion.p>

            {/* Features grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-safety-green flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-4 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className={`w-12 h-12 ${stat.color} rounded-xl mx-auto mb-2 flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <p className="font-display text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
