import { useEffect, useState } from "react";
import { Filter, ArrowUpDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { StarRating } from "@/components/ui/star-rating";
import { supabase } from "@/integrations/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HardwareItem {
  id: string;
  name: string;
  category: string;
  rating: number;
  notes: string | null;
}

export function HardwareSection() {
  const [items, setItems] = useState<HardwareItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"rating" | "name">("rating");
  const [filterCategory, setFilterCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchItems() {
      const { data, error } = await supabase
        .from("hardware_items")
        .select("*");

      if (!error && data) {
        setItems(data);
      }
      setLoading(false);
    }

    fetchItems();
  }, []);

  const categories = [...new Set(items.map((item) => item.category))];

  const filteredItems = items
    .filter((item) => !filterCategory || item.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === "rating") {
        return Number(b.rating) - Number(a.rating);
      }
      return a.name.localeCompare(b.name);
    });

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Recommended Hardware Items"
            subtitle="Top-rated construction materials trusted by our team."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(7)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
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
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Recommended Hardware Items"
          subtitle="Top-rated construction materials trusted by our team."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                {filterCategory || "All Categories"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilterCategory(null)}>
                All Categories
              </DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => setFilterCategory(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowUpDown className="w-4 h-4" />
                Sort by {sortBy === "rating" ? "Rating" : "Name"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSortBy("rating")}>
                Sort by Rating
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("name")}>
                Sort by Name
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <Card key={item.id} className="card-hover bg-card border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                <StarRating rating={Number(item.rating)} size="sm" />
                {item.notes && (
                  <p className="text-xs text-muted-foreground mt-3 line-clamp-2">
                    {item.notes}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
