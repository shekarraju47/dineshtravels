import React from "react";
import Header from "./Header";
import GallerySection from "./GallerySection";
import Pagination from "./Pagination";
import Navbar from "../../Navbar";
import ContactPage from "../../ContactForm/ContactPage";
import Footer from "../../Footer/Footer";
import ServiceCard from "../../ServiceCard";
import AboutSection from "../../AboutSection";
import ServicesSection from "../../ServicesSection";
import TestimonialSection from "../../TestimonialSection";
import TrustedBySection from "../../TrustedBySection/TrustedBySection";

const GalleryPage: React.FC = () => {
  return (
    <>
      <div className="absolute inset-x-0 px-20 top-[40px] max-md:px-5">
        <Navbar />
      </div>

      <div className="flex flex-col items-center mt-20 w-full ">

        <div className="flex flex-col gap-24 justify-center items-center p-20 w-full max-md:gap-16 max-md:px-10 max-sm:gap-10 max-sm:px-5">

          <GallerySection />
          <Pagination />
        </div>
      </div>
      <ServicesSection />
      <AboutSection />
      <TrustedBySection title="Trusted by Industry Leaders" />
      <TestimonialSection />
      <ContactPage />
      <Footer />
    </>
  );
};

export default GalleryPage;
