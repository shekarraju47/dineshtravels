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
    <article className="flex-1 shrink self-stretch py-2 my-auto basis-0">
      <h3 className="text-2xl font-bold leading-tight text-neutral-800">
        {number}
      </h3>
      <p className="mt-1 text-lg leading-7 text-neutral-800">
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
