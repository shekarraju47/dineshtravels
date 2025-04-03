import React from "react";

interface RawImgProps {
  image: string;
  altText: string;
  className?: string;
}

export const RawImg: React.FC<RawImgProps> = ({
  image,
  altText,
  className,
}) => {
  return <img src={image} alt={altText} className={className} />;
};
