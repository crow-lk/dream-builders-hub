import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Briefcase, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Consultant {
  id: string;
  name: string;
  description: string | null;
  rating: number;
  projects_count: number;
}

const gradientColors = [
  "from-safety-yellow to-safety-orange",
  "from-safety-blue to-safety-green",
  "from-safety-orange to-safety-red",
  "from-safety-green to-safety-blue",
  "from-safety-red to-safety-yellow",
  "from-safety-yellow to-safety-green",
];

export function ConsultantsSection() {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    async function fetchConsultants() {
      const { data, error } = await supabase
        .from("consultants")
        .select("*")
        .order("rating", { ascending: false });

      if (!error && data) {
        setConsultants(data);
      }
      setLoading(false);
    }

    fetchConsultants();
  }, []);

  if (loading) {
    return (
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="h-8 w-48 bg-muted rounded-full mx-auto animate-pulse" />
            <div className="h-12 w-96 bg-muted rounded-lg mx-auto mt-4 animate-pulse" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-muted rounded-xl" />
                    <div className="flex-1">
                      <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                      <div className="h-4 bg-muted rounded w-full mb-2" />
                      <div className="h-4 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-safety-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-safety-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-safety-blue font-semibold text-sm uppercase tracking-wider">
            <Star className="w-4 h-4" />
            Expert Network
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Top-Rated <span className="text-safety-blue">Consultants</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Work with our network of trusted architects, engineers, and consultants rated by satisfied clients.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:bg-safety-yellow hover:border-safety-yellow hover:text-foreground shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:bg-safety-yellow hover:border-safety-yellow hover:text-foreground shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {consultants.map((consultant, index) => (
                <div
                  key={consultant.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 first:pl-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-2"
                  >
                    <Card className="h-full bg-card border-2 hover:border-safety-blue/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {/* Avatar with gradient */}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <span className="font-bold text-2xl text-foreground">
                              {consultant.name.charAt(0)}
                            </span>
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg text-foreground truncate group-hover:text-safety-blue transition-colors">
                              {consultant.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {consultant.description}
                            </p>

                            {/* Rating */}
                            <div className="mt-3 flex items-center gap-2">
                              <StarRating rating={Number(consultant.rating)} />
                              <span className="text-sm font-medium text-safety-yellow">
                                {consultant.rating.toFixed(1)}
                              </span>
                            </div>

                            {/* Projects count */}
                            <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground bg-secondary/50 rounded-lg px-3 py-1.5 w-fit">
                              <Briefcase className="w-4 h-4" />
                              <span>{consultant.projects_count} projects</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <Button size="lg" className="bg-safety-blue hover:bg-safety-blue/90 group">
              Work With Our Experts
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
