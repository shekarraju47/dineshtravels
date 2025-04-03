import React from "react";

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="flex flex-col gap-6 items-start w-full">
      <div className="flex flex-col gap-8 justify-center items-center px-0 py-3 w-full">
        <div className="flex flex-col gap-5 items-start w-full">
          <h2 className="w-full text-6xl font-bold tracking-tight text-center leading-[67.2px] max-md:text-5xl max-sm:text-4xl">
            <span className="text-zinc-800 text-opacity-90">
              {title.split(",")[0]},
            </span>
            <span className="text-sky-600 text-opacity-90">
              {title.split(",")[1]}
            </span>
          </h2>
          <p className="w-full text-2xl leading-8 text-center text-zinc-600 text-opacity-70 max-md:text-xl max-sm:text-lg">
            {subtitle}
          </p>
        </div>
        <p className="flex-1 px-5 py-0 w-full text-2xl tracking-tight leading-10 text-center text-zinc-600 text-opacity-80 max-md:text-xl max-sm:text-base">
          {description}
        </p>
      </div>
      <div className="w-full h-[309px] max-md:h-[250px] max-sm:h-[200px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
