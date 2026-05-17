"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { useCartStore } from "@/lib/store/cart";
import { getPlaceholderImage } from "@/lib/data/placeholder-images";
import { Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";
import type { Product } from "@/lib/data/products";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [descOpen, setDescOpen] = useState(true);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: getPlaceholderImage(product.slug, product.category),
      });
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-[1280px]">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link
            href={`/collections/${product.category}`}
            className="hover:text-primary transition-colors capitalize"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-[var(--radius-lg)] bg-gray-50 overflow-hidden shadow-[var(--shadow-soft)]">
              <Image
                src={getPlaceholderImage(product.slug, product.category)}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant={product.badge}>
                    {product.badge === "sale" && discount > 0
                      ? `Save ${discount}%`
                      : product.badge === "new"
                      ? "New"
                      : "Bestseller"}
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-gray-600 mb-1">{product.vendor}</p>
            <h1 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-lg text-gray-600 line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-semibold text-error">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center rounded-[var(--radius-xl)] border border-gray-300 overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-3 text-base font-medium min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(99, quantity + 1))}
                  className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`
                  flex-1 rounded-[var(--radius-xl)] py-3.5 text-base font-semibold
                  transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]
                  ${
                    product.inStock
                      ? "bg-primary text-white hover:bg-primary-hover shadow-[var(--shadow-soft)]"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                {product.inStock ? "Add to Cart" : "Sold Out"}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-gray-100">
              {/* Description */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setDescOpen(!descOpen)}
                  className="w-full flex items-center justify-between py-4 text-left"
                  aria-expanded={descOpen}
                >
                  <span className="text-base font-semibold text-gray-900">Description</span>
                  {descOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {descOpen && (
                  <div className="pb-4 text-base text-gray-600 leading-relaxed">
                    {product.description}
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="w-full flex items-center justify-between py-4 text-left"
                  aria-expanded={featuresOpen}
                >
                  <span className="text-base font-semibold text-gray-900">Features</span>
                  {featuresOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {featuresOpen && (
                  <ul className="pb-4 space-y-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-base text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
