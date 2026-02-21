import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Filter, ArrowUpDown, Package, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

const categoryIcons: Record<string, string> = {
  "Cement": "🏗️",
  "Steel": "⚙️",
  "Tiles": "🔲",
  "Paint": "🎨",
  "Electrical": "⚡",
  "Plumbing": "🔧",
  "Wood": "🪵",
  "default": "📦",
};

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
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="h-8 w-48 bg-muted rounded-sm mx-auto animate-pulse" />
            <div className="h-12 w-96 bg-muted rounded-sm mx-auto mt-4 animate-pulse" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="animate-pulse bg-card border-border rounded-sm">
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
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
      <div className="absolute inset-0 pattern-dots opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium text-xs uppercase tracking-[0.2em]">
            <Package className="w-4 h-4" />
            Quality Materials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Recommended <span className="text-primary italic">Hardware</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-light">
            Top-rated construction materials trusted by our team for superior quality and durability.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 border-border text-foreground hover:border-primary hover:text-primary rounded-sm">
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
                  {categoryIcons[category] || categoryIcons.default} {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 border-border text-foreground hover:border-primary hover:text-primary rounded-sm">
                <ArrowUpDown className="w-4 h-4" />
                Sort by {sortBy === "rating" ? "Rating" : "Name"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSortBy("rating")}>
                <Sparkles className="w-4 h-4 mr-2" /> Sort by Rating
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("name")}>
                Sort by Name
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group rounded-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">
                      {categoryIcons[item.category] || categoryIcons.default}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-sm border border-border/50 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  
                  <StarRating rating={Number(item.rating)} size="sm" />
                  
                  {item.notes && (
                    <p className="text-xs text-muted-foreground mt-3 line-clamp-2 font-light">
                      {item.notes}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
