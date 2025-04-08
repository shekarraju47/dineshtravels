import React from "react";

interface CategoryButtonProps {
  label: string;
  isActive: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ label, isActive }) => {
  const baseClasses =
    "h-9 w-[84px] max-sm:w-[50px]  text-[14px] max-sm:text-[12px] font-semibold text-center rounded-md ";
  const activeClasses = "bg-sky-600 text-white text-opacity-90";
  const inactiveClasses = "bg-white text-zinc-800 text-opacity-90";

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};

const CategoryFilter: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:gap-5">
      <div className="text-lg underline text-zinc-800">Categories </div>
      <div className="flex gap-5 items-center max-sm:flex-wrap max-sm:justify-center">
        <CategoryButton label="All" isActive={true} />
        <CategoryButton label="Buses" isActive={false} />
        <CategoryButton label="Staff" isActive={false} />
        <CategoryButton label="Office" isActive={false} />
      </div>
    </div>
  );
};

export default CategoryFilter;
