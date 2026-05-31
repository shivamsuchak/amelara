"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { useCartStore } from "@/lib/store/cart";
import type { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
}

const badgeLabels: Record<string, string> = {
  sale: "Sale",
  new: "New",
  bestseller: "Bestseller",
};

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-[var(--radius-md)] bg-white shadow-[var(--shadow-soft)] transition-all duration-250 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[var(--shadow-medium)]"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-t-[var(--radius-md)] bg-gray-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant={product.badge}>
              {product.badge === "sale" && discount > 0
                ? `Save ${discount}%`
                : badgeLabels[product.badge]}
            </Badge>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-gray-600 mb-0.5">{product.vendor}</p>
        <h3 className="text-base font-medium text-gray-900 truncate">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-gray-600 line-through">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`
            mt-3 w-full rounded-[var(--radius-xl)] py-2.5 text-sm font-semibold
            transition-all duration-200 ease-out
            ${
              product.inStock
                ? "bg-primary text-white hover:bg-primary-hover active:scale-[0.98]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          {product.inStock ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </Link>
  );
}
