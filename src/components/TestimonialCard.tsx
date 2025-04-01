import React from "react";

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    author: string;
    position: string;
    image: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <article className="flex flex-col flex-1 items-center">
      <blockquote className="w-full max-md:text-xl max-sm:text-l  text-center max-md:leading-[30px] leading-[48.64px] text-zinc-800 text-opacity-90 max-md:text-3xl max-sm:text-xl">
        &quot;{testimonial.quote}&quot;
      </blockquote>
      <figure className="flex flex-col gap-3 items-center py-5">
        <img
          src={testimonial.image}
          alt={`${testimonial.author} profile`}
          className="w-[94px] h-[94px] rounded-full max-md:w-[100px] max-md:h-[100px]"
        />
        <figcaption className="text-xl text-[#5C5C5CE6]">
          {testimonial.author}
        </figcaption>
        <p className="text-lg text-[#5C5C5CE6]">{testimonial.position}</p>
      </figure>
    </article>
  );
};

export default TestimonialCard;
