import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClinicTour from "@/components/ClinicTour";
import Treatments from "@/components/Treatments";
import Doctor from "@/components/Doctor";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClinicTour />
        <Treatments />
        <Doctor />
        <Reviews />
        <FAQ />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
