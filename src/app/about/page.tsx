import Image from "next/image";
import Link from "next/link";
import { Heart, Leaf, Star, Users } from "lucide-react";

const values = [
  { icon: Heart, title: "Joy First", desc: "Every product is chosen to spark happiness — whether it's a satisfying squeeze or a glowing complexion." },
  { icon: Star, title: "Premium Quality", desc: "We source the best materials and formulations so you never have to compromise on quality." },
  { icon: Leaf, title: "Conscious Choices", desc: "From packaging to ingredients, we prioritize sustainability and responsible sourcing." },
  { icon: Users, title: "Community Driven", desc: "Built by a community that believes in celebrating both playfulness and elegance." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-4 text-center" style={{ background: "var(--gradient-subtle)" }}>
        <div className="mx-auto max-w-2xl">
          <h1 className="font-[family-name:var(--font-poppins)] text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Our Story
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Amelara was born from a simple belief: life is better when you embrace both
            <span className="text-primary font-semibold"> playfulness </span>
            and
            <span className="text-primary font-semibold"> elegance</span>.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Where Joy Meets
              <span className="block text-primary">Elegance</span>
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              We started Amelara because we couldn&apos;t find a brand that celebrated both sides of who we are — the part that loves a good squishy stress-reliever and the part that craves a luxurious skincare ritual.
            </p>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Our curated collections bring together the most satisfying sensory toys and the most effective beauty products, all wrapped in a shopping experience that feels as good as the products themselves.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="relative flex-1 aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-soft)]">
              <Image
                src="https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=500&h=667&fit=crop"
                alt="Playful sensory toys"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative flex-1 aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-soft)] mt-8">
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

      {/* Values */}
      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-gray-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="mx-auto max-w-md">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-gray-900 mb-3">
            Ready to Explore?
          </h2>
          <p className="text-gray-600 mb-6">
            Browse our collections and find your next favorite thing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/collections/squishy"
              className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-hover transition-colors duration-200"
            >
              Shop Squishy
            </Link>
            <Link
              href="/collections/cosmetics"
              className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-gray-100 px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-300 transition-colors duration-200"
            >
              Shop Cosmetics
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
