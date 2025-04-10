import React from "react";
import CompanyLogos from "./CompanyLogos";

interface TrustedBySectionProps {
  title: string;
}

const TrustedBySection: React.FC<TrustedBySectionProps> = ({ title }) => {
  return (
    <section className="flex flex-col justify-center max-sm:p-5 max-md:p-10 p-20 text-5xl font-bold tracking-tight leading-tight text-center text-zinc-800 max-md:text-4xl">
      <h2 className="text-[Montserrat] mb-6 text-[48px] max-sm:text-[24px] tracking-[-1%]">{title}</h2>
      <CompanyLogos />
    </section>
  );
};

export default TrustedBySection;
