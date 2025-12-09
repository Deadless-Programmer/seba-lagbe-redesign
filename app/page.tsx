
import HeroSection from "@/components/HeroSection";
import AboutSection from '@/components/AboutSection'
import PackagesSection from "@/components/PackagesSection";
import AdditionalServicesSection from "@/components/AdditionalServicesSection";
import CallToActionSection from "@/components/CallToActionSection";
import WhatWeAreSection from "@/components/WhatWeAreSection";
import SatisfiedClientsSection from "@/components/SatisfiedClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PackagesSection/>
      <AdditionalServicesSection/>
      <CallToActionSection/>
      <WhatWeAreSection/>
      <SatisfiedClientsSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
