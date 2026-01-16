import { Award, Users, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function DescriptionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Sandali Construction
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Sandali Construction, we are dedicated to the art of construction and the pursuit of excellence. Our company thrives on delivering superior quality and meticulous attention to detail in every project we undertake. With a steadfast commitment to timely completion, we ensure that your dreams are realized on schedule.
              </p>
              <p>
                Collaboration is at the heart of our approach. We work closely with our clients, blending innovative techniques with traditional craftsmanship. Our use of cutting-edge technology ensures that we provide tailored solutions that meet the unique needs of each project.
              </p>
              <p>
                With over two decades of experience in the construction industry, Sandali Construction has earned a reputation as a trusted partner for residential and commercial builds across Sri Lanka.
              </p>
            </div>

            {/* CEO Card */}
            <Card className="bg-secondary border-none mt-8">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Owner / CEO</p>
                  <p className="font-display font-semibold text-lg">Mr. A. Kulasiri Jayashingha</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="card-hover border-2">
              <CardContent className="p-6 text-center">
                <Award className="w-10 h-10 mx-auto mb-4 text-safety-yellow" />
                <p className="font-display text-3xl font-bold">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2">
              <CardContent className="p-6 text-center">
                <Building2 className="w-10 h-10 mx-auto mb-4 text-safety-orange" />
                <p className="font-display text-3xl font-bold">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 mx-auto mb-4 text-safety-blue" />
                <p className="font-display text-3xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Team Members</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2">
              <CardContent className="p-6 text-center">
                <Award className="w-10 h-10 mx-auto mb-4 text-safety-green" />
                <p className="font-display text-3xl font-bold">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
