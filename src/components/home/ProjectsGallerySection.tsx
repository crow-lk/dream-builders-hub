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
    <section className="py-24 md:py-36 bg-secondary relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[18vw] font-bold text-foreground/[0.02] leading-none tracking-wide">
          projects
        </span>
      </div>

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
              Our <span className="text-primary italic">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden md:inline">← prev</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden md:inline">next →</span>
            <Link to="/categories">
              <Button variant="outline" className="border-border text-foreground hover:border-primary hover:text-primary group rounded-sm uppercase tracking-wider text-xs">
                View All
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric Projects Grid - matching reference layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {/* Project 1 - Large left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => openGallery(projects[0])}
            className="col-span-12 md:col-span-4 row-span-2 group relative overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              src={projects[0].images[0]}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-1">{projects[0].category}</p>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{projects[0].title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{projects[0].location}</p>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-primary/30">
              <Eye className="w-5 h-5 text-primary" />
            </div>
          </motion.div>

          {/* Project 2 - Center top */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => openGallery(projects[1])}
            className="col-span-6 md:col-span-4 row-span-2 group relative overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              src={projects[1].images[0]}
              alt={projects[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-1">{projects[1].category}</p>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{projects[1].title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{projects[1].location}</p>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-primary/30">
              <Eye className="w-5 h-5 text-primary" />
            </div>
          </motion.div>

          {/* Project 3 - Right top */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => openGallery(projects[2])}
            className="col-span-6 md:col-span-4 row-span-1 group relative overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              src={projects[2].images[0]}
              alt={projects[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-1">{projects[2].category}</p>
              <h3 className="font-display text-lg font-bold text-foreground">{projects[2].title}</h3>
            </div>
          </motion.div>

          {/* Project 4 - Right bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => openGallery(projects[3])}
            className="col-span-12 md:col-span-4 row-span-1 group relative overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              src={projects[3].images[0]}
              alt={projects[3].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-1">{projects[3].category}</p>
              <h3 className="font-display text-lg font-bold text-foreground">{projects[3].title}</h3>
            </div>
          </motion.div>
        </div>

        {/* Vertical labels like reference */}
        <div className="hidden lg:flex justify-between mt-8">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/30 font-display">architecture</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/30 font-display">construction</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/30 font-display">interiors</span>
        </div>
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
