export type ProductCategory = "squishy" | "cosmetics";

export interface Product {
  id: string;
  slug: string;
  name: string;
  vendor: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  badge?: "new" | "bestseller" | "sale";
  description: string;
  features: string[];
  images: string[];
  inStock: boolean;
}

export const products: Product[] = [
  // === SQUISHY / SENSORY TOYS ===
  {
    id: "sq-001",
    slug: "dreamy-cloud-squishy",
    name: "Dreamy Cloud Squishy",
    vendor: "Amelara",
    category: "squishy",
    price: 12.99,
    compareAtPrice: 18.99,
    badge: "bestseller",
    description: "Super soft cloud-shaped stress relief squishy. Slow-rising, scented, and incredibly satisfying to squeeze. Perfect for desk fidgeting or sensory play.",
    features: ["Slow-rising foam", "Sweet vanilla scent", "Non-toxic materials", "Ages 3+"],
    images: ["/product-images/squishy/dreamy-cloud.webp"],
    inStock: true,
  },
  {
    id: "sq-002",
    slug: "rainbow-cat-squishy",
    name: "Rainbow Cat Squishy",
    vendor: "Amelara",
    category: "squishy",
    price: 9.99,
    badge: "new",
    description: "Adorable cat-shaped squishy in pastel rainbow colors. Ultra-soft and slow-rising for maximum stress relief.",
    features: ["Pastel rainbow colors", "Slow-rising", "Soft PU foam", "Collectible series"],
    images: ["/product-images/squishy/rainbow-cat.webp"],
    inStock: true,
  },
  {
    id: "sq-003",
    slug: "galaxy-donut-squishy",
    name: "Galaxy Donut Squishy",
    vendor: "Amelara",
    category: "squishy",
    price: 11.99,
    compareAtPrice: 15.99,
    badge: "sale",
    description: "A mesmerizing galaxy-themed donut squishy with swirling purple and blue colors. Satisfying squeeze every time.",
    features: ["Galaxy print design", "Scented", "Slow-rising", "Great gift idea"],
    images: ["/product-images/squishy/galaxy-donut.webp"],
    inStock: true,
  },
  {
    id: "sq-004",
    slug: "jumbo-strawberry-squishy",
    name: "Jumbo Strawberry Squishy",
    vendor: "Amelara",
    category: "squishy",
    price: 14.99,
    description: "Extra-large strawberry squishy with realistic detailing. The ultimate sensory toy for all ages.",
    features: ["Jumbo size (15cm)", "Strawberry scent", "Premium foam", "Realistic detail"],
    images: ["/product-images/squishy/jumbo-strawberry.webp"],
    inStock: true,
  },
  {
    id: "sq-005",
    slug: "mini-animal-set",
    name: "Mini Animal Set (6-Pack)",
    vendor: "Amelara",
    category: "squishy",
    price: 19.99,
    compareAtPrice: 29.99,
    badge: "sale",
    description: "Collection of 6 mini animal squishies — puppy, kitten, bunny, bear, panda, and duck. Perfect party favors or collector set.",
    features: ["6 different animals", "Mini size (5cm each)", "Assorted colors", "Gift box included"],
    images: ["/product-images/squishy/mini-animal-set.webp"],
    inStock: true,
  },
  {
    id: "sq-006",
    slug: "fidget-pop-cube",
    name: "Fidget Pop Cube",
    vendor: "Amelara",
    category: "squishy",
    price: 8.99,
    badge: "new",
    description: "Multi-sensory fidget cube combining pop-it bubbles, squishy surfaces, and clicking buttons. Six sides of satisfying fidgeting.",
    features: ["6 fidget sides", "Silicone bubbles", "Compact & portable", "BPA-free"],
    images: ["/product-images/squishy/fidget-pop-cube.webp"],
    inStock: true,
  },

  // === COSMETICS / BEAUTY ===
  {
    id: "cos-001",
    slug: "velvet-glow-serum",
    name: "Velvet Glow Serum",
    vendor: "Amelara Beauty",
    category: "cosmetics",
    price: 34.99,
    compareAtPrice: 44.99,
    badge: "bestseller",
    description: "Lightweight hyaluronic acid serum that delivers instant hydration and a luminous, dewy finish. Your skin's new daily essential.",
    features: ["Hyaluronic acid", "Vitamin C enriched", "Fragrance-free", "All skin types"],
    images: ["/product-images/cosmetics/velvet-glow-serum.webp"],
    inStock: true,
  },
  {
    id: "cos-002",
    slug: "rose-petal-lip-gloss",
    name: "Rose Petal Lip Gloss",
    vendor: "Amelara Beauty",
    category: "cosmetics",
    price: 18.99,
    badge: "new",
    description: "Sheer, buildable lip gloss with real rose petal extracts. Hydrating, non-sticky, and beautifully glossy.",
    features: ["Rose petal extract", "Non-sticky formula", "Buildable color", "Vitamin E"],
    images: ["/product-images/cosmetics/rose-petal-lip-gloss.webp"],
    inStock: true,
  },
  {
    id: "cos-003",
    slug: "silk-finish-foundation",
    name: "Silk Finish Foundation",
    vendor: "Amelara Beauty",
    category: "cosmetics",
    price: 38.99,
    compareAtPrice: 48.99,
    badge: "sale",
    description: "Medium-to-full coverage foundation with a natural silk finish. Blends seamlessly and lasts up to 16 hours.",
    features: ["16-hour wear", "20 shades", "SPF 15", "Silk protein complex"],
    images: ["/product-images/cosmetics/silk-finish-foundation.webp"],
    inStock: true,
  },
  {
    id: "cos-004",
    slug: "midnight-bloom-perfume",
    name: "Midnight Bloom Perfume",
    vendor: "Amelara Beauty",
    category: "cosmetics",
    price: 52.99,
    description: "An intoxicating blend of jasmine, vanilla, and sandalwood. Elegant, long-lasting fragrance for day and night.",
    features: ["50ml / 1.7 fl oz", "Jasmine & vanilla notes", "Long-lasting (8+ hours)", "Glass bottle"],
    images: ["/product-images/cosmetics/midnight-bloom-perfume.webp"],
    inStock: true,
  },
  {
    id: "cos-005",
    slug: "cloud-cream-moisturizer",
    name: "Cloud Cream Moisturizer",
    vendor: "Amelara Beauty",
    category: "cosmetics",
    price: 28.99,
    compareAtPrice: 36.99,
    badge: "bestseller",
    description: "Whipped, cloud-like moisturizer that melts into skin for deep hydration without heaviness. Dermatologist tested.",
    features: ["Ceramide complex", "Fragrance-free", "Dermatologist tested", "72-hour hydration"],
    images: ["/product-images/cosmetics/cloud-cream-moisturizer.webp"],
    inStock: true,
  },
  {
    id: "cos-006",
    slug: "luminous-setting-spray",
    name: "Luminous Setting Spray",
    vendor: "Amelara Beauty",
    category: "cosmetics",
    price: 22.99,
    badge: "new",
    description: "Fine mist setting spray that locks in makeup and adds a subtle luminous finish. Refreshing and lightweight.",
    features: ["Micro-mist nozzle", "12-hour hold", "Dewy finish", "Alcohol-free"],
    images: ["/product-images/cosmetics/luminous-setting-spray.webp"],
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge === "bestseller" || p.badge === "new");
}

export const FREE_SHIPPING_THRESHOLD = 20;
