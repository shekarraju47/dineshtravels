import React from "react";

interface HeroProps {
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="flex flex-col justify-center px-20 max-md:px-5 mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full text-center max-md:max-w-full">
        <h2 className="max-sm:text-[24px] mt-20 text-4xl min-xl:text-[48px] min-xl:leading-[120%] font-semibold leading-[48px] text-zinc-800 max-md:max-w-full max-sm:leading-[126%]">
          {title}
        </h2>
        <p className="flex-1 shrink self-stretch mt-5 w-full max-sm:text-[18px] max-md:leading-[180%] leading-10 basis-0 text-zinc-600 max-md:px-5 max-md:max-w-full">
          {description}
        </p>
      </div>
      <div className="flex flex-col mt-8 w-full rounded-xl max-md:max-w-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-contain w-full rounded-xl aspect-[3.45] max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
