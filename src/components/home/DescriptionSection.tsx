import { motion } from "framer-motion";
import { Award, Users, Building2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import completedHome from "@/assets/completed-home.jpg";

const stats = [
  { icon: Award, value: "20+", label: "Years Experience", color: "text-safety-yellow" },
  { icon: Building2, value: "500+", label: "Projects Completed", color: "text-safety-orange" },
  { icon: Users, value: "50+", label: "Team Members", color: "text-safety-blue" },
  { icon: TrendingUp, value: "100%", label: "Client Satisfaction", color: "text-safety-green" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function DescriptionSection() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="text-safety-yellow font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                Sandali Construction
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Sandali Construction, we are dedicated to the art of construction and the pursuit of excellence. Our company thrives on delivering superior quality and meticulous attention to detail in every project we undertake.
              </p>
              <p>
                Collaboration is at the heart of our approach. We work closely with our clients, blending innovative techniques with traditional craftsmanship. Our use of cutting-edge technology ensures that we provide tailored solutions that meet the unique needs of each project.
              </p>
            </motion.div>

            {/* CEO Card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-secondary border-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-20 rounded-full overflow-hidden border-2 border-safety-yellow"
                    >
                      <img
                        src={ceoPortrait}
                        alt="CEO Portrait"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Owner / CEO</p>
                      <p className="font-display font-semibold text-lg">Mr. A. Kulasiri Jayashingha</p>
                      <p className="text-xs text-safety-yellow mt-1">20+ Years in Construction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Image showcase */}
            <motion.div
              variants={itemVariants}
              className="relative mt-8 rounded-2xl overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src={completedHome}
                alt="Completed luxury home"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Recent Project</p>
                <p className="text-sm opacity-80">Luxury Villa - Colombo</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full bg-card border-2 hover:border-safety-yellow/50 transition-colors overflow-hidden group">
                  <CardContent className="p-6 text-center relative">
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-safety-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
                    </motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="font-display text-3xl font-bold"
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
