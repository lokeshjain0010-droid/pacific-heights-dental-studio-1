export default function Treatments() {
  const treatments = [
    {
      num: "01",
      icon: "healing",
      title: "Toothache & Emergency Relief",
      desc: "Sudden pain, swelling, or a broken tooth? We get you in the same day to numb the pain and fix the problem fast.",
    },
    {
      num: "02",
      icon: "clean_hands",
      title: "Gentle Cleanings & Exams",
      desc: "Thorough, painless plaque removal and digital checkups to keep your gums healthy and catch small issues early.",
    },
    {
      num: "03",
      icon: "view_in_ar",
      title: "Natural Fillings & Crowns",
      desc: "Repair cavities or cracked teeth with strong biocompatible porcelain that matches the exact shade of your natural smile.",
    },
    {
      num: "04",
      icon: "dentistry",
      title: "Permanent Dental Implants",
      desc: "Replace missing teeth with permanent restorations that look, feel, and chew just like real teeth for lifetime stability.",
    },
    {
      num: "05",
      icon: "auto_fix_high",
      title: "Clear Aligners (Invisalign®)",
      desc: "Straighten crooked or gappy teeth comfortably using clear, removable trays with zero metal brackets or painful wires.",
    },
    {
      num: "06",
      icon: "wb_sunny",
      title: "Professional Whitening",
      desc: "Safely lift years of coffee, tea, and wine stains in a single 45-minute studio visit with zero sensitivity formulation.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-surface" id="treatments">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-label-md font-label-md text-primary tracking-widest uppercase mb-2">
              Restorative &amp; Preventive Care
            </p>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary">
              How We Take Care of Your Smile.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md">
            Direct, transparent clinical care without jargon or aggressive treatment plans. Every procedure is customized to your biology and goals.
          </p>
        </div>

        {/* 6 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((t) => (
            <div
              key={t.num}
              className="bg-surface-container-lowest p-8 rounded-xl border border-tertiary-fixed flex flex-col justify-between hover:border-primary/40 transition-all duration-300 hover:shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-tertiary-fixed">
                  <span className="font-headline-md text-headline-md text-primary/40">
                    {t.num}
                  </span>
                  <span className="material-symbols-outlined text-primary text-xl">
                    {t.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">
                  {t.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-6">
                  {t.desc}
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 text-label-md font-label-md uppercase tracking-wider text-primary group-hover:underline cursor-pointer"
                href="#book-call"
              >
                <span>Schedule a Call</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
