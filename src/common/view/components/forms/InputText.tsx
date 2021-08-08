import React from "react";
import cn from "classnames";

interface Props {
  value: string;
  type: "text" | "email" | "password";
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  label?: string;
  name?: string;
  error?: string;
  placeholder?: string;
}

export default function InputText({
  label,
  error,
  type = "text",
  ...props
}: Props) {
  return (
    <label className="block pb-4">
      {label && <span className="text-gray-700">{label}</span>}
      <input
        type={type}
        onBlur
        className={cn(
          "mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black",
          error && "border-danger"
        )}
        {...props}
      />
      {error && (
        <span className="block text-danger text-xs pt-1 text-right">
          {error}
        </span>
      )}
    </label>
  );
}
