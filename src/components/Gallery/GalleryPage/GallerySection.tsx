import React from "react";
import CategoryFilter from "./CategoryFilter";
import ImageGrid from "./ImageGrid";

const GallerySection: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 mt-10 justify-center items-center w-full max-md:gap-16 max-sm:gap-10">
      <div className="flex flex-col gap-5 justify-center items-center w-full">
        <h1 className="text-[56px] font-bold text-center leading-[120%] max-sm:text-[24px]">
          <span className="text-zinc-800 text-opacity-90">
            More Than A Team—
          </span>
          <span className="text-sky-600 text-opacity-90">
            We're A Family On Wheels
          </span>
        </h1>
        <p className="px-16 text-[24px] text-center text-zinc-600 text-opacity-80 max-sm:text-[16px] max-sm:leading-[120%]">
          Take A Closer Look At The Buses And Drivers That Make Every Journey
          Unforgettable.
        </p>
      </div>
      <div className="flex flex-col gap-14 items-start w-full max-md:gap-10 max-sm:gap-8">
        <CategoryFilter />
        <ImageGrid />
      </div>
    </div>
  );
};

export default GallerySection;
