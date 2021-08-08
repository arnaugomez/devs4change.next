import React, { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  onClick?: MouseEventHandler;
  children: ReactNode;
  color?: "brand" | "cta" | "black";
  isLink?: boolean;
}

export default function Button({
  children,
  color = "brand",
  isLink = false,
  ...props
}: ButtonProps) {
  const ButtonTag = isLink ? "a" : "button";

  return (
    <ButtonTag
      className={`px-3.5 py-1.5 rounded bg-white border border-${color} text-${color} hover:bg-${color} hover:text-white`}
      {...props}
    >
      {children}
    </ButtonTag>
  );
}
