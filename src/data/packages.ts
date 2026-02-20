import { Star, Sparkles, Crown, Gem } from "lucide-react";
import packageBudget from "@/assets/package-budget.jpg";
import packagePremium from "@/assets/package-premium.jpg";
import packageVip from "@/assets/package-vip.jpg";
import packageVvip from "@/assets/package-vvip.jpg";

export type Package = {
  id: string;
  name: string;
  rate: number;
  badge: string;
  icon: React.ElementType;
  badgeColor: string;
  description: string;
  image: string;
  popular?: boolean;
  tagline: string;
  features: string[];
  specs: {
    bedrooms: { min: number; max: number };
    bathrooms: { min: number; max: number };
    parking: number;
    floors: number;
    livingRooms: number;
    kitchen: string;
    diningRoom: boolean;
    store: boolean;
    study: boolean;
  };
  materials: {
    flooring: string;
    roofing: string;
    walls: string;
    windows: string;
    doors: string;
    electrical: string;
    plumbing: string;
  };
  highlights: string[];
};

export const packages: Package[] = [
  {
    id: "budget-home-1",
    name: "Budget Home 1",
    rate: 10000,
    badge: "Essential",
    icon: Star,
    badgeColor: "bg-safety-blue",
    description: "Perfect for budget-conscious first-time home builders",
    tagline: "Start your homeownership journey affordably",
    image: packageBudget,
    specs: {
      bedrooms: { min: 2, max: 3 },
      bathrooms: { min: 1, max: 2 },
      parking: 1,
      floors: 1,
      livingRooms: 1,
      kitchen: "Open plan",
      diningRoom: false,
      store: false,
      study: false,
    },
    features: [
      "Standard finishing",
      "Essential fittings",
      "Basic electrical & plumbing",
      "Standard flooring",
      "Basic paint finish",
    ],
    materials: {
      flooring: "Vinyl / Standard tiles",
      roofing: "Asbestos sheet / Standard clay tiles",
      walls: "Plastered cement block",
      windows: "Aluminium sliding windows",
      doors: "Hollow core flush doors",
      electrical: "Basic wiring, standard switches",
      plumbing: "Standard PVC piping",
    },
    highlights: [
      "Affordable starter home",
      "Quick construction timeline",
      "Low maintenance costs",
      "Energy efficient design",
    ],
  },
  {
    id: "budget-home-2",
    name: "Budget Home 2",
    rate: 12000,
    badge: "Popular",
    icon: Sparkles,
    badgeColor: "bg-safety-green",
    description: "Best value for upgraded budget builds",
    tagline: "More comfort without breaking the budget",
    image: packagePremium,
    popular: true,
    specs: {
      bedrooms: { min: 3, max: 4 },
      bathrooms: { min: 2, max: 3 },
      parking: 1,
      floors: 1,
      livingRooms: 1,
      kitchen: "Separate kitchen",
      diningRoom: true,
      store: false,
      study: false,
    },
    features: [
      "Improved finishing",
      "Better quality fittings",
      "Enhanced electrical",
      "Ceramic tile flooring",
      "Quality paint finish",
    ],
    materials: {
      flooring: "Ceramic tiles (600×600)",
      roofing: "Concrete roof tiles",
      walls: "Plastered & textured finish",
      windows: "Aluminium casement windows",
      doors: "Solid core timber doors",
      electrical: "MCB panel, quality switches",
      plumbing: "UPVC pipes, quality fittings",
    },
    highlights: [
      "Best value for money",
      "Separate dining room",
      "Quality tile flooring",
      "Improved security fittings",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    rate: 18000,
    badge: "Premium",
    icon: Crown,
    badgeColor: "bg-safety-orange",
    description: "Premium living with superior materials",
    tagline: "Elevated living for growing families",
    image: packageVip,
    specs: {
      bedrooms: { min: 3, max: 5 },
      bathrooms: { min: 2, max: 4 },
      parking: 2,
      floors: 2,
      livingRooms: 2,
      kitchen: "Modern fitted kitchen",
      diningRoom: true,
      store: true,
      study: false,
    },
    features: [
      "Premium materials",
      "Design support included",
      "Premium electrical & plumbing",
      "Porcelain tile flooring",
      "Premium paint & finishes",
      "Custom woodwork",
    ],
    materials: {
      flooring: "Porcelain tiles (600×1200)",
      roofing: "Concrete flat / pitched roof",
      walls: "Smooth skim coat finish",
      windows: "uPVC double-glazed windows",
      doors: "Teak solid wood doors",
      electrical: "Smart wiring, premium switches",
      plumbing: "Chrome fittings, quality sanitary ware",
    },
    highlights: [
      "Two-storey design option",
      "2 living rooms for family privacy",
      "Storage room included",
      "Designer kitchen & bathrooms",
    ],
  },
  {
    id: "vvip",
    name: "VVIP",
    rate: 35000,
    badge: "Luxury",
    icon: Gem,
    badgeColor: "bg-safety-yellow",
    description: "Ultimate luxury for discerning clients",
    tagline: "Where luxury meets impeccable craftsmanship",
    image: packageVvip,
    specs: {
      bedrooms: { min: 4, max: 7 },
      bathrooms: { min: 3, max: 6 },
      parking: 3,
      floors: 3,
      livingRooms: 3,
      kitchen: "Chef's island kitchen",
      diningRoom: true,
      store: true,
      study: true,
    },
    features: [
      "Luxury finishing throughout",
      "Custom design selections",
      "High-end electrical systems",
      "Imported tile options",
      "Designer paint & textures",
      "Premium woodwork",
      "Smart home ready",
    ],
    materials: {
      flooring: "Imported marble / premium porcelain",
      roofing: "Architectural concrete + green roof option",
      walls: "Designer textures & feature walls",
      windows: "German uPVC / aluminium composite",
      doors: "Custom-designed solid wood & glass",
      electrical: "Full smart home automation",
      plumbing: "Imported sanitary ware, rain showers",
    },
    highlights: [
      "Smart home automation ready",
      "Private study / home office",
      "3-car parking with coverage",
      "Imported luxury finishes",
    ],
  },
];
