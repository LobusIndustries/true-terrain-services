const services = [
  {
    icon: "🪨",
    title: "Rock Spreading",
    description:
      "Desert landscaping done right. We source, deliver, and spread decorative rock, gravel, and decomposed granite for a clean, low-maintenance finish.",
  },
  {
    icon: "💧",
    title: "Irrigation Install & Repair",
    description:
      "Keep your plants alive without wasting water. We install new drip and spray systems and troubleshoot existing ones fast.",
  },
  {
    icon: "🌿",
    title: "Landscaping",
    description:
      "Full landscape design and installation including desert-adapted plants, trees, borders, and full yard transformations.",
  },
  {
    icon: "✂️",
    title: "Maintenance",
    description:
      "Ongoing yard maintenance to keep your property looking sharp year-round. Trimming, cleanup, weed control, and more.",
  },
  {
    icon: "🧱",
    title: "Hardscape",
    description:
      "Retaining walls, garden borders, walkways, and outdoor structures built to last through Arizona's extreme climate.",
  },
  {
    icon: "⬜",
    title: "Pavers",
    description:
      "Driveways, patios, and paths finished with professional-grade pavers. Clean, durable, and beautiful.",
  },
  {
    icon: "🌱",
    title: "Artificial Turf",
    description:
      "Lush, green grass year-round with zero water. Perfect for Arizona backyards, dog runs, and play areas.",
  },
  {
    icon: "🚛",
    title: "Junk Removal",
    description:
      "Hauling away old rocks, debris, yard waste, concrete, and more. We leave your property clean and ready for the next project.",
  },
  {
    icon: "🔧",
    title: "Custom Jobs",
    description:
      "Have something unique in mind? We love a challenge. Reach out and tell us what you need — we'll make it happen.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-4">Complete Outdoor Solutions</h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            From the ground up, we handle everything your property needs — inside or outside the budget, small or large scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-stone-50 hover:bg-green-700 border border-stone-100 hover:border-green-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-500 group-hover:text-green-100 text-sm leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-md"
          >
            📅 Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
