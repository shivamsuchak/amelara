import { notFound } from "next/navigation";
import ProductGrid from "@/components/product/ProductGrid";
import { getProductsByCategory } from "@/lib/data/products";
import type { ProductCategory } from "@/lib/data/products";

const collectionMeta: Record<string, { title: string; description: string; emoji: string }> = {
  squishy: {
    title: "Squishy & Sensory Toys",
    description: "Stress-busting, satisfying, and impossibly cute. Find your perfect squeeze.",
    emoji: "🧸",
  },
  cosmetics: {
    title: "Cosmetics & Beauty",
    description: "Premium skincare and beauty essentials for your glow-up ritual.",
    emoji: "✨",
  },
};

export function generateStaticParams() {
  return [{ slug: "squishy" }, { slug: "cosmetics" }];
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!collectionMeta[slug]) {
    notFound();
  }

  const meta = collectionMeta[slug];
  const categoryProducts = getProductsByCategory(slug as ProductCategory);

  return (
    <>
      {/* Collection Hero */}
      <section
        className="py-16 md:py-24 px-4 text-center"
        style={{ background: "var(--gradient-subtle)" }}
      >
        <div className="mx-auto max-w-[1280px]">
          <span className="text-5xl mb-4 block">{meta.emoji}</span>
          <h1 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {meta.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-md mx-auto">
            {meta.description}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid products={categoryProducts} />
    </>
  );
}
