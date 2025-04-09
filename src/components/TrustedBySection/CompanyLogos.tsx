import React from "react";


const clsname = "w-[100%] h-[80px] max-sm:h-[30px] max-md:h-[40px] max-sm:rounded-[1px] min-md:rounded-[20px] object-cover max-sm:p-0 max-md:p-0 p-5"

const imgs = [
  {
    name: 'hetero',
    src: "./hetero.svg",
    alt: "Experience Travel",
    className: clsname,
  },
  {
    name: 'eugia',
    src: "./eugia.png",
    alt: "Experience Travel",
    className: clsname,
  },
  {
    name: 'hyundai',
    src: "./Logo.svg",
    alt: "Experience Travel",
    className: clsname,
  },
  {
    src: "./foxconn.png",
    alt: "Experience Travel",
    className: clsname,
  },


  {
    name: 'infosys',
    src: "./infosys.svg",
    alt: "Experience Travel",
    className: clsname,
  },
  {
    name: 'berkadia',
    src: "./berkadia.svg",
    alt: "Experience Travel",
    className: clsname,
  },
  {
    name: 'amneal',
    src: "./amneal.svg",
    alt: "Experience Travel",
    className: clsname,
  },
  {
    name: 'annora',
    src: "./annora.png",
    alt: "Experience Travel",
    className: clsname,
  }

]



const CompanyLogos: React.FC = () => {
  return (
    <div className="center-content min-md:mt-12">
      <div className="wrapper">
        <div className="marquee-text rotate-left">
          <div className="marquee-text-track">
            {imgs.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={img.className}
              />
            ))}

          </div>
        </div>

      </div>
    </div>

  );
};

export default CompanyLogos;
