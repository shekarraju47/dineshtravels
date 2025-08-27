"use client";
import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, } from "@radix-ui/react-dialog"
import { Menu } from "lucide-react";


const Navbar: React.FC = (props) => {
  const current = useLocation();
  const IsHome = (path: string) => {
    return current.pathname === path;
  }

  const classes = 'text-sm font-semibold max-md:text-[18px] min-xl:text-[20px] text-[#FFFFFF]'

  const [isOpen, setIsOpen] = useState(false);

  const color = IsHome('/') ? '#FFFFFF' : '#333333';


  const NavItems = [{
    id: 1,
    name: 'Home',
    path: '/',
    className: { classes },
    // "text-lg font-semibold"
  },
  {
    id: 2,
    name: 'About us',
    path: '/about',
    className: { classes },
  },
  {
    id: 3,
    name: 'Our Services',
    path: '/services',
    className: { classes },
  },
  {
    id: 4,
    name: 'Gallery',
    path: '/gallery',
    className: { classes },
  }
  ]


  return (
    <motion.nav
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1, }}
      transition={{ duration: 1, blur: 0.5 }}
      style={{ color: '#333333', }} className="flex justify-between items-center h-[106px] max-sm:h-20">
      <NavLink to={NavItems[0].path} className="flex items-center gap-2">
        <div className="flex items-center gap-2 max-sm:gap-1">

          <img className="w-18 max-sm:w-8" src="./DineshTravelsLogo-Picsart-BackgroundRemover.png" alt="" />
          <h1 style={{
            color: `${color}`,

          }} className="text-[24px] max-sm:text-[16px] min-xl:text-[28px] font-[Montserrat] font-bold">DineshTravels!</h1>
        </div>
      </NavLink>

      <div className="flex min-md:gap-3 min-lg:gap-8 min-xl:gap-12 items-center max-md:hidden">
        {NavItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            style={{ color: `${color}` }}
            className={`${current.pathname === item.path ? 'underline font-semibold decoration-lime-600/100 opacity[50%]' : 'no-underline font-semibold opacity-[60%]'} ${item.className} scroll-smooth`}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-6 items-center ">
        <button className="px-9 py-4 text-lg font-[Open Sans] text-white bg-sky-600 rounded-xl  max-sm:hidden">
          <a className="scroll-smooth" href="#Home"> Get in touch</a>
        </button>

        <button className="hidden max-md:block" aria-label="Menu">

          <div className="flex items-center justify-center bg-blurred-500 rounded-[6px] border-none bg-black/20 backdrop-blur-sm shadow-md shadow-black/20">
            <button className="ghost-button" onClick={() => setIsOpen(true)}>
              {!isOpen && <Menu style={{ color: `${color}` }} className="w-6 h-6 border-none " />}
            </button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogContent className="p-3">
                {NavItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    style={{ color: `${color}` }}
                    className={`${current.pathname === item.path ? 'underline decoration-lime-600' : 'no-underline'} ${item.className} flex scroll-smooth gap-2 items-center text-sm font-semibold text-opacity-60`}
                  >
                    {item.name}
                  </NavLink>
                ))}
                {/* <a style={{ color }} className={`text-sm font-semibold text-opacity-60 scroll-smooth`} href="#Home"> Get in touch</a> */}

              </DialogContent>
            </Dialog>
          </div>

        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
