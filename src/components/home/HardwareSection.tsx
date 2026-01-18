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
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="h-8 w-48 bg-primary-foreground/10 rounded-full mx-auto animate-pulse" />
            <div className="h-12 w-96 bg-primary-foreground/10 rounded-lg mx-auto mt-4 animate-pulse" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="animate-pulse bg-primary-foreground/10 border-none">
                <CardContent className="p-6">
                  <div className="h-6 bg-primary-foreground/10 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-primary-foreground/10 rounded w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <motion.div
        animate={{ x: [0, 100, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-20 left-0 w-72 h-72 bg-safety-orange rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-20 right-0 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-safety-orange font-semibold text-sm uppercase tracking-wider">
            <Package className="w-4 h-4" />
            Quality Materials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Recommended <span className="text-safety-orange">Hardware</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4">
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
              <Button variant="outline" size="sm" className="gap-2 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
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
              <Button variant="outline" size="sm" className="gap-2 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
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
              <Card className="h-full bg-primary-foreground/5 border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-safety-orange/50 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">
                      {categoryIcons[item.category] || categoryIcons.default}
                    </span>
                    <span className="text-xs font-medium text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-primary-foreground mb-3 group-hover:text-safety-orange transition-colors">
                    {item.name}
                  </h3>
                  
                  <StarRating rating={Number(item.rating)} size="sm" />
                  
                  {item.notes && (
                    <p className="text-xs text-primary-foreground/60 mt-3 line-clamp-2">
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
