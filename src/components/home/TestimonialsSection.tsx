import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "D.K.",
    fullName: "Dinesh Kumar",
    location: "Colombo",
    rating: 5,
    text: "Sandali Construction delivered our dream home on time and within budget. The quality of workmanship exceeded our expectations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "M.P.",
    fullName: "Malini Perera",
    location: "Kandy",
    rating: 5,
    text: "Professional team from start to finish. They kept us informed throughout the project and addressed every concern promptly. Our new home is beautiful!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "S.R.",
    fullName: "Samantha Rodrigo",
    location: "Galle",
    rating: 5,
    text: "The attention to detail is remarkable. Every corner of our house reflects quality craftsmanship. Thank you Sandali Construction for making our vision a reality.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "A.F.",
    fullName: "Amjad Farook",
    location: "Negombo",
    rating: 5,
    text: "We renovated our entire home with Sandali Construction. The transformation is incredible. Their team was respectful, clean, and highly skilled.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "N.J.",
    fullName: "Nimali Jayawardena",
    location: "Kurunegala",
    rating: 5,
    text: "From the initial consultation to the final handover, the experience was seamless. The VIP package was worth every rupee. Outstanding service!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-40 h-40 text-foreground" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-180">
        <Quote className="w-40 h-40 text-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="What Clients Say"
            subtitle="Hear from homeowners who trusted us with their dream projects."
          />
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="h-full"
                >
                  <Card className="h-full bg-secondary border-none hover:shadow-lg transition-shadow duration-300 group">
                    <CardContent className="p-6">
                      <motion.div
                        initial={{ rotate: -10, scale: 0.8 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <Quote className="w-8 h-8 text-safety-yellow mb-4 group-hover:scale-110 transition-transform" />
                      </motion.div>
                      
                      {/* Star rating */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="w-4 h-4 fill-safety-yellow text-safety-yellow" />
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-full overflow-hidden border-2 border-safety-yellow"
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.fullName}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.fullName}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/contact">
            <Button size="lg" className="bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold group">
              Request a Quote
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
