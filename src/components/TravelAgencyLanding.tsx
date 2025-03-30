"use client";
import * as React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import Journey from "./Journey";
import TestimonialSection from "./TestimonialSection";
import ContactPage from "./ContactForm/ContactPage";
import TrustedBySection from "./TrustedBySection/TrustedBySection";
import Footer from "./Footer/Footer";

function TravelAgencyLanding() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="w-full min-w-lg bg-white min-h-[screen]">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TrustedBySection title="Trusted by" />
        <Journey />
        <TestimonialSection />
        <ContactPage />
        <Footer />
      </main>
    </>
  );
}

export default TravelAgencyLanding;
