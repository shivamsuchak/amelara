"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2, Truck } from "lucide-react";
import { useCartStore, getCartTotal, getCartCount, getShippingProgress } from "@/lib/store/cart";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity } = useCartStore();
  const total = getCartTotal(items);
  const count = getCartCount(items);
  const { remaining, progress, isFreeShipping } = getShippingProgress(items);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-[400px] bg-white shadow-[var(--shadow-lift)] flex flex-col transition-transform duration-300 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold">
            Your Cart ({count})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Shipping Progress */}
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <Truck size={16} className={isFreeShipping ? "text-success" : "text-gray-600"} />
            <p className="text-sm font-medium text-gray-900">
              {isFreeShipping
                ? "You qualify for FREE shipping! 🎉"
                : `You're $${remaining.toFixed(2)} away from FREE shipping`}
            </p>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-success transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-600 text-base mb-4">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="rounded-[var(--radius-xl)] bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 p-3 rounded-[var(--radius-md)] bg-gray-50"
                >
                  <div className="relative w-16 h-16 rounded-[var(--radius-sm)] bg-gray-100 flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-0.5">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-[var(--radius-sm)] bg-white border border-gray-300 text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-[var(--radius-sm)] bg-white border border-gray-300 text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start p-1 text-gray-400 hover:text-error transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-600">Subtotal</span>
              <span className="text-lg font-bold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full text-center rounded-[var(--radius-xl)] bg-primary px-6 py-3.5 text-base font-semibold text-white hover:bg-primary-hover transition-colors duration-200"
            >
              Checkout
            </Link>
            <button
              onClick={closeCart}
              className="block w-full text-center text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
