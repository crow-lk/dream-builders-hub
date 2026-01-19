import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import luxuryHome from "@/assets/luxury-home.jpg";
import completedHome from "@/assets/completed-home.jpg";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import projectsAerial from "@/assets/projects-aerial.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import blueprints from "@/assets/blueprints.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Villa",
    location: "Colombo 7",
    category: "Luxury",
    description: "A stunning contemporary villa with premium finishes and smart home features.",
    images: [luxuryHome, interiorLuxury, completedHome],
  },
  {
    id: 2,
    title: "Family Residence",
    location: "Kandy",
    category: "Premium",
    description: "Spacious family home with traditional touches and modern amenities.",
    images: [completedHome, luxuryHome, blueprints],
  },
  {
    id: 3,
    title: "Contemporary Interior",
    location: "Galle",
    category: "Interior",
    description: "Complete interior renovation with luxury furnishings and custom designs.",
    images: [interiorLuxury, luxuryHome, completedHome],
  },
  {
    id: 4,
    title: "Housing Development",
    location: "Negombo",
    category: "Commercial",
    description: "Large-scale residential development with 50+ modern units.",
    images: [projectsAerial, heroConstruction, completedHome],
  },
];

export function ProjectsGallerySection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-5" />
      
      {/* Gradient accents */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-safety-blue rounded-full blur-3xl"
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
              Click on any project to explore the full gallery of images.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openGallery(project)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
            >
              {/* Main image - more visible */}
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
              />
              
              {/* Overlay - less dark for better image visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              
              {/* Thumbnail strip */}
              <div className="absolute top-4 right-4 flex gap-2">
                {project.images.slice(1, 3).map((img, i) => (
                  <div key={i} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-primary-foreground/30 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
                {project.images.length > 3 && (
                  <div className="w-12 h-12 rounded-lg bg-safety-yellow/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-foreground font-bold text-sm" style={{ transitionDelay: "200ms" }}>
                    +{project.images.length - 2}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.span
                  className="bg-safety-yellow text-foreground px-3 py-1 rounded-full text-xs font-semibold w-fit mb-3"
                >
                  {project.category}
                </motion.span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground group-hover:translate-x-2 transition-transform">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mt-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <p className="text-primary-foreground/70 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity max-w-md">
                  {project.description}
                </p>
              </div>

              {/* View button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-6 right-6 w-14 h-14 bg-safety-yellow rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <Eye className="w-6 h-6 text-foreground" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm"
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
              <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={closeGallery}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-background/95 backdrop-blur-xl border-none">
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeGallery}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 hover:bg-background"
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Main image */}
                <div className="relative aspect-video">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  
                  {/* Navigation */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-safety-yellow hover:text-foreground"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-safety-yellow hover:text-foreground"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="bg-safety-yellow text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {selectedProject.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold mt-2">{selectedProject.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        {selectedProject.location}
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                          i === currentImageIndex 
                            ? "border-safety-yellow ring-2 ring-safety-yellow/30" 
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
