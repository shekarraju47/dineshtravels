import React from "react";

interface TermsCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ checked, onChange }) => {
  return (
    <div className="flex gap-2 items-center px-0 py-3 w-full">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div className="flex justify-center items-center w-6 h-6">
          <div
            className={`rounded-sm border border-solid ${checked ? "bg-sky-600 border-sky-600" : "border-neutral-300"} h-[19px] w-[19px]`}
          >
            {checked && (
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
        <span className="ml-2 text-sm leading-5 text-zinc-600">
          I accept the Terms &amp; Conditions
        </span>
      </label>
    </div>
  );
};

export default TermsCheckbox;
