"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, Truck } from "lucide-react";
import { useCartStore, getCartTotal, getCartCount, getShippingProgress } from "@/lib/store/cart";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const total = getCartTotal(items);
  const count = getCartCount(items);
  const { remaining, progress, isFreeShipping } = getShippingProgress(items);

  if (items.length === 0) {
    return (
      <section className="py-24 px-4 text-center">
        <div className="mx-auto max-w-md">
          <span className="text-5xl block mb-4">🛒</span>
          <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900 mb-2">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-6">Looks like you haven&apos;t added anything yet.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-hover transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-[1280px]">
        <h1 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Your Cart ({count})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded-[var(--radius-md)] bg-gray-50"
              >
                <div className="w-20 h-20 rounded-[var(--radius-sm)] bg-gray-200 flex-shrink-0 flex items-center justify-center text-2xl">
                  🛍
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.slug}`}
                    className="text-base font-medium text-gray-900 hover:text-primary transition-colors truncate block"
                  >
                    {item.name}
                  </Link>
                  <p className="text-base font-bold text-gray-900 mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 rounded-[var(--radius-sm)] bg-white border border-gray-300 text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 rounded-[var(--radius-sm)] bg-white border border-gray-300 text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 text-gray-400 hover:text-error transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={16} />
                  </button>
                  <span className="text-base font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-gray-600 hover:text-error transition-colors mt-2"
            >
              Clear Cart
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-[var(--radius-lg)] bg-gray-50 p-6 sticky top-32">
              {/* Shipping Progress */}
              <div className="flex items-center gap-2 mb-3">
                <Truck size={16} className={isFreeShipping ? "text-success" : "text-gray-600"} />
                <p className="text-sm font-medium text-gray-900">
                  {isFreeShipping
                    ? "You qualify for FREE shipping! 🎉"
                    : `$${remaining.toFixed(2)} away from FREE shipping`}
                </p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden mb-6">
                <div
                  className="h-full rounded-full bg-success transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-gray-900">
                    {isFreeShipping ? "Free" : "Calculated at checkout"}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full rounded-[var(--radius-xl)] bg-primary py-3.5 text-base font-semibold text-white hover:bg-primary-hover transition-colors duration-200">
                Proceed to Checkout
              </button>
              <Link
                href="/"
                className="block w-full text-center mt-3 text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
