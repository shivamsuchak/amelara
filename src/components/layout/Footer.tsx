"use client";

import Link from "next/link";
import { Heart, MessageCircle, Share2, Play } from "lucide-react";

const shopLinks = [
  { href: "/collections/squishy", label: "Squishy Toys" },
  { href: "/collections/cosmetics", label: "Cosmetics" },
  { href: "/collections/squishy", label: "New Arrivals" },
  { href: "/collections/cosmetics", label: "Best Sellers" },
];

const aboutLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/about", label: "Sustainability" },
  { href: "/about", label: "Press" },
];

const supportLinks = [
  { href: "/about", label: "FAQ" },
  { href: "/about", label: "Shipping & Returns" },
  { href: "/about", label: "Contact Us" },
  { href: "/about", label: "Privacy Policy" },
];

const socials = [
  { icon: Heart, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: Play, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-putty">
      <div className="mx-auto max-w-[1280px] px-4 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-[family-name:var(--font-poppins)] text-xl font-bold tracking-widest text-gray-900 uppercase"
            >
              Amelara
            </Link>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-xs">
              Playful luxury for every mood. From squishy stress-relief to premium beauty — joy delivered.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">
                Stay in the loop
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-[var(--radius-xl)] bg-white px-4 py-2.5 text-sm text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="rounded-[var(--radius-xl)] bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-colors duration-200"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-putty flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Amelara. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-600 hover:text-primary transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
