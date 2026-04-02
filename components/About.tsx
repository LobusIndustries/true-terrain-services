const checkmarks = [
  "Licensed & insured for your peace of mind",
  "Free, no-pressure estimates",
  "Responsive communication — call or text",
  "Quality materials built for the Arizona climate",
  "Residential & commercial projects welcome",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-5 leading-tight">
              Arizona Owned.<br />Arizona Proud.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              True Terrain Services is a locally owned and operated landscaping company based in Queen Creek, AZ. We&apos;re not a big corporate franchise — we&apos;re your neighbors, and we treat every property like it&apos;s our own.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Whether you need rock spreading done right, an irrigation system installed or repaired, or a full hardscape transformation, our team shows up on time, communicates clearly, and delivers work you&apos;ll be proud to show off.
            </p>

            <ul className="space-y-3">
              {checkmarks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-700">
                  <span className="mt-0.5 text-green-600 font-bold text-lg leading-none">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-800 to-stone-800 rounded-2xl p-8 text-white shadow-2xl">
              {/* Desert landscape illustration */}
              <div className="text-center mb-6">
                <div className="text-7xl mb-2">🏜️</div>
                <p className="text-green-200 text-sm font-medium">Arizona landscaping by True Terrain Services</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                  <div className="text-3xl font-extrabold text-amber-400">📍</div>
                  <div className="text-sm font-semibold mt-1">Queen Creek</div>
                  <div className="text-xs text-green-200 mt-0.5">Based & Serving the East Valley</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                  <div className="text-3xl font-extrabold text-amber-400">100%</div>
                  <div className="text-sm font-semibold mt-1">Local AZ</div>
                  <div className="text-xs text-green-200 mt-0.5">Your neighbors, your team</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-amber-500 text-stone-900 font-bold rounded-xl px-5 py-3 shadow-lg text-sm">
              ★★★★★ Trusted by the East Valley
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
