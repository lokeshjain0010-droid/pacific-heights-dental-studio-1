import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-20 lg:pt-10 lg:pb-20 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Top Editorial Header & Floating Trust Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-tertiary-fixed text-primary text-label-sm font-label-sm mb-4">
              <span className="text-[#D4AF37] tracking-tighter">★★★★★</span>
              <span className="tracking-wide">4.9 RATED SAN FRANCISCO DENTAL STUDIO</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-3xl leading-[1.08] tracking-tight">
              Calm, Modern Dentistry Built Around Your Comfort.
            </h1>
          </div>
          <div className="max-w-md pb-2">
            <p className="font-body-xl text-body-xl text-secondary mb-6">
              From sudden tooth pain relief to routine cleanings and natural smile makeovers—experience gentle, unhurried dental care in a warm studio space.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-surface px-6 py-3.5 rounded-lg font-label-md text-label-md tracking-wider uppercase transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs cursor-pointer"
                href="#book-call"
              >
                <span>Book a Quick Call</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a
                className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-surface px-5 py-3.5 rounded-lg font-label-md text-label-md tracking-wider transition-all duration-200 cursor-pointer"
                href="tel:+14155550199"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                <span>(415) 555-0199</span>
              </a>
            </div>
          </div>
        </div>

        {/* Architectural Hero Frame */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-tertiary-fixed h-[460px] md:h-[620px]">
          <Image
            alt="Sunlit architectural dental reception lounge featuring custom fluted oak wood paneling, an authentic raw-edge stone travertine reception desk, elegant curved plaster walls, serene cream boucle sofas, natural potted fiddle-leaf fig tree, and floor-to-ceiling glass windows offering soft indirect daylight in an understated luxury San Francisco aesthetic."
            className="object-cover object-center"
            src="/images/hero.jpg"
            fill
            priority
            sizes="(max-width: 1360px) 100vw, 1360px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Subtle Floating Overlay Inscription */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-surface/90 backdrop-blur-md border border-tertiary-fixed p-4 md:p-6 rounded-2xl max-w-sm z-10">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold mb-1">
              Architecture of Tranquility
            </p>
            <p className="font-body-sm text-body-sm text-secondary">
              Designed by award-winning California architects to neutralize clinical apprehension from the moment you step through our doors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
