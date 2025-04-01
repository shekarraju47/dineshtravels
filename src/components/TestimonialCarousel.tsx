"use client";
import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import NavigationArrow from "./NavigationArrow";

// Sample testimonial data
const testimonials = [
  {
    quote:
      "Dinesh Travels has been our trusted partner for corporate transportation. Their punctuality and professionalism are unmatched!",
    author: "Vikram Shah",
    position: "Operations Head at Nexa Industries",
    image: "https://placehold.co/64x64/888/888",
  },
  {
    quote:
      "The fleet quality and driver expertise at Dinesh Travels exceeded our expectations. Highly recommended for business travel!",
    author: "Priya Mehta",
    position: "HR Director at GlobalTech Solutions",
    image: "https://placehold.co/64x64/888/888",
  },
  {
    quote:
      "We've been using Dinesh Travels for our executive transportation needs for over 5 years. Their service is consistently excellent.",
    author: "Rajesh Kumar",
    position: "CEO at Innovate Systems",
    image: "https://placehold.co/64x64/888/888",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <>
      <div
        className="flex gap-16 justify-center items-center w-full max-sm:gap-5"
        role="region"
        aria-label="Testimonial Carousel"
      >

        <button className="max-md:hidden" onClick={handlePrevious} aria-label="Previous testimonial">
          <NavigationArrow direction="left" active={true} />
        </button>

        <TestimonialCard testimonial={testimonials[currentIndex]} />

        <button className="max-md:hidden" onClick={handleNext} aria-label="Next testimonial">
          <NavigationArrow direction="right" active={true} />
        </button>

      </div>
      <div className="flex gap-4 justify-center items-center px-3 py-6 w-full max-sm:gap-50">
        <button className="hidden max-md:block" onClick={handlePrevious} aria-label="Previous testimonial">
          <NavigationArrow direction="left" active={true} />
        </button>
        <button className="hidden max-md:block" onClick={handleNext} aria-label="Next testimonial">
          <NavigationArrow direction="right" active={true} />
        </button>
      </div>
    </>
  );
};

export default TestimonialCarousel;
