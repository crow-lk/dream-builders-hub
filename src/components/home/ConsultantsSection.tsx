import { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { StarRating } from "@/components/ui/star-rating";
import { supabase } from "@/integrations/supabase/client";

interface Consultant {
  id: string;
  name: string;
  description: string | null;
  rating: number;
  projects_count: number;
}

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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Top Consultants (Rated by Clients)"
            subtitle="Work with our network of trusted architects, engineers, and consultants."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(5)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Top Consultants (Rated by Clients)"
          subtitle="Work with our network of trusted architects, engineers, and consultants."
        >
          <p className="text-xs text-muted-foreground mt-2">
            Community rating (editable)
          </p>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {consultants.map((consultant) => (
            <Card key={consultant.id} className="card-hover border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-lg text-foreground">
                      {consultant.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {consultant.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {consultant.description}
                    </p>
                    <div className="mt-3">
                      <StarRating rating={Number(consultant.rating)} />
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Briefcase className="w-3 h-3" />
                      <span>{consultant.projects_count} projects supported</span>
                    </div>
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
