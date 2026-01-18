import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import luxuryHome from "@/assets/luxury-home.jpg";
import completedHome from "@/assets/completed-home.jpg";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import projectsAerial from "@/assets/projects-aerial.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Villa",
    location: "Colombo 7",
    category: "Luxury",
    image: luxuryHome,
    size: "large",
  },
  {
    id: 2,
    title: "Family Residence",
    location: "Kandy",
    category: "Premium",
    image: completedHome,
    size: "small",
  },
  {
    id: 3,
    title: "Contemporary Interior",
    location: "Galle",
    category: "Interior",
    image: interiorLuxury,
    size: "small",
  },
  {
    id: 4,
    title: "Housing Development",
    location: "Negombo",
    category: "Commercial",
    image: projectsAerial,
    size: "large",
  },
];

export function ProjectsGallerySection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-5" />
      
      {/* Gradient accents */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-safety-yellow font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">
              Featured <span className="text-safety-yellow">Projects</span>
            </h2>
            <p className="text-primary-foreground/70 mt-4 max-w-xl">
              Explore our collection of completed projects showcasing our commitment to quality and excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/categories">
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary group">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                project.size === "large" ? "lg:col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-safety-yellow text-foreground px-3 py-1 rounded-full text-xs font-semibold w-fit mb-3"
                >
                  {project.category}
                </motion.span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground group-hover:translate-x-2 transition-transform">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mt-1">{project.location}</p>
              </div>

              {/* View button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-4 right-4 w-12 h-12 bg-safety-yellow rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                <Eye className="w-5 h-5 text-foreground" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
        >
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "20+", label: "Years Experience" },
            { value: "50+", label: "Expert Team" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-safety-yellow">{stat.value}</p>
              <p className="text-primary-foreground/60 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
