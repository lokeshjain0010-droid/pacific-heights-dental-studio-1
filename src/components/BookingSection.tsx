"use client";

import { useState } from "react";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [treatmentConcern, setTreatmentConcern] = useState("Tooth Pain / Emergency");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setPhoneNumber("");
  };

  return (
    <section className="py-20 lg:py-24 bg-surface-container-low border-t border-tertiary-fixed" id="book-call">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="bg-surface-container-lowest rounded-3xl border border-tertiary-fixed overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Split */}
            <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-surface-container-high/40 border-b lg:border-b-0 lg:border-r border-tertiary-fixed">
              <div>
                <p className="text-label-md font-label-md text-primary tracking-widest uppercase mb-3">
                  Concierge Scheduling
                </p>
                <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-4 leading-tight">
                  Have a Question or Ready to Visit? Request a Quick 2-Minute Call.
                </h2>
                <p className="font-body-xl text-body-xl text-secondary mb-8">
                  Leave your name and number, and our front desk coordinator will call you right back to answer your questions or lock in an unhurried time slot.
                </p>
                {/* Clinic Location Quick Snapshot */}
                <div className="space-y-3 pt-6 border-t border-tertiary-fixed text-body-sm text-secondary">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-base">location_on</span>
                    <span>2100 Webster St, Suite 400, San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-base">schedule</span>
                    <span>Monday – Saturday: 8:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6">
                <a
                  className="inline-flex items-center gap-3 bg-surface border border-primary text-primary px-6 py-3.5 rounded-xl font-label-md text-label-md tracking-wider uppercase hover:bg-primary hover:text-surface transition-all duration-200"
                  href="tel:+14155550199"
                >
                  <span className="material-symbols-outlined text-lg">phone_in_talk</span>
                  <span>Or Call Us Now: (415) 555-0199</span>
                </a>
              </div>
            </div>

            {/* Right Form Split */}
            <div className="lg:col-span-6 p-8 md:p-12 lg:p-16">
              {!submitted ? (
                <form className="space-y-6" id="booking-callback-form" onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="block font-label-md text-label-md uppercase tracking-wider text-primary mb-2"
                      htmlFor="full-name"
                    >
                      Your Name
                    </label>
                    <input
                      className="w-full bg-surface border border-tertiary-fixed rounded-lg px-4 py-3.5 text-on-surface placeholder:text-secondary/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md"
                      id="full-name"
                      placeholder="e.g. Eleanor Vance"
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-label-md text-label-md uppercase tracking-wider text-primary mb-2"
                      htmlFor="phone-number"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-surface border border-tertiary-fixed rounded-lg px-4 py-3.5 text-on-surface placeholder:text-secondary/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md"
                      id="phone-number"
                      placeholder="(415) 000-0000"
                      required
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-label-md text-label-md uppercase tracking-wider text-primary mb-2"
                      htmlFor="treatment-concern"
                    >
                      How Can We Help You?
                    </label>
                    <select
                      className="w-full bg-surface border border-tertiary-fixed rounded-lg px-4 py-3.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md"
                      id="treatment-concern"
                      value={treatmentConcern}
                      onChange={(e) => setTreatmentConcern(e.target.value)}
                    >
                      <option value="Tooth Pain / Emergency">Tooth Pain / Emergency Visit</option>
                      <option value="Routine Cleaning">Routine Cleaning &amp; Checkup</option>
                      <option value="Cosmetic or Implants">Cosmetic Dentistry or Implants</option>
                      <option value="Just a Question">I Just Have a Question</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <button
                      className="w-full bg-primary hover:bg-[#1f352c] text-surface font-label-md text-label-md tracking-widest uppercase py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer border-none"
                      type="submit"
                    >
                      <span>Request My Call Back</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                    <p className="text-center font-body-sm text-body-sm text-secondary mt-3">
                      No spam. We will only call you directly to assist your scheduling.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 px-6" id="booking-feedback">
                  <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-3xl">check</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    Request Received
                  </h3>
                  <p className="font-body-md text-body-md text-secondary max-w-sm mx-auto mb-6">
                    Thank you, {fullName || "valued patient"}! Our care coordinator will call you back at {phoneNumber || "your number"} within 15 minutes.
                  </p>
                  <button
                    className="text-label-md font-label-md text-primary uppercase tracking-wider underline underline-offset-4 bg-transparent border-none cursor-pointer"
                    onClick={handleReset}
                  >
                    Send another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
