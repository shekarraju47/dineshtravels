import React from "react";

interface StatisticItemProps {
  number: string;
  description: string;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  number,
  description,
}) => {
  return (
    <article className="flex-1 shrink max-sm:text-center self-stretch basis-0">
      <h3 className="max-sm:text-[18px] text-[24px] font-bold leading-[130%] text-[#212121] text-[Montserrat]">
        {number}
      </h3>
      <p className="mt-1 text-lg font-[400] max-sm:text-[15px] leading-[150%] text-[#212121BF] opacity-[75%] text-[Open Sans]">
        {description.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < description.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </article>
  );
};

export default StatisticItem;
