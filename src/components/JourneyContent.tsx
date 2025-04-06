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
    <article className="flex-1 shrink self-stretch my-auto basis-40 max-md:max-w-full">
      <div className="w-full max-sm:text-center max-md:max-w-full">
        <h2 className="text-5xl font-bold leading-[58px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Driven by Trust, <br />
          Powered by Service
        </h2>
        <p className="flex-1 shrink self-stretch w-full max-md:text-xl max-sm:leading-[2] max-sm:text-lg leading-10 basis-0 text-zinc-600 max-md:max-w-full">
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
