import React from "react";
import { ServiceCard } from "./ServiceCard";

const servicesData = [
  {
    title: "Corporate Employee Transportation",
    description:
      "With the rise of IT and manufacturing industries, seamless employee transport is crucial. Dinesh Travels ensures reliable, safe, and punctual mobility for your workforce.",
    features: [
      "Dedicated Corporate Fleet",
      "Punctual Pickups & Drop-offs",
      "Customizable Schedules",
      "Trained & Verified Drivers",
      "Air-Conditioned Comfort",
    ],
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/51202c15415d924473311803ea855e7780f8ccfa",
    imageAlt: "Corporate transportation",
    imagePosition: "right",
  },
  {
    title: "Bus & Car Rentals",
    description:
      "Need a luxury car for business, a minivan for family, or a bus for groups? Dinesh Travels offers a well-maintained, insured fleet at competitive prices.",
    features: [
      "Extensive Fleet Options",
      "Buses for Group Travel",
      "Corporate & Event Rentals",
      "Short-Term & Long-Term Rentals",
      "24/7 Customer Support",
    ],
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ca8a839e2a38f5b119074a464785966371338057",
    imageAlt: "Car rental",
    imagePosition: "left",
  },
  {
    title: "Tour Packages",
    description:
      "Dinesh Travels offers budget-friendly, well-planned holiday packages for families, groups, corporates, and solo travelers. From pilgrimages to adventure trips, we handle the details so you can enjoy the journey.",
    features: [
      "Customized Itineraries",
      "Comfortable Travel",
      "Pilgrimage Tours",
      "Corporate Retreats",
      "Weekend Getaways",
    ],
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6b9d09bbe72805738e218b8ce1b8e13c398608fa",
    imageAlt: "Tour package",
    imagePosition: "right",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-16 items-center px-20 pt-24 pb-20 bg-zinc-50 bg-opacity-80 max-md:px-10 max-md:py-16 max-sm:gap-8 max-sm:px-5 max-sm:py-10">
      <h1 className="text-5xl font-bold tracking-wide text-center leading-[57.6px] text-zinc-800 max-sm:text-4xl">
        Our Services
      </h1>
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          features={service.features}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          imagePosition={service.imagePosition as "left" | "right"}
        />
      ))}
    </section>
  );
};
