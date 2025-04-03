import React from "react";

export interface TestimonialProps {
  image: string;
  quote: string;
  author: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  image,
  quote,
  author,
}) => {
  return (
    <>
      <div className="flex flex-1 items-center h-[505px] max-md:h-[400px] max-sm:h-[300px]">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col flex-1 gap-12 justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <blockquote className="text-3xl text-center leading-[57.6px] text-zinc-800 text-opacity-90 max-md:text-3xl max-sm:text-2xl">
            "{quote}"
          </blockquote>
          <p className="px-3 w-full text-lg font-bold leading-7 text-right text-zinc-800 text-opacity-90 max-md:text-base">
            — {author}
          </p>
        </div>
      </div>
      
    </>
  );
};
