"use client";

import Link from "next/link";
import ProductGrid from "@/components/product/ProductGrid";
import { products, getFeaturedProducts } from "@/lib/data/products";
import { Shield, Truck, RotateCcw, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const benefits = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $20" },
  { icon: Shield, title: "Secure Checkout", desc: "100% protected payments" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day hassle-free returns" },
  { icon: Sparkles, title: "Premium Quality", desc: "Carefully curated products" },
];

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
        <div className="mx-auto max-w-[1280px] px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
            New Collection Available
          </span>
          <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight max-w-3xl">
            Playful Luxury for
            <span className="block" style={{ background: "var(--gradient-soft)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Every Mood
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            From squishy stress-relief to premium beauty — discover joy and elegance, all in one place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/collections/squishy"
              className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-hover transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-soft)]"
            >
              Shop Squishy
            </Link>
            <Link
              href="/collections/cosmetics"
              className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-white px-8 py-3.5 text-base font-semibold text-gray-900 border border-gray-300 hover:border-primary hover:text-primary transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Shop Cosmetics
            </Link>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <FadeIn>
      <section className="py-12 px-4">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/collections/squishy"
              className="group flex flex-col items-center gap-3 rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-250 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] min-w-[140px]"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-200">🧸</span>
              <span className="text-sm font-semibold text-gray-900">Squishy Toys</span>
            </Link>
            <Link
              href="/collections/cosmetics"
              className="group flex flex-col items-center gap-3 rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-250 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] min-w-[140px]"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-200">✨</span>
              <span className="text-sm font-semibold text-gray-900">Cosmetics</span>
            </Link>
            <Link
              href="/collections/squishy"
              className="group flex flex-col items-center gap-3 rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-250 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] min-w-[140px]"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-200">🎉</span>
              <span className="text-sm font-semibold text-gray-900">New Arrivals</span>
            </Link>
            <Link
              href="/collections/cosmetics"
              className="group flex flex-col items-center gap-3 rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-250 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] min-w-[140px]"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-200">🏆</span>
              <span className="text-sm font-semibold text-gray-900">Best Sellers</span>
            </Link>
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <ProductGrid products={featured} title="Featured Products" />
      </FadeIn>

      <FadeIn delay={100}>
      <ProductGrid products={products} title="Shop All" />
      </FadeIn>

      {/* Editorial / Lifestyle Block */}
      <FadeIn>
      <section className="py-20 px-4" style={{ background: "var(--gradient-subtle)" }}>
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Where Joy Meets
              <span className="block text-primary">Elegance</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-lg">
              Amelara was born from the belief that life deserves both playfulness and luxury. Our curated collection bridges the gap between fun sensory experiences and premium beauty rituals.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center mt-6 text-base font-semibold text-primary hover:underline transition-all duration-200"
            >
              Our Story →
            </Link>
          </div>
          <div className="flex-1 flex gap-4">
            <div className="flex-1 aspect-[3/4] rounded-[var(--radius-lg)] bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center text-5xl shadow-[var(--shadow-soft)]">
              🧸
            </div>
            <div className="flex-1 aspect-[3/4] rounded-[var(--radius-lg)] bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center text-5xl shadow-[var(--shadow-soft)] mt-8">
              ✨
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Benefits Bar */}
      <FadeIn>
      <section className="py-16 px-4">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <b.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Newsletter */}
      <FadeIn>
      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-gray-900">
            Join the Amelara Club
          </h2>
          <p className="mt-2 text-gray-600">
            Get early access to new drops, exclusive offers, and 10% off your first order.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-[var(--radius-xl)] bg-white px-5 py-3 text-base text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="rounded-[var(--radius-xl)] bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-hover transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      </FadeIn>
    </>
  );
}
