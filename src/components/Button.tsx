import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="overflow-hidden self-center px-9 py-4 mt-12 max-w-full text-lg font-semibold leading-none text-center text-white bg-orange-500 rounded-xl w-[180px] max-md:px-5 max-md:mt-10"
    >
      {label}
    </button>
  );
};

export default Button;
