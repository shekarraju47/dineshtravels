import * as React from "react";
import { motion } from "motion/react"
import Navbar from "./Navbar";

const HeroSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative w-full max-sm:h-[600px] max-md:h-[600px] max-2xl:h-[678px] h-[919px]">

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/776b7d8aaea88d1c8abf4aa39d3403d7b8b6ca3f"
        alt="Hero background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-40" />
      <div className="fixed bottom-10 right-10 max-sm:bottom-5 max-sm:right-5">
        <a href="https://wa.me/+919912345729" target='_blank'>
          <img className='w-15 max-sm:w-10' src="Whatapp.png" alt="whatapplogo" />
        </a>
      </div>

      <div className="absolute inset-x-0 px-20 top-[40px] max-md:px-5">
        <Navbar />
      </div>

      <div className="absolute top-1/4 pl-20 enter max-md:p-5 max-sm:top-1/3 max-w-screen-md">
        <motion.div
          className="flex flex-col min-md:mt-20 gap-6 mb-12 max-sm:mb-5 ">
          <motion.h2
            initial={{ x: -500, opacity: 0, }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, }}
            className="text-6xl font-[Montserrat] tracking-normal font-bold text-white max-sm:w-80 leading-[120%] max-md:text-5xl max-sm:text-4xl max-sm:leading-none">
            Seamless Travel, Exceptional Service
          </motion.h2>
          <motion.p
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-2xl leading-8 text-[#EEEEEE] text-[Open Sans] opacity-[80%] max-md:text-xl max-sm:text-[16px] max-sm:w-60 max-sm:leading-[138%]">
            Beyond Transport—We Deliver Experiences
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex gap-4 max-sm:flex-col ">
          <button className="px-9  py-4 text-lg touch-cont max-sm:text-sm  font-semibold text-white bg-sky-600 rounded-xl w-[190px] max-sm:w-small">
            <a className="group relative cursor-pointer" href="#Home">
              Get in touch
              <motion.span
                className="absolute left-26 opacity-0 translate-x-[-100%] transition-transform duration-500 group-hover:opacity-[100%] group-hover:translate-x-0">
                &gt;
              </motion.span>

            </a>
          </button>
          <button className="px-4 py-4 max-sm:w-small max-sm:text-sm text-lg rounded-xl border border-white border-opacity-50 text-white text-opacity-80 w-[180px]">
            Learn more
          </button>
        </motion.div>
      </div>

    </motion.div >

  );
};

export default HeroSection;
