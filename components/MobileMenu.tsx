"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact", button: true },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden relative w-6 h-6 text-slate-700 dark:text-slate-300"
        aria-label="Toggle menu"
      >
        <span
          className={`block absolute h-0.5 w-6 bg-current transition-all duration-300 ${
            isOpen ? "rotate-45 top-2.5" : "top-1.5"
          }`}
        />
        <span
          className={`block absolute h-0.5 w-6 bg-current top-2.5 transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block absolute h-0.5 w-6 bg-current transition-all duration-300 ${
            isOpen ? "-rotate-45 top-2.5" : "top-3.5"
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-16 sm:top-20 bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-emerald-200/40 dark:border-emerald-800/40 md:hidden transition-all duration-300 overflow-hidden z-50 w-screen ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2.5 text-sm font-medium rounded-lg transition ${
                item.button
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 w-full text-center"
                  : "text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
