"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore, getCartCount, getShippingProgress } from "@/lib/store/cart";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items, toggleCart } = useCartStore();
  const cartCount = getCartCount(items);
  const { remaining, progress, isFreeShipping } = getShippingProgress(items);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ease-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-soft)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 -ml-2 text-gray-900 hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-widest text-gray-900 uppercase"
          >
            Amelara
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            <Link
              href="/collections/squishy"
              className="text-base font-medium text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Squishy
            </Link>
            <Link
              href="/collections/cosmetics"
              className="text-base font-medium text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Cosmetics
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-gray-600 hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-600 hover:text-primary transition-colors duration-200"
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
              {/* Mini progress bar under cart icon */}
              {cartCount > 0 && !isFreeShipping && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] w-6 rounded-full bg-gray-200 overflow-hidden">
                  <span
                    className="block h-full rounded-full bg-success transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
