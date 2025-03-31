import React from "react";
// import Header from "./Header";
import Hero from "./Hero";
import Navbar from "../../Navbar";
import { CommitmentSection } from "../CommitmentSection/CommitmentSection";
import ServicesSection from "../../ServicesSection";
import ContactPage from "../../ContactForm/ContactPage";
import Footer from "../../Footer/Footer";


const DineshTravels: React.FC = () => {

  const page = "about"
  const heroTitle = (
    <>
      <span className="font-bold">Where </span>
      <span className="font-bold text-sky-600">Comfort</span>
      <span className="font-bold">, </span>
      <span className="font-bold text-green-400">Safety</span>
      <span className="font-bold">, and </span>
      <span className="font-bold text-orange-500">Memories</span> <br />
      <span className="font-bold">Meet the Road.</span>
    </>
  );

  const heroDescription =
    "We are Dinesh Travels, your trusted partner in road transportation since 2007. Based in Hyderabad, we specialize in delivering seamless travel experiences—whether it's your daily commute, a weekend getaway. With a commitment to safety, comfort, and innovation, we redefine the way India travels.";

  return (
    <div className="flex flex-col max-md:mt-10 justify-center h-[919px pt-10">
      <div className="p-5">
        <div className="absolute inset-x-0 px-20 top-[40px] max-md:px-10 max-sm:px-5">
          <Navbar />
        </div>
        <Hero
          title={heroTitle}
          description={heroDescription}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/70aeedb357bd49288b0eebacf917c655/b53c85d1cab5280f17ec95be392f52ba41f4f66b?apiKey=70aeedb357bd49288b0eebacf917c655&"
          imageAlt="Dinesh Travels transportation service"
        />
        <CommitmentSection />

      </div>
      <ServicesSection />
      <ContactPage />
      <Footer />
    </div>



  );
};

export default DineshTravels;
