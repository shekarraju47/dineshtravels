import React from "react";
import { FeatureCard, FeatureCardProps } from "./FeatureCard";

const features: FeatureCardProps[] = [
  {
    title: "Designed for Your Everyday Comfort",
    description:
      "Whether it's a quick city commute or a long journey, Dinesh Travels ensures a stress-free ride. Our spacious seating, well-maintained buses, and smooth driving make every trip a breeze—so you can sit back and enjoy the journey.",
    subtitle: "Comfortable, Reliable & Stress-Free Travel",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/70aeedb357bd49288b0eebacf917c655/2c62701b76b5858ffed22b7cedfc710f3d900dbc?apiKey=70aeedb357bd49288b0eebacf917c655&",
    imageAlt: "Comfortable bus interior",
    bulletPoints: [
      "Well-Maintained Vehicles for a Smooth Ride",
      "Comfortable Seating with Ample Legroom",
      "Peaceful Travel Experience with Minimal Disturbances",
    ],
  },
  {
    title: "Punctuality You Can Count On",
    description:
      "Time is precious, and we respect every second of yours. With real-time tracking and a commitment to precision, we ensure you arrive on time, every time—without the stress.",
    subtitle: "Always On-Time",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/70aeedb357bd49288b0eebacf917c655/0cd3f59a1cd02b3324c6b0d92c43e2819aa618cd?apiKey=70aeedb357bd49288b0eebacf917c655&",
    imageAlt: "Bus arriving on time",
    bulletPoints: [
      "Real-Time GPS Tracking",
      "Zero Delays, Always On Schedule",
      "Professional Chauffeurs Who Value Your Time",
    ],
  },
  {
    title: "Support That Never Sleeps",
    description:
      "Travel should be worry-free, and so should your experience with us. Whether it's day or night, our dedicated support team is always just a call away, ensuring smooth rides and instant assistance.",
    subtitle: "Always Available, Always Reliable",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/70aeedb357bd49288b0eebacf917c655/1b7139e89dfdb2d38d27f03723747e0f49cd6ddd?apiKey=70aeedb357bd49288b0eebacf917c655&",
    imageAlt: "24/7 customer support",
    bulletPoints: [
      "24/7 Instant Customer Assistance",
      "Quick Issue Resolution & Hassle-Free Service",
      "A Dedicated Team That Cares About You",
    ],
  },
];

export const CommitmentSection: React.FC = () => {
  return (
    <section style={{ padding: 0 }} className="flex flex-col px-32 py-28 bg-zinc-50 bg-opacity-80 max-md:px-5 max-md:pt-24">
      <div className="flex flex-col w-full text-center max-md:max-w-full">
        <h1 className="text-5xl font-bold leading-tight text-zinc-800 max-md:max-w-full max-md:text-4xl max-sm:text-xl pt-2" >
          Our Commitment to You
        </h1>
        <p className="flex-1 shrink self-stretch px-20 mt-3.5 w-full text-2xl leading-8 max-sm:leading-5 max-sm:text-sm basis-0 text-zinc-600 max-md:px-5 max-md:max-w-full">
          Every journey with Dinesh Travels is built on reliability, comfort,
          and a seamless travel experience. Here's what defines our service
        </p>
      </div>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} isReversed={index % 2 !== 0} />
      ))}
    </section>
  );
};
