import ProductCard from "./ProductCard";
import type { Product } from "@/lib/data/products";

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[1280px]">
        {title && (
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-gray-900 mb-8 text-center">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
