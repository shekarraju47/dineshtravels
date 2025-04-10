import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="flex items-center bg-stone-50 min-md:gap-12 max-md:flex-col p-20 max-md:px-5">
      <div className="flex-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2a00ebb5cd2877654759e24f12e327a6602405"
          alt="Experience Travel"
          className="w-[100vw] h-[590px] max-sm:h-[350px] rounded-[20px] object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 mt-4 gap-8">
        <div className="flex flex-col max-sm:text-center max-sm:gap-1 gap-5">
          <h2 className="text-[48px] font-bold text-[#333333] leading-[120%] mb-2 text-[Montserrat] max-md:text-4xl max-sm:text-[24px]">
            Experience Travel, The Dinesh Way
          </h2>
          <p className="text-2xl leading-10 text-[#5C5C5CCC] font-[400] max-sm:opacity-[80%] max-md:text-xl max-sm:text-lg">
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
