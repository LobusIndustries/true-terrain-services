const areas = [
  "Queen Creek",
  "Gilbert",
  "Chandler",
  "San Tan Valley",
  "Mesa",
  "Maricopa",
  "Tempe",
  "Scottsdale",
  "Apache Junction",
  "Florence",
  "Ahwatukee",
  "Surrounding Areas",
];

export default function ServiceAreas() {
  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Where We Serve</span>
          <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-4">
            East Valley & Surrounding Areas
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto">
            Based in Queen Creek and proud to serve the greater East Valley. Not sure if we cover your area? Just ask.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 bg-white border border-stone-200 rounded-full px-5 py-2 text-sm font-medium text-stone-700 hover:border-green-400 hover:text-green-700 transition-colors"
            >
              📍 {area}
            </span>
          ))}
        </div>

        {/* Contact options */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          <a
            href="tel:4804178385"
            className="flex flex-col items-center gap-2 bg-white border border-stone-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-md transition-all text-center group"
          >
            <span className="text-3xl">📞</span>
            <span className="font-semibold text-stone-700 group-hover:text-green-700 transition-colors text-sm">Call or Text</span>
            <span className="font-bold text-stone-900">(480) 417-8385</span>
          </a>

          <a
            href="https://wa.me/14804178385"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 bg-white border border-stone-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-md transition-all text-center group"
          >
            <span className="text-3xl">💬</span>
            <span className="font-semibold text-stone-700 group-hover:text-green-700 transition-colors text-sm">WhatsApp</span>
            <span className="font-bold text-stone-900">+1 480-417-8385</span>
          </a>

          <a
            href="mailto:trueterrainservices@gmail.com"
            className="flex flex-col items-center gap-2 bg-white border border-stone-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-md transition-all text-center group"
          >
            <span className="text-3xl">✉️</span>
            <span className="font-semibold text-stone-700 group-hover:text-green-700 transition-colors text-sm">Email Us</span>
            <span className="font-bold text-stone-900 text-xs break-all">trueterrainservices@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
