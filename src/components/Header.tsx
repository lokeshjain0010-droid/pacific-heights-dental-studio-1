"use client";

import Link from "next/link";

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-surface/80 backdrop-blur-md text-primary docked full-width top-0 sticky z-50 border-b border-outline-variant/40 shadow-xs transition-all duration-300 ease-out">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between h-20 w-full">
        {/* Brand Logo */}
        <Link
          className="font-headline-md text-headline-md tracking-[0.2em] uppercase text-primary font-medium flex items-center gap-2 group cursor-pointer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span>BAYVIEW DENTAL STUDIO</span>
        </Link>

        {/* Smooth Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            className="text-secondary hover:text-primary transition-colors tracking-widest text-label-md uppercase font-label-md cursor-pointer bg-transparent border-none p-0"
            onClick={() => scrollTo("clinic-tour")}
          >
            Our Clinic
          </button>
          <button
            className="text-secondary hover:text-primary transition-colors tracking-widest text-label-md uppercase font-label-md cursor-pointer bg-transparent border-none p-0"
            onClick={() => scrollTo("treatments")}
          >
            Treatments
          </button>
          <button
            className="text-secondary hover:text-primary transition-colors tracking-widest text-label-md uppercase font-label-md cursor-pointer bg-transparent border-none p-0"
            onClick={() => scrollTo("doctor")}
          >
            Meet the Doctor
          </button>
          <button
            className="text-secondary hover:text-primary transition-colors tracking-widest text-label-md uppercase font-label-md cursor-pointer bg-transparent border-none p-0"
            onClick={() => scrollTo("reviews")}
          >
            Patient Stories
          </button>
          <button
            className="text-secondary hover:text-primary transition-colors tracking-widest text-label-md uppercase font-label-md cursor-pointer bg-transparent border-none p-0"
            onClick={() => scrollTo("faq")}
          >
            FAQ
          </button>
        </nav>

        {/* Right Trailing Actions */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <a
            className="hidden sm:inline-flex items-center gap-1.5 text-label-md font-label-md tracking-wider text-secondary hover:text-primary transition-colors py-2 cursor-pointer"
            href="tel:+14155550199"
          >
            <span className="material-symbols-outlined text-base">call</span>
            <span>(415) 555-0199</span>
          </a>
          <button
            className="inline-flex items-center justify-center bg-primary hover:bg-[#1f352c] text-surface font-label-md text-label-md tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs cursor-pointer border-none"
            onClick={() => scrollTo("book-call")}
          >
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
}
