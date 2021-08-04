import React, { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  onClick: MouseEventHandler;
  children: ReactNode;
  color?: "brand" | "cta" | "black";
}

export default function Button({
  children,
  color = "brand",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-3.5 py-1.5 rounded bg-white border border-${color} text-${color} hover:bg-${color} hover:text-white`}
      {...props}
    >
      {children}
    </button>
  );
}
