"use client";

import { useState } from "react";

const serviceOptions = [
  "Rock Spreading",
  "Irrigation Install & Repair",
  "Landscaping",
  "Maintenance",
  "Hardscape",
  "Pavers",
  "Artificial Turf",
  "Junk Removal",
  "Custom Job",
  "Not Sure / Multiple Services",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/trueterrainservices@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-stone-900 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Get Started Today</span>
          <h2 className="text-4xl font-extrabold mt-2 mb-4">Book Your Free Estimate</h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            No pressure, no commitment. Just an honest conversation about your project and what it&apos;ll take to get it done right.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-700 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
            <p className="text-green-200 mb-4">
              We typically respond within a few hours during business hours. We&apos;ll be in touch soon!
            </p>
            <a href="tel:4804178385" className="text-white font-semibold underline">
              Or call us now: (480) 417-8385
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-stone-800 rounded-2xl p-8 border border-stone-700 space-y-5"
          >
            {/* Hidden FormSubmit config fields */}
            <input type="hidden" name="_subject" value="New Estimate Request — True Terrain Services" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-1.5">
                  First Name <span className="text-amber-400">*</span>
                </label>
                <input
                  required
                  name="First Name"
                  type="text"
                  placeholder="John"
                  className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-1.5">
                  Last Name <span className="text-amber-400">*</span>
                </label>
                <input
                  required
                  name="Last Name"
                  type="text"
                  placeholder="Smith"
                  className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-1.5">
                  Phone Number <span className="text-amber-400">*</span>
                </label>
                <input
                  required
                  name="Phone Number"
                  type="tel"
                  placeholder="(480) 555-0000"
                  className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-1.5">
                  Email Address
                </label>
                <input
                  name="Email Address"
                  type="email"
                  placeholder="john@email.com"
                  className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-300 mb-1.5">
                City / Zip Code <span className="text-amber-400">*</span>
              </label>
              <input
                required
                name="City / Zip Code"
                type="text"
                placeholder="Queen Creek, 85142"
                className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-300 mb-1.5">
                Service Needed <span className="text-amber-400">*</span>
              </label>
              <select
                required
                name="Service Needed"
                defaultValue=""
                className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors appearance-none"
              >
                <option value="" disabled>Select a service...</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-300 mb-1.5">
                Project Details <span className="text-stone-500 font-normal">(optional)</span>
              </label>
              <textarea
                name="Project Details"
                rows={4}
                placeholder="Tell us a little about your project — size of area, current condition, what you're envisioning, any questions..."
                className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or call us at (480) 417-8385.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-70 text-stone-900 font-bold text-base py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 disabled:hover:translate-y-0"
            >
              {loading ? "Sending..." : "📅 Request My Free Estimate →"}
            </button>

            <p className="text-center text-stone-500 text-xs">
              We typically respond within a few hours during business hours. You can also reach us directly at{" "}
              <a href="tel:4804178385" className="text-amber-400 hover:text-amber-300">
                (480) 417-8385
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
