"use client";

import Image from "next/image";
import Link from "next/link";
import ProductGrid from "@/components/product/ProductGrid";
import { products, getFeaturedProducts } from "@/lib/data/products";
import { Shield, Truck, RotateCcw, Sparkles, Star, Lightbulb, Heart, Users } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const benefits = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $20" },
  { icon: Shield, title: "Secure Checkout", desc: "100% protected payments" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day hassle-free returns" },
  { icon: Sparkles, title: "Premium Quality", desc: "Carefully curated products" },
];

const collections = [
  {
    title: "Squishy Toys",
    href: "/collections/squishy",
    image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=600&h=400&fit=crop",
    desc: "Stress-busting, satisfying, and impossibly cute.",
  },
  {
    title: "Cosmetics",
    href: "/collections/cosmetics",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
    desc: "Premium skincare and beauty essentials.",
  },
  {
    title: "New Arrivals",
    href: "/collections/squishy",
    image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=600&h=400&fit=crop",
    desc: "The latest drops, fresh this week.",
  },
  {
    title: "Best Sellers",
    href: "/collections/cosmetics",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=400&fit=crop",
    desc: "Our most-loved products.",
  },
];

const whyUs = [
  { icon: Lightbulb, title: "Intentional Design", desc: "Every product is handpicked for quality, aesthetics, and that feel-good factor." },
  { icon: Heart, title: "Made with Care", desc: "We believe in thoughtful sourcing and premium materials that last." },
  { icon: Users, title: "Community First", desc: "Built by real people who care about your experience — from browse to unbox." },
];

const testimonials = [
  { name: "Sarah M.", text: "The squishy quality is insane — way better than anything I've found on Amazon. My daughter and I fight over the cloud one!", date: "March 12, 2026", stars: 5 },
  { name: "Emma T.", text: "The Velvet Glow Serum is my new holy grail. Skin feels so hydrated and it layers perfectly under makeup.", date: "February 28, 2026", stars: 5 },
  { name: "David L.", text: "Bought the mystery box as a gift — the packaging was gorgeous and everything inside was top quality. Will order again!", date: "March 5, 2026", stars: 5 },
  { name: "Jessica M.", text: "I love that I can get cute toys AND skincare from one store. Shipping was fast and the free shipping threshold is so reasonable.", date: "April 1, 2026", stars: 5 },
  { name: "Olivia R.", text: "The lip gloss is buttery smooth. The color is perfect for everyday. Already ordered two more shades!", date: "March 20, 2026", stars: 5 },
  { name: "Noah B.", text: "These fidget toys actually help me focus during work calls. Premium feel, not cheap at all. Highly recommend.", date: "March 30, 2026", stars: 5 },
];

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero — Rhode-inspired full-bleed with lifestyle imagery */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=1080&fit=crop&q=80"
          alt="Amelara lifestyle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-primary/10 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              New Collection Available
            </span>
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Playful Luxury for
              <span className="block" style={{ background: "var(--gradient-soft)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Every Mood
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              From squishy stress-relief to premium beauty — discover joy and elegance, all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/collections/squishy"
                className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-hover transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-medium)]"
              >
                Shop Squishy
              </Link>
              <Link
                href="/collections/cosmetics"
                className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-white/90 backdrop-blur-sm px-8 py-4 text-base font-semibold text-gray-900 border border-gray-300 hover:border-primary hover:text-primary transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Shop Cosmetics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Cards — Squeezy-inspired image-based navigation */}
      <FadeIn>
      <section className="py-20 px-4">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10">
            Shop Our Collections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group relative rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <p className="text-sm text-white/80 mt-0.5">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Featured Products */}
      <FadeIn>
      <ProductGrid products={featured} title="Featured Products" />
      </FadeIn>

      {/* Why Amelara — Squeezy "Why Us" pattern */}
      <FadeIn>
      <section className="py-20 px-4 bg-cream">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-4">
            Why Amelara?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-lg mx-auto">
            We combine the best of playful joy and premium beauty into one curated experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={26} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* All Products */}
      <FadeIn delay={100}>
      <ProductGrid products={products} title="Shop All" />
      </FadeIn>

      {/* Customer Testimonials — Squeezy-inspired social proof */}
      <FadeIn>
      <section className="py-20 px-4">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-4">
            What Our Customers Say ⭐
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">
            See why thousands trust Amelara for their squishy and beauty needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-[var(--radius-lg)] bg-gray-50 p-6 shadow-[var(--shadow-soft)] flex flex-col"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-base text-gray-700 leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">{t.name}</span>
                  <span className="text-xs text-gray-400">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Editorial / Lifestyle Block — Rhode-inspired */}
      <FadeIn>
      <section className="py-24 px-4" style={{ background: "var(--gradient-subtle)" }}>
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Where Joy Meets
              <span className="block text-primary">Elegance</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-lg">
              Amelara was born from the belief that life deserves both playfulness and luxury. Our curated collection bridges the gap between fun sensory experiences and premium beauty rituals.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center mt-8 rounded-[var(--radius-xl)] bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-hover transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Our Story →
            </Link>
          </div>
          <div className="flex-1 flex gap-5">
            <div className="relative flex-1 aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-medium)]">
              <Image
                src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&h=667&fit=crop"
                alt="Colorful sensory toys"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative flex-1 aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-medium)] mt-10">
              <Image
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=667&fit=crop"
                alt="Premium beauty serum"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Benefits Bar */}
      <FadeIn>
      <section className="py-20 px-4">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <b.icon size={24} className="text-primary" />
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
      <section className="py-20 px-4 bg-cream">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-semibold text-gray-900">
            Join the Amelara Club
          </h2>
          <p className="mt-3 text-gray-600">
            Get early access to new drops, exclusive offers, and 10% off your first order.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-[var(--radius-xl)] bg-white px-5 py-3.5 text-base text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="rounded-[var(--radius-xl)] bg-primary px-6 py-3.5 text-base font-semibold text-white hover:bg-primary-hover transition-colors duration-200"
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
