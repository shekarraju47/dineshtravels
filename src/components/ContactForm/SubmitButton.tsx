import React from "react";

interface SubmitButtonProps {
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
  return (
    <button
      type="submit"
      className="px-9 py-4 h-14 text-lg font-semibold leading-6 text-white bg-sky-600 rounded-xl w-[180px] max-sm:w-full hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
