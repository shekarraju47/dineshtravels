import React from "react";
import { NavigationArrow } from "./NavigationArrow";

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
        <img src={image} alt="" className="w-[576px] h-full max-sm:rounded-[20px]  rounded-[50px] object-cover" />
      </div>
      <div className="flex flex-col flex-1 gap-12 justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <blockquote className="text-[32px] text-center leading-[180%] text-zinc-800 text-opacity-90 max-sm:text-[20px]">
            "{quote}"
          </blockquote>
          <p className="px-3 w-full text-lg font-bold leading-7 text-end text-zinc-800 text-opacity-90 max-md:text-base max-sm:text-[16px]">
            — {author}
          </p>
          <div className="flex gap-[24px] mt-8 items-center">
            <NavigationArrow direction="left" />
            <NavigationArrow direction="right" />
          </div>
        </div>
      </div>
      <br />

    </>
  );
};
