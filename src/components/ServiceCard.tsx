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
      <h3 className="mb-3 text-3xl font-semibold text-center text-zinc-800">
        {title}
      </h3>
      <p className="text-lg text-center text-zinc-600 text-opacity-80">
        {description}
      </p>
    </article>
  );
};

export default ServiceCard;
