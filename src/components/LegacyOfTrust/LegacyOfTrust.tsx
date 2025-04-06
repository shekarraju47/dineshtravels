import React from "react";
import { Testimonial, TestimonialProps } from "./Testimonial";

const testimonials: TestimonialProps[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9fcc3cb9e7b43b3888f70d0b3c34a0757434f9c0",
    quote:
      "Trust is the foundation of great service. We are committed to delivering reliable transport experiences every time.",
    author: "Dinesh Travels Founder",
  },


];

const LegacyOfTrust: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-10 w-full bg-white max-md:px-16 max-sm:px-5 max-sm:py-16">
      <div className="flex flex-col max-sm:text-center gap-5 justify-center items-center w-full">
        <h1 className="text-[48px] font-bold max-sm:leading-[130%] text-center leading-[57.6px] text-zinc-800 max-md:text-4xl max-sm:text-[24px]">
          "A Legacy of Trust &amp; Excellence"
        </h1>
        <p className="flex-1 px-12 w-full text-[24px] leading-[180%]text-center text-zinc-600 text-opacity-80 max-md:text-xl max-sm:px-4 max-sm:text-[16px]">
          The journey of Dinesh Travels is built on passion, commitment, and a
          vision to redefine travel. Here's what our founders have to say!
        </p>
      </div>
      <div className="flex gap-8 justify-center items-center p-10 w-full max-w-[100vw] rounded-[5px] max-md:flex-col max-md:px-8 max-md:py-16 max-sm:px-5 max-sm:py-10">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}

      </div>

    </div>
  );
};

export default LegacyOfTrust;
