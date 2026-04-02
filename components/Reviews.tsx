const reviews = [
  {
    initials: "MR",
    name: "Mike R.",
    location: "Queen Creek, AZ",
    text: "True Terrain completely transformed our backyard. Rock spreading, new irrigation, and cleaned up all the old debris. Showed up when they said they would and the price was exactly what they quoted. Will definitely use them again.",
  },
  {
    initials: "JL",
    name: "Jennifer L.",
    location: "Gilbert, AZ",
    text: "Had a broken irrigation line that was killing my plants. They came out next day, diagnosed the problem quickly, and fixed it right the first time. Great communication from start to finish.",
  },
  {
    initials: "DT",
    name: "David T.",
    location: "San Tan Valley, AZ",
    text: "Hired them for a full paver patio in the backyard. The crew was professional, efficient, and the finished product looks absolutely stunning. Best money I've spent on my home.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">What Clients Say</span>
          <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-4">
            Real Reviews from Real Neighbors
          </h2>
          <div className="text-2xl">★★★★★</div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-stone-50 rounded-2xl p-7 border border-stone-100 hover:shadow-lg transition-all duration-300">
              {/* Stars */}
              <div className="text-amber-500 text-lg mb-4 tracking-wider">★★★★★</div>

              {/* Quote */}
              <p className="text-stone-600 leading-relaxed mb-6 text-sm italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-stone-900 text-sm">{review.name}</div>
                  <div className="text-stone-400 text-xs">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
