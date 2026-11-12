import Image from "next/image";

export default function ClinicTour() {
  return (
    <section className="py-20 lg:py-24 bg-surface-container-low border-y border-tertiary-fixed" id="clinic-tour">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-2xl mb-12">
          <p className="text-label-md font-label-md text-primary tracking-widest uppercase mb-2">
            Private Sanctuary
          </p>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-3">
            Step Inside Our San Francisco Studio.
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Designed to feel like a calm residential lounge, not a cold hospital. Every detail serves your peace of mind.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Bento 1: Large Featured Card */}
          <div className="md:col-span-7 bg-surface-container-lowest rounded-2xl overflow-hidden border border-tertiary-fixed flex flex-col group shadow-xs transition-all hover:border-outline">
            <div className="relative h-80 md:h-[420px] overflow-hidden">
              <Image
                alt="Wide perspective photograph of a sunlit architectural dental clinic lounge in San Francisco with organic travertine stone textures, fluted wall detailing, soft linen armchairs, olive branch vases, and floor-to-ceiling panoramic glass windows bathed in serene warm daylight."
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="/images/tour-reception.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute top-4 left-4 bg-surface/85 backdrop-blur-md px-3 py-1 rounded-full text-label-sm font-label-sm uppercase text-primary border border-tertiary-fixed z-10">
                01 / Reception Pavilion
              </div>
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  The Sunlit Reception Lounge
                </h3>
                <p className="font-body-md text-body-md text-secondary">
                  Zero waiting room stress. Enjoy artisanal loose-leaf teas, tranquil acoustic zoning, and an unhurried check-in process.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-tertiary-fixed flex items-center justify-between text-label-sm text-secondary font-label-sm uppercase tracking-wider">
                <span>Natural Light • Travertine Stone</span>
                <span className="material-symbols-outlined text-primary text-base">spa</span>
              </div>
            </div>
          </div>

          {/* Bento 2 & 3: Stacked Column */}
          <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* Bento 2: Suite Image */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-tertiary-fixed flex flex-col group shadow-xs transition-all hover:border-outline flex-1">
              <div className="relative h-56 md:h-60 overflow-hidden">
                <Image
                  alt="Private Treatment Suite"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="/images/tour-suite.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4 bg-surface/85 backdrop-blur-md px-3 py-1 rounded-full text-label-sm font-label-sm uppercase text-primary border border-tertiary-fixed z-10">
                  02 / Operatory Suite
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md text-primary text-xl mb-1.5">
                  Private Treatment Suites
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  Equipped with sweeping San Francisco skyline vistas, ceiling relaxation monitors, and ultra-ergonomic memory foam chairs.
                </p>
              </div>
            </div>

            {/* Bento 3: Tech Image */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-tertiary-fixed flex flex-col group shadow-xs transition-all hover:border-outline flex-1">
              <div className="relative h-56 md:h-60 overflow-hidden">
                <Image
                  alt="Modern Gentle Technology"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="/images/tour-lab.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4 bg-surface/85 backdrop-blur-md px-3 py-1 rounded-full text-label-sm font-label-sm uppercase text-primary border border-tertiary-fixed z-10">
                  03 / Diagnostic Lab
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md text-primary text-xl mb-1.5">
                  Modern Gentle Technology
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  Fast 3D intraoral digital impressions. No goopy impression molds, no radiation-heavy film, and completely painless diagnostics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
