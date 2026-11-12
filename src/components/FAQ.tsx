export default function FAQ() {
  const faqs = [
    {
      q: "I have tooth pain right now. Can I come in today?",
      a: "Yes. We keep daily reserved time blocks open specifically for dental emergencies so we can get you out of pain the exact same day you call. Call us directly or request an urgent call below.",
    },
    {
      q: "What if I’m nervous about dental visits?",
      a: "Just let us know on our quick intro call. Dental anxiety is extremely common. We use extra-strength topical numbing gels before any injection, offer noise-canceling headphones with streaming television, and move completely at your pace with hand signals to pause anytime.",
    },
    {
      q: "How do I book my first visit?",
      a: "Simply request a quick call below or call us directly at (415) 555-0199. Our dedicated patient coordinator will answer your questions, explain what to expect, and reserve a convenient morning or afternoon slot.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-surface" id="faq">
      <div className="max-w-[960px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-label-md font-label-md text-primary tracking-widest uppercase mb-2">
            Common Inquiries
          </p>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary">
            Frequently Asked Questions.
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-surface-container-lowest border border-tertiary-fixed rounded-xl overflow-hidden p-6 transition-colors duration-200 open:border-primary/50"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                <span className="font-headline-md text-headline-md text-primary text-xl">
                  {f.q}
                </span>
                <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="pt-4 border-t border-tertiary-fixed/60 mt-4">
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  {f.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
