import { motion } from "framer-motion";
import { Quote, Star, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import interiorLuxury from "@/assets/interior-luxury.jpg";

const testimonials = [
  {
    id: 1,
    name: "Dinesh Kumar",
    location: "Colombo",
    rating: 5,
    text: "Sandali Construction delivered our dream home on time and within budget. The quality of workmanship exceeded our expectations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Malini Perera",
    location: "Kandy",
    rating: 5,
    text: "Professional team from start to finish. They kept us informed throughout the project and addressed every concern promptly. Our new home is beautiful!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Samantha Rodrigo",
    location: "Galle",
    rating: 5,
    text: "The attention to detail is remarkable. Every corner of our house reflects quality craftsmanship. Thank you Sandali Construction for making our vision a reality.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Amjad Farook",
    location: "Negombo",
    rating: 5,
    text: "We renovated our entire home with Sandali Construction. The transformation is incredible. Their team was respectful, clean, and highly skilled.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Nimali Jayawardena",
    location: "Kurunegala",
    rating: 5,
    text: "From the initial consultation to the final handover, the experience was seamless. The VIP package was worth every rupee. Outstanding service!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    id: 6,
    name: "Ruwan Silva",
    location: "Colombo",
    rating: 5,
    text: "Building our dream house was made easy with Sandali Construction. Their expertise and professionalism are unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={interiorLuxury} alt="" className="w-full h-full object-cover opacity-5" />
      </div>
      
      {/* Decorative quote marks */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 left-10"
      >
        <Quote className="w-60 h-60 text-foreground" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-10 rotate-180"
      >
        <Quote className="w-60 h-60 text-foreground" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-safety-green font-semibold text-sm uppercase tracking-wider">
            <MessageCircle className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            What Our <span className="text-safety-green">Clients Say</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Hear from homeowners who trusted us with their dream projects and experienced our commitment to excellence.
          </p>
        </motion.div>

        {/* Testimonials grid - Masonry style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-6 break-inside-avoid"
            >
              <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-10 h-10 bg-safety-green/10 rounded-xl flex items-center justify-center mb-4"
                  >
                    <Quote className="w-5 h-5 text-safety-green" />
                  </motion.div>

                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
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

                  {/* Testimonial text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full overflow-hidden border-2 border-safety-green"
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "4.9", label: "Average Rating" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center px-8 py-4 bg-background rounded-2xl shadow-lg"
            >
              <p className="font-display text-3xl font-bold text-safety-green">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
