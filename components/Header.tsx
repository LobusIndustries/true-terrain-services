"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="True Terrain Services" className="h-12 w-12 object-contain" />
            <span className="font-bold text-stone-900 text-lg leading-tight">
              True Terrain<br />
              <span className="text-xs font-semibold text-green-700 tracking-widest uppercase">Services</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-green-700 transition-colors">Services</a>
            <a href="#about" className="hover:text-green-700 transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-green-700 transition-colors">How It Works</a>
            <a href="#reviews" className="hover:text-green-700 transition-colors">Reviews</a>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
            >
              📅 Book Free Estimate
            </a>
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-4 text-sm font-medium text-gray-700">
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-green-700">Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-green-700">About</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="hover:text-green-700">How It Works</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-green-700">Reviews</a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-1.5 bg-green-700 text-white font-semibold px-4 py-2.5 rounded-lg text-center justify-center hover:bg-green-800 transition-colors"
            >
              📅 Book Free Estimate
            </a>
            <a href="tel:4804178385" className="text-green-700 font-semibold">📞 (480) 417-8385</a>
          </nav>
        </div>
      )}
    </header>
  );
}
