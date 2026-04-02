import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesTicker from "@/components/ServicesTicker";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesTicker />
        <About />
        <ServicesGrid />
        <HowItWorks />
        <WhyUs />
        <Reviews />
        <ContactForm />
        <ServiceAreas />
      </main>
      <Footer />
    </>
  );
}
