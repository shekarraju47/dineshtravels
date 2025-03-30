import React from "react";
import ContactForm from "./ContactForm";

const ContactPage: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,900;1,900&family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <div id="Home" className="flex gap-32 justify-center items-center px-20 py-0 mx-auto my-0 w-full max-w-screen-xl min-h-[864px] max-md:flex-col max-md:gap-16 max-md:p-10 max-sm:gap-10 max-sm:p-5">
        <div className="flex flex-col flex-1 gap-4 justify-center items-center pl-6 max-md:text-center max-md:pl-0">
          <h1 className="w-full text-6xl italic font-black tracking-tight leading-[64.8px] text-zinc-800 max-md:text-5xl max-sm:text-3xl">
            Get in Touch
          </h1>
          <p className="px-1 py-0 w-full text-2xl leading-9 text-zinc-800 text-opacity-60 max-md:text-xl max-sm:text-lg">
            Your journey, our priority—let's talk!
          </p>
        </div>
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default ContactPage;
