import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-full h-auto object-cover" />;
};

const ImageGrid: React.FC = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b130b2bb7b3794fdc3fbc780da632e371576c1d0",
      alt: "Gallery image 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6769afac7103ef017a18b939e35d7703ba255737",
      alt: "Gallery image 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b130b2bb7b3794fdc3fbc780da632e371576c1d0",
      alt: "Gallery image 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b130b2bb7b3794fdc3fbc780da632e371576c1d0",
      alt: "Gallery image 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b130b2bb7b3794fdc3fbc780da632e371576c1d0",
      alt: "Gallery image 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b130b2bb7b3794fdc3fbc780da632e371576c1d0",
      alt: "Gallery image 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b130b2bb7b3794fdc3fbc780da632e371576c1d0",
      alt: "Gallery image 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b130b2bb7b3794fdc3fbc780da632e371576c1d0",
      alt: "Gallery image 8",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b130b2bb7b3794fdc3fbc780da632e371576c1d0",
      alt: "Gallery image 9",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-9 w-full max-md:grid-cols-2 max-sm:grid-cols-1">
      {images.map((image, index) => (
        <Image key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default ImageGrid;
