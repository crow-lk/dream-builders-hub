import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
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
    location: "Colombo",
    text: "Sandali Construction delivered our dream home on time and within budget. The quality of workmanship exceeded our expectations. Highly recommended!",
  },
  {
    id: 2,
    name: "M.P.",
    location: "Kandy",
    text: "Professional team from start to finish. They kept us informed throughout the project and addressed every concern promptly. Our new home is beautiful!",
  },
  {
    id: 3,
    name: "S.R.",
    location: "Galle",
    text: "The attention to detail is remarkable. Every corner of our house reflects quality craftsmanship. Thank you Sandali Construction for making our vision a reality.",
  },
  {
    id: 4,
    name: "A.F.",
    location: "Negombo",
    text: "We renovated our entire home with Sandali Construction. The transformation is incredible. Their team was respectful, clean, and highly skilled.",
  },
  {
    id: 5,
    name: "N.J.",
    location: "Kurunegala",
    text: "From the initial consultation to the final handover, the experience was seamless. The VIP package was worth every rupee. Outstanding service!",
  },
  {
    id: 6,
    name: "R.W.",
    location: "Ratnapura",
    text: "Built our family home with the Budget Home 2 package. Great value for money with excellent finishing. The team was professional throughout.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Clients Say"
          subtitle="Hear from homeowners who trusted us with their dream projects."
        />

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-secondary border-none">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-safety-yellow mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold">
                          {testimonial.name}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Client {testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-10">
          <Link to="/contact">
            <Button size="lg" className="bg-safety-yellow text-foreground hover:bg-safety-yellow/90 font-semibold">
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
