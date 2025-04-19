import React from "react";
import { motion, } from "framer-motion";
import { useState } from "react";


interface ImageProps {
  src: string;
  alt: string;
}



const Image: React.FC<ImageProps> = ({ src, alt }) => {

  const [selectedImage, setSelectedImage] = useState(false);


  const SelectImg = (src: string) => {
    setSelectedImage(true);
    document.body.style.overflow = "hidden";
    const zoomImage = document.createElement("div");
    zoomImage.style.position = "fixed";
    zoomImage.style.top = "0";
    zoomImage.style.left = "0";
    zoomImage.style.width = "100vw";
    zoomImage.style.height = "100vh";
    zoomImage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    zoomImage.style.display = "flex";
    zoomImage.style.justifyContent = "center";
    zoomImage.style.alignItems = "center";
    zoomImage.style.zIndex = "1000";

    const imgElement = document.createElement("img");
    imgElement.src = src;
    imgElement.style.maxWidth = "90%";
    imgElement.style.maxHeight = "90%";
    imgElement.style.borderRadius = "10px";

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.position = "absolute";
    closeButton.style.top = "20px";
    closeButton.style.right = "20px";
    closeButton.style.padding = "10px 20px";
    closeButton.style.backgroundColor = "#fff";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "16px";

    closeButton.addEventListener("click", () => {
      document.body.removeChild(zoomImage);
      document.body.style.overflow = "auto";
      setSelectedImage(false);
    });

    zoomImage.appendChild(imgElement);
    zoomImage.appendChild(closeButton);
    document.body.appendChild(zoomImage);
    console.log("Selected image source:", src);
  }

  return <motion.img onClick={() => SelectImg(src)}
    whileHover={{ y: -10, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
    src={src} alt={alt} className="w-full h-auto object-cover" />;
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
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="grid grid-cols-3 gap-9 w-full max-md:grid-cols-2 max-sm:grid-cols-1">
      {images.map((image, index) => (
        <Image key={index} src={image.src} alt={image.alt} />
      ))}
    </motion.div>
  );
};

export default ImageGrid;
