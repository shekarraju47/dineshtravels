import React from "react";

interface HeaderProps {
    title: string;
    navItems: string[];
}


const Header: React.FC<HeaderProps> = ({ title, navItems }) => {
    return (
        <header className="flex flex-wrap gap-10 justify-between self-center w-full font-semibold max-w-[1199px] min-h-[106px] max-md:max-w-full">
            <h1 className="gap-2.5 self-stretch h-full text-3xl font-bold whitespace-nowrap text-zinc-800">
                {title}
            </h1>
            <nav className="flex flex-wrap gap-10 justify-center items-center h-full text-xl text-center min-w-[240px] text-zinc-800 max-md:max-w-full">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="self-stretch my-auto"
                    >
                        {item}
                    </a>
                ))}
            </nav>
            <button className="overflow-hidden px-9 py-4 my-auto text-lg leading-none text-center text-white bg-sky-600 rounded-xl w-[180px] max-md:px-5">
                Get in touch
            </button>
        </header>
    );
};

export default Header;
