import React from "react";
import { RawImg } from "./RawImg";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  imagePosition,
}) => {
  const contentOrder = imagePosition === "left" ? "order-2" : "order-1";
  const imageOrder = imagePosition === "left" ? "order-1" : "order-2";

  return (
    <div className="flex gap-1 justify-center items-center px-12 py-20 bg-white rounded-xl border border-solid shadow-sm border-neutral-200 max-md:flex-col max-md:px-6 max-md:py-10 max-sm:p-6">
      <div
        className={`flex flex-col flex-1 gap-8 justify-center items-start max-md:${contentOrder}`}
      >
        <div className="flex flex-col max-sm:text-center gap-3 w-full">
          <h2 className="text-[44px] font-bold text-[#333333E5] leading-[120%] text-[Montserrat] text-opacity-[90%] max-md:text-4xl max-sm:text-[24px]">
            {title}
          </h2>
          <p className="text-[24px] leading-[180%] text-[Open Sans] text-[#5C5C5C99] text-opacity-60 max-md:text-xl max-sm:text-[18px]">
            {description}
          </p>
        </div>
        <ul className="flex flex-col min-sm:ml-5 max-sm:items-center gap-5 w-full">
          {features.map((feature, index) => (
            <li
              key={index}
              className="text-[20px] list-disc leading-[160%] text-[Open Sans] text-[#5C5C5CF2] text-opacity-[95%] max-sm:text-[18px] max-sm:leading-[140%]"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex flex-1 justify-center items-center max-md:${imageOrder} max-md:mb-8`}
      >
        <RawImg
          image={imageSrc}
          altText={imageAlt}
          className="w-[1080px] h-[446px] object-cover min-md:h-[576px] min-md:w-full min-md:object-cover rounded-xl mt-5"
        />
      </div>
    </div>
  );
};
