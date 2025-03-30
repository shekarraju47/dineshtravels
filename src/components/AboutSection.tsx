import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="flex gap-20 items-center  bg-stone-50 max-md:flex-col max-md:px-10 max-sm:px-5">
      <div className="flex-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2a00ebb5cd2877654759e24f12e327a6602405"
          alt="Experience Travel"
          className="w-full h-[590px] rounded-[50px] object-cover max-sm:pl-10 max-sm:pr-10 p-10"
        />
      </div>
      <div className="flex flex-col flex-1 max-sm:gap-2 max-sm:pl-10 max-sm:pr-10  gap-8">
        <div className="flex flex-col max-sm:gap-1 gap-5">
          <h2 className="text-5xl font-bold leading-[57.6px] text-zinc-800 max-md:text-4xl max-sm:text-3xl">
            Experience Travel, The Dinesh Way
          </h2>
          <p className="text-2xl leading-10 text-zinc-600 text-opacity-80 max-md:text-xl max-sm:text-lg">
            Welcome to Dinesh Travels, Hyderabad's trusted road transport
            service since 2007. From corporate travel to family getaways, we
            ensure safe, comfortable, and reliable journeys with our modern
            fleet and commitment to excellence.
          </p>
        </div>
        <button className="px-10 py-4 text-lg font-semibold text-white bg-sky-600 rounded-xl w-[180px] max-sm:w-full">
          Know More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
