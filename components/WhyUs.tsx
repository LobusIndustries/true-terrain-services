const reasons = [
  {
    number: "01",
    title: "We Actually Show Up",
    description:
      "No ghosting, no rescheduling excuses. We commit to a time and we're there. Your time matters and we respect it.",
  },
  {
    number: "02",
    title: "Straight Pricing, No Games",
    description:
      "What we quote is what you pay. No hidden fees added after the work is done. We build trust with transparency.",
  },
  {
    number: "03",
    title: "Arizona Climate Experts",
    description:
      "We know the desert. We use materials and methods that hold up in extreme heat, monsoons, and everything in between.",
  },
  {
    number: "04",
    title: "Easy to Reach",
    description:
      "Call or text us directly at (480) 417-8385. You talk to the team, not a call center. Real answers, fast.",
  },
  {
    number: "05",
    title: "Locally Invested",
    description:
      "We live and work in the East Valley. When your neighborhood looks good, we all win. That's why we take pride in every project.",
  },
  {
    number: "06",
    title: "Full Service Team",
    description:
      "From irrigation to hardscape to junk removal, we handle it all. One company, one call, zero hassle coordinating multiple contractors.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Why True Terrain</span>
          <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-4">The Difference You&apos;ll Feel</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div key={reason.number} className="bg-white rounded-2xl p-7 border border-stone-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl font-extrabold text-green-100 group-hover:text-green-200 mb-3 transition-colors leading-none">
                {reason.number}
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">{reason.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
