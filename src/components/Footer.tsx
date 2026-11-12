export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant/60 text-primary">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20 flex flex-col gap-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <p className="font-headline-lg text-headline-lg tracking-[0.15em] uppercase text-primary font-medium mb-3">
              BAYVIEW DENTAL STUDIO
            </p>
            <p className="font-body-md text-body-md text-secondary max-w-md mb-4">
              Architectural dentistry and thoughtful patient wellness. Restoring natural confidence through biology, light, and understated clinical craft.
            </p>
            <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
              San Francisco, California
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold mb-4">
              Studio Hours &amp; Visit
            </p>
            <ul className="space-y-2 font-body-sm text-body-sm text-secondary">
              <li>2100 Webster St, Suite 400</li>
              <li>San Francisco, CA 94115</li>
              <li className="pt-2">Monday – Friday: 8:00 AM – 6:00 PM</li>
              <li>Saturday: 9:00 AM – 4:00 PM</li>
              <li className="pt-2">
                <a
                  className="text-primary underline underline-offset-2"
                  href="https://maps.google.com/?q=2100+Webster+St,+Suite+400,+San+Francisco,+CA+94115"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open in Google Maps →
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold mb-4">
              Navigation &amp; Care
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a className="text-secondary hover:text-primary transition-colors font-body-sm text-body-sm" href="#clinic-tour">
                Our Clinic
              </a>
              <a className="text-secondary hover:text-primary transition-colors font-body-sm text-body-sm" href="#treatments">
                Treatments
              </a>
              <a className="text-secondary hover:text-primary transition-colors font-body-sm text-body-sm" href="#doctor">
                Meet Dr. Vance
              </a>
              <a className="text-secondary hover:text-primary transition-colors font-body-sm text-body-sm" href="#reviews">
                Patient Reviews
              </a>
              <a className="text-secondary hover:text-primary transition-colors font-body-sm text-body-sm" href="#faq">
                FAQ
              </a>
              <a className="text-secondary hover:text-primary transition-colors font-body-sm text-body-sm" href="tel:+14155550199">
                Direct Phone
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-tertiary-fixed flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-secondary">
          <p>© 2025 Bayview Dental Studio Atelier. Precision restorative aesthetics and clinical architecture. San Francisco, California. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-label-sm font-label-sm uppercase tracking-wider">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Protocol
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Accessibility
            </a>
            <a className="text-primary font-semibold hover:underline" href="#book-call">
              Reserve Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
