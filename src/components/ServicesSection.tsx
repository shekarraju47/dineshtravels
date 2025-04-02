"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection: React.FC = () => {
  const services = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/14bf08cc9e2e774f76737d96d58e16125072ef06",
      title: "Corporate Transit",
      description:
        "Hassle-free, safe, and punctual daily transport for your workforce.",
      altText: "Corporate Transit",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1a673892904b639914bfa7a1c2b19f6737bc3585",
      title: "Bus & Car Rentals",
      description:
        "Flexible and affordable rental solutions for all your travel needs.",
      altText: "Bus & Car Rentals",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d2a9ededdc8cb60b5cb139d5eef15fab131540ac",
      title: "Tour Packages",
      description:
        "Customizable trips designed for comfort, adventure, and unforgettable experiences.",
      altText: "Tour Packages",
    },
  ];

  return (
    <section className="p-20 max-md:px-5">
      <header className="flex flex-col min-md:gap-5 items-center mb-12">
        <h2 className="text-5xl font-bold text-center text-zinc-800 max-md:text-4xl max-sm:text-3xl">
          Our Services
        </h2>
        <p className="text-2xl max-sm:p-2 leading-9 text-center max-w-[800px] text-zinc-600 text-opacity-80 max-md:text-xl max-sm:text-lg">
          At Dinesh Travels, we provide secure and efficient transport for
          business professionals. Our curated tour packages offer unforgettable
          experiences for both leisure and corporate retreats.
        </p>
      </header>

      <div className="flex gap-9 mb-[3px] max-md:flex-col">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imageUrl={service.imageUrl}
            title={service.title}
            description={service.description}
            altText={service.altText}
          />
        ))}
      </div>

      <div className="flex gap-6 justify-center mt-12 max-sm:flex-col">
        <button className="px-10 py-4 text-lg font-semibold text-white bg-sky-600 rounded-xl w-[180px] max-sm:w-full">
          Learn More
        </button>
        <button className="flex gap-2 justify-center items-center w-40 text-lg text-zinc-800 text-opacity-50 max-sm:w-full">
          <span>Contact us</span>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="I57:1975;184:915" layer-name="chevron-right" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M8 15.7187L13 10.7187L8 5.71875" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
