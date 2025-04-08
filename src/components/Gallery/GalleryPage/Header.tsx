import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex relative justify-between items-center w-full max-sm:flex-col max-sm:gap-5">
      <div className="gap-2.5 text-2xl font-bold text-zinc-800">
        DineshTravels!
      </div>
      <nav className="flex gap-14 justify-center items-center max-md:gap-8 max-sm:hidden">
        <a
          href="#home"
          className="text-lg font-semibold text-center text-zinc-800 text-opacity-50"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-lg font-semibold text-center text-zinc-800 text-opacity-50"
        >
          About us
        </a>
        <a
          href="#services"
          className="text-lg font-semibold text-center text-zinc-800 text-opacity-50"
        >
          Our Services
        </a>
        <a
          href="#gallery"
          className="text-lg font-semibold text-center text-zinc-800"
        >
          Gallery
        </a>
      </nav>
      <button className="px-9 py-4 h-14 text-lg font-semibold text-center text-white bg-sky-600 rounded-xl w-[180px] max-sm:w-full">
        Get in touch
      </button>
    </div>
  );
};

export default Header;
