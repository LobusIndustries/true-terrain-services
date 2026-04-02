export default function Hero() {
  return (
    <section
      className="relative text-white pt-32 pb-20 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-green-950/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
            🌵 Queen Creek, Arizona
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Your Yard.<br />
            <span className="text-amber-400">Transformed.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-stone-200 mb-8 leading-relaxed max-w-xl">
            From rock spreading and irrigation to full hardscape builds, True Terrain Services delivers professional results you can trust — right here in the East Valley.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-base px-7 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              📅 Book Free Estimate
            </a>
            <a
              href="tel:4804178385"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all backdrop-blur-sm"
            >
              📞 (480) 417-8385
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              { value: "100%", label: "Local AZ" },
              { value: "5★", label: "Rated" },
              { value: "8+", label: "Services" },
              { value: "FREE", label: "Estimates" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-amber-400">{stat.value}</div>
                <div className="text-xs text-stone-300 mt-0.5 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
