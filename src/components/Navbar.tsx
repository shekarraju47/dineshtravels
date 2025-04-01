"use client";
import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
// import { Button } from '@radix-ui/react-dialog'
import { Dialog, DialogContent, DialogTitle, } from "@radix-ui/react-dialog"
import { Menu } from "lucide-react";


const Navbar: React.FC = (props) => {
  const current = useLocation();
  const IsHome = (path: string) => {
    return current.pathname === path;
  }

  const [isOpen, setIsOpen] = useState(false);

  const color = IsHome('/dineshtravels/') ? 'white' : 'black';

  const NavItems = [{
    id: 1,
    name: 'Home',
    path: '/dineshtravels/',
    className: 'text-lg font-semibold text-white text-opacity-60',
    // "text-lg font-semibold"
  },
  {
    id: 2,
    name: 'About us',
    path: '/dineshtravels/about',
    className: 'text-lg font-semibold text-white text-opacity-60',
  },
    // {
    //   id: 3,
    //   name: 'Our Services',
    //   path: '/dineshtravels/services',
    //   className: 'text-lg font-semibold text-white text-opacity-60',
    // },
    // {
    //   id: 4,
    //   name: 'Gallery',
    //   path: '/dineshtravels/gallery',
    //   className: 'text-lg font-semibold text-white text-opacity-60',
    // }
  ]



  return (
    <nav style={{ color: 'black', }} className="flex justify-between items-center h-[106px] max-sm:h-20">
      <h1 style={{ color: `${color}` }} className="text-2xl font-bold text-white">DineshTravels!</h1>

      <div className="flex min-md:gap-3 min-lg:gap-8 min-xl:gap-12 items-center max-md:hidden">
        {NavItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            style={{ color: `${color}` }}
            className={` ${item.className}`}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-6 items-center ">
        <button className="px-9 py-4 text-lg font-semibold text-white bg-sky-600 rounded-xl  max-sm:hidden">
          <a className="scroll-smooth" href="#Home"> Get in touch</a>
        </button>

        <button className="hidden max-md:block" aria-label="Menu">

          <div className="flex items-center justify-center h-screen">
            <button className="ghost-button" onClick={() => setIsOpen(true)}>
              {!isOpen && <Menu style={{ color: `${color}` }} className="w-6 h-6 border-none" />}
            </button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogContent className="p-5 border-none">
                {NavItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    style={{ color: `${color}` }}
                    className={` ${item.className} flex`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </DialogContent>
            </Dialog>
          </div>

        </button>
      </div>
    </nav>
  );
};

export default Navbar;
