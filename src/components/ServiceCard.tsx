import React from "react";

interface ServiceCardProps {
  imageUrl: string;
  title: string;
  description: string;
  altText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageUrl,
  title,
  description,
  altText,
}) => {
  return (
    <article className="flex-1">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-[546px] max-sm:h-[350px] rounded-[12px] object-cover mb-[12px]"
      />
      <h3 className="mb-3 text-[30px] max-sm:text-[16px] font-[600] text-[Montserrat] text-center text-[#333333]">
        {title}
      </h3>
      <p className="text-[18px] max-sm:text-[14px] leading-[150%] text-center text-[#5C5C5CD9] opacity-[85%]">
        {description}
      </p>
    </article>
  );
};

export default ServiceCard;
