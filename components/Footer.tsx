export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
              TT
            </div>
            <div>
              <div className="font-bold text-white text-sm">True Terrain Services</div>
              <div className="text-xs text-stone-500">Queen Creek, Arizona</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Book Now</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:4804178385" className="flex items-center gap-1.5 hover:text-white transition-colors">
              📞 (480) 417-8385
            </a>
            <a href="#contact" className="flex items-center gap-1.5 bg-green-700 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
              📅 Free Estimate
            </a>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-6 text-center text-xs text-stone-600">
          © {new Date().getFullYear()} True Terrain Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
