import Image from "next/image";

export default function Doctor() {
  return (
    <section className="py-20 lg:py-24 bg-[#EFECE6] border-y border-tertiary-fixed" id="doctor">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait Photo Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-tertiary-fixed shadow-md bg-surface h-[520px]">
              <Image
                alt="Editorial portrait photograph of Dr. Julian Vance, an experienced cosmetic and restorative dentist, smiling warmly beside a bright window in an architectural San Francisco dental studio setting."
                className="object-cover object-top"
                src="/images/dr-julian-vance.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-4 rounded-xl border border-tertiary-fixed flex items-center justify-between z-10">
                <div>
                  <p className="font-headline-md text-headline-md text-primary text-base">
                    Dr. Julian Vance, DDS
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">Founder &amp; Lead Clinician</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-primary text-surface text-label-sm font-label-sm uppercase">
                  UCSF Alumni
                </span>
              </div>
            </div>
          </div>

          {/* Right: Story & Perspective */}
          <div className="lg:col-span-7">
            <p className="text-label-md font-label-md text-primary tracking-widest uppercase mb-3">
              YOUR LEAD DENTIST
            </p>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
              Dr. Julian Vance, DDS
            </h2>
            <blockquote className="font-headline-md text-headline-md text-primary font-normal italic leading-relaxed mb-6">
              “Over the past 15 years in San Francisco, I’ve learned that most people don’t actually hate dentistry—they hate feeling rushed, judged, or in pain.”
            </blockquote>
            <p className="font-body-xl text-body-xl text-secondary mb-8 leading-relaxed">
              At Bayview Dental Studio, we take the time to listen first, explain everything in plain English, and make sure you never feel a thing. Whether you need immediate toothache relief or are planning a comprehensive smile restoration, you are always in complete control of your care.
            </p>

            {/* Credentials Bar */}
            <div className="py-5 px-6 rounded-xl bg-surface border border-tertiary-fixed mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-tertiary-fixed">
                <div className="md:pr-4">
                  <p className="font-headline-md text-headline-md text-primary font-semibold text-lg">
                    UCSF School
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">Of Dentistry Alumni</p>
                </div>
                <div className="pt-3 md:pt-0 md:px-4">
                  <p className="font-headline-md text-headline-md text-primary font-semibold text-lg">
                    15+ Years
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">Clinical Practice</p>
                </div>
                <div className="pt-3 md:pt-0 md:pl-4">
                  <p className="font-headline-md text-headline-md text-primary font-semibold text-lg">
                    3,500+
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">Smiles Restored</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                className="inline-flex items-center gap-2 bg-primary hover:bg-[#1f352c] text-surface font-label-md text-label-md uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all cursor-pointer shadow-xs"
                href="#book-call"
              >
                <span>Request a Conversation</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
