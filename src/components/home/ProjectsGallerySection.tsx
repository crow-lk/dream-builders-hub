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
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-xs uppercase tracking-[0.2em]">Our Portfolio</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">
              Featured <span className="text-primary italic">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl font-light">
              Click on any project to explore the full gallery of images.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/categories">
              <Button variant="outline" className="border-border text-foreground hover:border-primary hover:text-primary group rounded-sm uppercase tracking-wider text-xs">
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
              className="group relative overflow-hidden rounded-sm cursor-pointer aspect-[4/3]"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Thumbnail strip */}
              <div className="absolute top-4 right-4 flex gap-2">
                {project.images.slice(1, 3).map((img, i) => (
                  <div key={i} className="w-12 h-12 rounded-sm overflow-hidden border border-foreground/20 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.span className="bg-primary text-primary-foreground px-3 py-1 rounded-sm text-xs font-semibold w-fit mb-3 uppercase tracking-wider">
                  {project.category}
                </motion.span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:translate-x-2 transition-transform">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <p className="text-muted-foreground text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity max-w-md font-light">
                  {project.description}
                </p>
              </div>

              {/* View button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-6 right-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <Eye className="w-6 h-6 text-primary-foreground" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-sm bg-secondary border border-border/50"
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
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={closeGallery}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-background/95 backdrop-blur-xl border-border">
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeGallery}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground"
                >
                  <X className="w-5 h-5" />
                </Button>

                <div className="relative aspect-video">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-t-sm"
                  />
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold mt-2 text-foreground">{selectedProject.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        {selectedProject.location}
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`flex-shrink-0 w-20 h-14 rounded-sm overflow-hidden border-2 transition-all ${
                          i === currentImageIndex 
                            ? "border-primary ring-2 ring-primary/30" 
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
