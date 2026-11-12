export default function Reviews() {
  const reviews = [
    {
      stars: "★★★★★",
      tag: "Emergency Visit",
      text: "“I called at 9 AM with terrible tooth pain and they saw me by 11 AM. Completely painless root canal and the nicest staff ever.”",
      name: "Sarah M.",
      location: "Marina District, SF",
      offset: false,
    },
    {
      stars: "★★★★★",
      tag: "General Dental",
      text: "“The clinic looks like a boutique hotel. Zero waiting time and Dr. Vance explained everything without pushing unnecessary work.”",
      name: "David K.",
      location: "Pacific Heights, SF",
      offset: true,
    },
    {
      stars: "★★★★★",
      tag: "Gentle Cleaning",
      text: "“I used to be terrified of needles, but I didn’t even feel the numbing gel here. Best cleaning I’ve ever had in my life.”",
      name: "Emily R.",
      location: "Nob Hill, SF",
      offset: false,
    },
    {
      stars: "★★★★★",
      tag: "Cosmetic Porcelain",
      text: "“Fixed my chipped front tooth in one afternoon. Matches my real teeth 100%. People genuinely cannot tell which one was fixed.”",
      name: "Marcus T.",
      location: "Presidio Heights, SF",
      offset: true,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#141413] text-[#F7F5F0]" id="reviews">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#D4AF37] mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white mb-4">
            Loved by Over 400+ San Francisco Patients.
          </h2>
          <p className="font-body-md text-body-md text-gray-400">
            Real patient experiences from neighbors across Pacific Heights, the Marina, and SoMa.
          </p>
        </div>

        {/* 4 Staggered Ivory Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className={`bg-[#1E1E1D] p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 ${
                r.offset ? "md:translate-y-4" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  <span>{r.stars}</span>
                  <span className="text-xs text-gray-400 ml-2 font-mono">{r.tag}</span>
                </div>
                <p className="font-headline-md text-headline-md text-gray-100 font-normal text-lg leading-relaxed mb-6">
                  {r.text}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-sm">
                <span className="font-semibold text-white">{r.name}</span>
                <span className="text-gray-400">{r.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
