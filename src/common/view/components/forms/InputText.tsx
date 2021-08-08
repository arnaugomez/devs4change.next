import React from "react";

interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  name?: string;
  error?: string;
  placeholder?: string;
}

export default function InputText({ label, error, ...props }: Props) {
  return (
    <label className="block">
      {label && <span className="text-gray-700">{label}</span>}
      <input
        type="text"
        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        {...props}
      />
      {error && <span>{error}</span>}
    </label>
  );
}
