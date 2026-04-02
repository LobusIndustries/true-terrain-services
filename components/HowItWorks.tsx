const steps = [
  {
    number: "1",
    title: "Book Your Estimate",
    description:
      "Fill out the form below or give us a call. We'll schedule a time that works for you — fast and free.",
  },
  {
    number: "2",
    title: "On-Site Walkthrough",
    description:
      "We come to your property, assess the project, and give you a clear, honest quote with no surprises.",
  },
  {
    number: "3",
    title: "We Get to Work",
    description:
      "Our crew shows up on schedule, works efficiently, and keeps your property clean throughout the job.",
  },
  {
    number: "4",
    title: "You Love Your Yard",
    description:
      "We don't leave until you're satisfied. Your property looks great and we stand behind our work.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-4xl font-extrabold mt-2 mb-4">From Call to Complete</h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            Getting your yard transformed is simple. Here&apos;s what to expect when you work with us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-stone-700 -translate-x-4 z-0" />
              )}

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-stone-900 font-extrabold text-2xl mx-auto mb-5 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
          >
            📅 Start Step 1 — Book Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
