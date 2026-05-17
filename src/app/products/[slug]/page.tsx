import { notFound } from "next/navigation";
import { products, getProductBySlug, getProductsByCategory } from "@/lib/data/products";
import ProductDetailClient from "./ProductDetailClient";
import ProductGrid from "@/components/product/ProductGrid";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <ProductDetailClient product={product} />
      {related.length > 0 && (
        <ProductGrid products={related} title="You May Also Like" />
      )}
    </>
  );
}
