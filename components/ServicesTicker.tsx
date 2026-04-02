const services = [
  { icon: "🪨", name: "Rock Spreading" },
  { icon: "💧", name: "Irrigation Install & Repair" },
  { icon: "🌿", name: "Landscaping" },
  { icon: "✂️", name: "Maintenance" },
  { icon: "🧱", name: "Hardscape" },
  { icon: "⬜", name: "Pavers" },
  { icon: "🌱", name: "Artificial Turf" },
  { icon: "🚛", name: "Junk Removal" },
  { icon: "🔧", name: "Custom Jobs" },
];

export default function ServicesTicker() {
  const doubled = [...services, ...services];

  return (
    <div className="bg-green-700 py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((s, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6">
            <span>{s.icon}</span>
            <span>{s.name}</span>
            <span className="mx-2 text-green-400">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
