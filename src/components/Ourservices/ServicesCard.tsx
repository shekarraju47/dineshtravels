import React from "react";
import Hero from '../Ourservices/Hero'

const DineshTravels: React.FC = () => {
  const menuItems = ["Home", "About us", "Our Services", "Gallery"];
  const heroProps = {
    title: "Reliable Services,Trusted by Leading Clients",
    subtitle:
      "Serving top businesses & travelers with safety, efficiency, and excellence",
    description:
      "At Dinesh Travels, we go beyond transportation—we create seamless travel experiences tailored to your needs. Whether it's a small gathering or a large event, our focus on quality, safety, and efficiency ensures a smooth journey. Our well-maintained fleet caters to diverse travel requirements, while our trained drivers prioritize safety and customer service. With competitive pricing, 24/7 support, and customized travel solutions, we're here to make every trip hassle-free. Get in touch for the best quote today!",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/004f172c5633b04d2598852ed2713dd7f0b1d31d",
    imageAlt: "Fleet of Dinesh Travels buses",
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col bg-white min-h-[screen]">
        <main className="flex flex-col gap-20 items-start px-20 py-16 max-md:gap-16 max-md:p-10 max-sm:gap-10 max-sm:p-5">
          {/* <Header title="DineshTravels!" menuItems={menuItems} /> */}
          <Hero {...heroProps} />
        </main>
      </div>
    </>
  );
};

export default DineshTravels;
