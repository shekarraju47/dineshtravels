"use client";
import * as React from "react";

const Navbar: React.FC = (props) => {


  return (
    <nav style={{ color: 'black' }} className="flex justify-between items-center h-[106px] max-sm:h-20">
      <h1 style={{ color: 'black' }} className="text-2xl font-bold text-white">DineshTravels!</h1>

      <div className="flex min-md:gap-3 min-lg:gap-8 min-xl:gap-12 items-center max-md:hidden">
        <a style={{ color: 'black' }} href="#" className="text-lg font-semibold text-white">
          Home
        </a>
        <a style={{ color: 'black' }}
          href="#"
          className="text-lg font-semibold text-white text-opacity-60"
        >
          About us
        </a>
        <a style={{ color: 'black' }}
          href="#"
          className="text-lg font-semibold text-white text-opacity-60"
        >
          Our Services
        </a>
        <a style={{ color: 'black' }}
          href="#"
          className="text-lg font-semibold text-white text-opacity-60"
        >
          Gallery
        </a>
      </div>

      <div className="flex gap-6 items-center">
        <button className="px-9 py-4 text-lg font-semibold text-white bg-sky-600 rounded-xl max-sm:hidden">
          <a className="scroll-smooth" href="#Home"> Get in touch</a>
        </button>

        <button className="hidden max-md:block" aria-label="Menu">
          <a href="#Home">
            {/* <i className="ti ti-menu-2 text-2xl text-white" /> */}
            .
            .
            .
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
