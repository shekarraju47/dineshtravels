import React from "react";
import StatisticItem from "./StatisticItem";

const JourneyContent = () => {
  const statistics = [
    {
      number: "1 Million+",
      description: "Happy\nTravelers",
    },
    {
      number: "15+",
      description: "Years of Experience",
    },
    {
      number: "50+",
      description: "Corporate Clients Served",
    },
  ];

  return (
    <article className="flex-1 shrink max-sm:mt-10 self-stretch my-auto basis-40 max-md:max-w-full">
      <div className="w-full max-sm:text-center max-md:max-w-full">
        <h2 className="text-[48px] font-[700] font-[Montserrat] leading-[58px] max-sm:text-[24px] text-[#333333] max-md:max-w-full mb-2 max-sm:leading-[120%]">
          Driven by Trust, <br />
          Powered by Service
        </h2>
        <p className="flex-1 shrink self-stretch w-full text-[24px] max-sm:leading-[2] font-[400] max-sm:text-[18px] leading-10 basis-0 max-sm:opacity-[80%] text-[#5C5C5CCC] max-md:max-w-full">
          At Dinesh Travels, we have been redefining road transportation with a
          commitment to safety, comfort, and reliability. With over a decade of
          experience, we've built a strong reputation in the industry, providing
          seamless corporate travel, customized tour packages, and efficient
          transport solutions. Every journey with us is backed by trust,
          efficiency, and excellence.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 items-center mt-8 w-full max-md:max-w-full">
        {statistics.map((stat, index) => (
          <StatisticItem
            key={index}
            number={stat.number}
            description={stat.description}
          />
        ))}
      </div>
    </article>
  );
};

export default JourneyContent;
