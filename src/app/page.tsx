import Image from "next/image";
import Navbar from "./components/Navbar";

import HeroSection from "./components/heroSection";
import ServicesSection from "./components/ServicesSection";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      {/* Other sections can go here */}
    </>
  );
}
