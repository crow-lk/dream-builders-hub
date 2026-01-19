import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, Star, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Dinesh Kumar",
    location: "Colombo",
    rating: 5,
    text: "Sandali Construction delivered our dream home on time and within budget. The quality of workmanship exceeded our expectations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Malini Perera",
    location: "Kandy",
    rating: 5,
    text: "Professional team from start to finish. They kept us informed throughout the project and addressed every concern promptly. Our new home is beautiful!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Samantha Rodrigo",
    location: "Galle",
    rating: 5,
    text: "The attention to detail is remarkable. Every corner of our house reflects quality craftsmanship. Thank you Sandali Construction for making our vision a reality.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "Amjad Farook",
    location: "Negombo",
    rating: 5,
    text: "We renovated our entire home with Sandali Construction. The transformation is incredible. Their team was respectful, clean, and highly skilled.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    name: "Nimali Jayawardena",
    location: "Kurunegala",
    rating: 5,
    text: "From the initial consultation to the final handover, the experience was seamless. The VIP package was worth every rupee. Outstanding service!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
  },
  {
    id: 6,
    name: "Ruwan Silva",
    location: "Colombo",
    rating: 5,
    text: "Building our dream house was made easy with Sandali Construction. Their expertise and professionalism are unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background image - more visible */}
      <div className="absolute inset-0">
        <img src={interiorLuxury} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/90 to-secondary" />
      </div>
      
      {/* Decorative quote marks */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 left-10"
      >
        <Quote className="w-40 h-40 text-safety-green" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-10 rotate-180"
      >
        <Quote className="w-40 h-40 text-safety-green" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-safety-green font-semibold text-sm uppercase tracking-wider">
            <MessageCircle className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            What Our <span className="text-safety-green">Clients Say</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Hear from homeowners who trusted us with their dream projects.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:bg-safety-green hover:border-safety-green hover:text-foreground shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:bg-safety-green hover:border-safety-green hover:text-foreground shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 first:pl-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-2 h-full"
                  >
                    <Card className="h-full bg-background border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
                      <CardContent className="p-6 flex flex-col h-full">
                        {/* Quote icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          className="w-12 h-12 bg-safety-green/20 rounded-xl flex items-center justify-center mb-4"
                        >
                          <Quote className="w-6 h-6 text-safety-green" />
                        </motion.div>

                        {/* Star rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-safety-yellow text-safety-yellow" />
                          ))}
                        </div>

                        {/* Testimonial text */}
                        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow group-hover:text-foreground transition-colors text-sm md:text-base">
                          "{testimonial.text}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4 pt-4 border-t border-border">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-safety-green ring-offset-2 ring-offset-background"
                          >
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? "bg-safety-green w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "4.9", label: "Average Rating" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center px-8 py-6 bg-background rounded-2xl shadow-xl border-2 border-transparent hover:border-safety-green/30 transition-all"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-safety-green">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
