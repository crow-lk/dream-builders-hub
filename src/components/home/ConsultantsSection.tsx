import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

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
];

export function ConsultantsSection() {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [loading, setLoading] = useState(true);

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-muted rounded-xl" />
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
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-safety-yellow/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
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

        {/* Consultants grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {consultants.map((consultant, index) => (
            <motion.div
              key={consultant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-2 hover:border-safety-blue/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Avatar with gradient */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <span className="font-bold text-xl text-foreground">
                        {consultant.name.charAt(0)}
                      </span>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate group-hover:text-safety-blue transition-colors">
                        {consultant.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {consultant.description}
                      </p>

                      {/* Rating */}
                      <div className="mt-3 flex items-center gap-2">
                        <StarRating rating={Number(consultant.rating)} />
                        <span className="text-xs text-muted-foreground">
                          ({consultant.rating.toFixed(1)})
                        </span>
                      </div>

                      {/* Projects count */}
                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                        <Briefcase className="w-3 h-3" />
                        <span>{consultant.projects_count} projects supported</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <Button size="lg" variant="outline" className="group">
              Work With Our Experts
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
