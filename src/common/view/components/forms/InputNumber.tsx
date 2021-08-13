import React from "react";
import cn from "classnames";

interface Props {
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  label?: string;
  name?: string;
  error?: string;
  placeholder?: string;
}

export default function InputNumber({ label, error, value, ...props }: Props) {
  return (
    <label className="block flex-1 pb-4">
      {label && <span className="text-gray-700">{label}</span>}
      <input
        type="number"
        className={cn(
          "mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black",
          error && "border-danger"
        )}
        value={value || ""}
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
