import React from "react";

type HeaderProps = {
  title: string;
  menuItems: string[];
};

const Header: React.FC<HeaderProps> = ({ title, menuItems }) => {
  return (
    <header className="flex justify-between items-center w-full h-[106px] max-sm:h-auto">
      <h1 className="gap-2.5 text-2xl font-bold text-zinc-800">{title}</h1>
      <nav className="flex gap-14 justify-center items-center max-md:gap-8 max-sm:hidden">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className={`text-lg font-semibold text-center ${
              index === 2 ? "text-zinc-800" : "text-zinc-800 text-opacity-50"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
      <button className="hidden max-sm:block" aria-label="Open menu">
        <i className="ti ti-menu-2 text-2xl text-zinc-800" aria-hidden="true" />
      </button>
      <a
        href="#contact"
        className="px-9 py-4 h-14 text-lg font-semibold text-center text-white bg-sky-600 rounded-xl w-[180px] max-sm:h-12"
      >
        Get in touch
      </a>
    </header>
  );
};

export default Header;
