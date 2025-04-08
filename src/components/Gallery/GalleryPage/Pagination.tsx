import React from "react";

const Pagination: React.FC = () => {
  return (
    <div className="flex gap-1 justify-center items-center w-full">
      <button
        className="flex gap-1 justify-center items-center px-3 h-14 rounded-xl w-[140px]"
        aria-label="Previous page"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px] flex-shrink-0"
        >
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="#333333"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="text-lg font-semibold text-center text-zinc-800 text-opacity-50">
          Previous
        </span>
      </button>
      <button
        className="flex gap-1 justify-center items-center px-3 h-14 rounded-xl w-[140px]"
        aria-label="Next page"
      >
        <span className="text-lg font-semibold text-center text-zinc-800 text-opacity-50">
          Next
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px] flex-shrink-0"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="#333333"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
