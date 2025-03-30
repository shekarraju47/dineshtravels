"use client";
import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const TestimonialSection: React.FC = () => {
  return (
    <section className="scroll-smooth flex flex-col gap-16 items-center px-32 py-20 w-full bg-stone-50 rounded-[32px] max-md:px-20 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <div className="flex flex-col gap-32 items-center w-full max-md:gap-20 max-sm:gap-16">
        <header className="flex justify-center items-center px-72 w-full max-md:px-24 max-sm:px-5">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-5xl text-zinc-800 text-opacity-90 max-md:text-4xl max-sm:text-3xl">
              Hear from Our
            </h2>
            <h1 className="text-6xl font-black tracking-tighter leading-[76.8px] text-zinc-800 text-opacity-90 max-md:text-5xl max-sm:text-4xl">
              Happy Clients
            </h1>
          </div>
        </header>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default TestimonialSection;
