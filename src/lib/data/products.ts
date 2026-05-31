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
    slug: "kawaii-pretzel-squishy",
    name: "Kawaii Pretzel Squishy Keychain – Cute Food Stress Relief Toy",
    vendor: "Amelara",
    category: "squishy",
    price: 9.99,
    compareAtPrice: 14.99,
    badge: "bestseller",
    description: "Adorable kawaii pretzel squishy with a smiling face, perfect for stress relief and sensory play. Soft, slow-rising design makes it ideal for kids, teens, and collectors who love cute food squishies.",
    features: ["Slow-rising foam", "Kawaii face design", "Keychain attachment", "Non-toxic materials", "Ages 6+"],
    images: ["/product-images/squishy/toy1.jpeg"],
    inStock: true,
  },
  {
    id: "sq-002",
    slug: "rainbow-boba-tea-squishy",
    name: "Rainbow Boba Tea Squishy Charm – Cute Bubble Tea Keychain Toy",
    vendor: "Amelara",
    category: "squishy",
    price: 11.99,
    badge: "new",
    description: "Pastel rainbow boba tea squishy with adorable kawaii face and keychain attachment. Soft, slow-rising sensory toy perfect for bubble tea lovers, stress relief, and cute bag accessories.",
    features: ["Pastel rainbow colors", "Slow-rising", "Boba tea design", "Keychain charm", "Collectible"],
    images: ["/product-images/squishy/toy2.jpeg"],
    inStock: true,
  },
  {
    id: "sq-003",
    slug: "bear-paw-squishy",
    name: "Cute Bear Paw Squishy Keychain – Kawaii Animal Stress Toy",
    vendor: "Amelara",
    category: "squishy",
    price: 8.99,
    compareAtPrice: 12.99,
    badge: "sale",
    description: "Sweet kawaii bear paw squishy in golden yellow with adorable face details. Soft, squeezable design perfect for stress relief, sensory play, and as a cute keychain charm for animal lovers.",
    features: ["Bear paw shape", "Golden yellow color", "Kawaii face", "Soft PU foam", "Keychain included"],
    images: ["/product-images/squishy/toy3.jpeg"],
    inStock: true,
  },
  {
    id: "sq-004",
    slug: "kawaii-toast-squishy",
    name: "Kawaii Toast Squishy Keychain – Cute Bread Slice Stress Toy",
    vendor: "Amelara",
    category: "squishy",
    price: 9.99,
    description: "Adorable white toast squishy with kawaii face and orange crust details. Soft, slow-rising bread-shaped charm perfect for breakfast lovers, stress relief, and cute bag decoration.",
    features: ["Toast bread design", "Kawaii face", "Slow-rising", "Keychain charm", "Realistic details"],
    images: ["/product-images/squishy/toy4.jpeg"],
    inStock: true,
  },
  {
    id: "sq-005",
    slug: "rainbow-burger-squishy",
    name: "Rainbow Burger Squishy Keychain – Kawaii Hamburger Stress Toy",
    vendor: "Amelara",
    category: "squishy",
    price: 12.99,
    compareAtPrice: 16.99,
    badge: "bestseller",
    description: "Colorful rainbow layered burger squishy with cute kawaii face on top bun. Soft, slow-rising design perfect for fast food fans, stress relief, and as a fun keychain accessory.",
    features: ["Rainbow layers", "Kawaii face", "Slow-rising", "Burger design", "Premium foam"],
    images: ["/product-images/squishy/toy5.jpeg"],
    inStock: true,
  },
  {
    id: "sq-006",
    slug: "strawberry-cake-squishy",
    name: "Strawberry Cake Slice Squishy – Cute Dessert Keychain Charm",
    vendor: "Amelara",
    category: "squishy",
    price: 10.99,
    badge: "new",
    description: "Sweet strawberry cake slice squishy with realistic layered design and fruit toppings. Soft, slow-rising dessert charm perfect for cake lovers, stress relief, and adorable bag decoration.",
    features: ["Layered cake design", "Strawberry topping", "Slow-rising", "Keychain charm", "Realistic details"],
    images: ["/product-images/squishy/toy6.jpeg"],
    inStock: true,
  },

  // === COSMETICS / PRESS-ON NAILS ===
  {
    id: "cos-001",
    slug: "emerald-green-butterfly-nails",
    name: "Emerald Green Gold Butterfly Press On Nails – Luxury Long Coffin Set",
    vendor: "Amelara Beauty",
    category: "cosmetics",
    price: 24.99,
    compareAtPrice: 34.99,
    badge: "bestseller",
    description: "Stunning emerald green and nude ombre press-on nails with 3D gold butterfly charms and crystal accents. Long coffin shape perfect for special occasions, weddings, or elegant everyday glam.",
    features: ["Long coffin shape", "3D butterfly charms", "Emerald green ombre", "Crystal accents", "24 nails + adhesive"],
    images: ["/product-images/cosmetics/nail2.jpeg"],
    inStock: true,
  },
  {
    id: "cos-002",
    slug: "yellow-blue-dot-nails",
    name: "Yellow Blue Dot Press On Nails – Cute Short Round Nail Set",
    vendor: "Amelara Beauty",
    category: "cosmetics",
    price: 16.99,
    badge: "new",
    description: "Cheerful yellow press-on nails with playful blue polka dots in a short round shape. Easy to apply and perfect for summer vibes, casual wear, or adding a pop of color to any outfit.",
    features: ["Short round shape", "Yellow base color", "Blue polka dots", "Easy application", "24 nails included"],
    images: ["/product-images/cosmetics/nail3.jpeg"],
    inStock: true,
  },
  {
    id: "cos-003",
    slug: "black-french-tip-nails",
    name: "Black French Tip Press On Nails – Elegant Almond Nude Nail Set",
    vendor: "Amelara Beauty",
    category: "cosmetics",
    price: 19.99,
    compareAtPrice: 26.99,
    badge: "sale",
    description: "Sophisticated nude press-on nails with chic black French tips and subtle crystal accent. Medium almond shape perfect for office wear, formal events, or timeless everyday elegance.",
    features: ["Almond shape", "Black French tips", "Nude base", "Crystal accent", "Office-appropriate"],
    images: ["/product-images/cosmetics/nail4.jpeg"],
    inStock: true,
  },
  {
    id: "cos-004",
    slug: "rose-gold-glitter-nails",
    name: "Rose Gold Glitter Press On Nails – Glamorous Long Coffin Set",
    vendor: "Amelara Beauty",
    category: "cosmetics",
    price: 22.99,
    description: "Luxurious rose gold glitter press-on nails with holographic crystal accents and sparkle details. Long coffin shape perfect for parties, special occasions, or adding instant glam to any look.",
    features: ["Long coffin shape", "Rose gold glitter", "Holographic crystals", "Party-ready", "24 nails + glue"],
    images: ["/product-images/cosmetics/nail5.jpeg"],
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
