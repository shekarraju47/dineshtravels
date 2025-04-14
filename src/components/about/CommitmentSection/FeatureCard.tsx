import React from "react";

export interface FeatureCardProps {
  title: string;
  description: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  bulletPoints: string[];
  isReversed?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  subtitle,
  imageSrc,
  imageAlt,
  bulletPoints,
  isReversed = false,
}) => {
  const contentOrder = isReversed ? "order-2" : "order-1";
  const imageOrder = isReversed ? "order-1" : "order-2";

  return (
    <div className="flex flex-wrap gap-0.5 justify-center items-center p-8 max-md:p-5 mt-10 w-full bg-white rounded-xl border border-solid border-neutral-200 shadow-[0px_2px_8px_rgba(0,0,0,0.1)] max-md:max-w-full">
      <div
        className={`flex flex-col flex-1 gap-4 shrink self-stretch py-8 my-auto min-md:p-5 basis-40 min-w-[240px] max-md:max-w-full ${contentOrder}`}
      >
        <div className="flex flex-col min-md:text-left w-full max-md:max-w-full">
          <div className="max-sm:leading-[120%] max-sm:text-[14px] leading-[120%] text-[16px] text-zinc-600 max-md:max-w-full">
            {subtitle}
          </div>
          <div className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
            <h2 className="text-[40px] font-bold leading-[120%] max-sm:leading-[160%] max-sm:font-bold text-zinc-800 max-sm:text-[20px]  max-md:max-w-full">
              {title}
            </h2>
            <p className="mt-3 text-xl leading-8 max-sm:leading-[160%] max-sm:text-[16px] max-sm:leading-6 text-zinc-600 max-md:max-w-full">
              {description}
            </p>
          </div>
        </div>
        <ul className="flex flex-col w-full text-[18px] max-sm:text-[16px] text-neutral-600 max-md:max-w-full">
          {bulletPoints.map((point, index) => (
            <li
              key={index}
              className="flex flex-wrap gap-2 text-start my-auto w-full max-md:max-w-full"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/70aeedb357bd49288b0eebacf917c655/63b8e6edc13acacf7a939592a47a5a20b8b85197?apiKey=70aeedb357bd49288b0eebacf917c655&"
                className="object-contain shrink-0 self-stretch w-6 aspect-square"
                alt=""
              />
              <span className="flex-1 max-sm:text[16px] shrink self-stretch my-auto basis-0 max-md:max-w-full">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex flex-col flex-1 shrink items-start self-stretch px-0 my-auto basis-0 min-w-[240px] max-md:px-0 ${imageOrder}`}
      >
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="w-[1080px] h-auto min-md:h-[426px] min-md:w-full min-md:object-cover rounded-xl mt-5"
        />
      </div>
    </div>
  );
};
