import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2 justify-end items-start w-full">
      <label
        htmlFor={name}
        className="text-lg leading-6 text-zinc-800 text-opacity-80"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="gap-1 px-3 py-2 w-full h-12 text-xl leading-8 border-b border-solid border-b-neutral-300 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-sky-600 max-sm:h-10 max-sm:text-base"
      />
    </div>
  );
};

export default FormInput;
