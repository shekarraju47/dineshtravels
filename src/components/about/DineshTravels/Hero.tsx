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
    <section className="flex flex-col justify-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full text-center max-md:max-w-full">
        <h2 className="text-5xl font-semibold leading-[58px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          {title}
        </h2>
        <p className="flex-1 max-sm:text-sm shrink self-stretch px-16 mt-5 w-full text-2xl max-sm:leading-6 leading-10 basis-0 text-zinc-600 max-md:px-5 max-md:max-w-full">
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
