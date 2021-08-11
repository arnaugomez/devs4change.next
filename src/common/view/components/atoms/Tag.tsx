import React from "react";
import cn from "classnames";

interface Props {
  text: string;
  tagStyle?: "danger" | "success" | "info" | "brand" | "cta";
}

const tagStylesMap: Record<Props["tagStyle"], string> = {
  info: "text-info-900 border-info-700 bg-info-200",
  danger: "",
  success: "",
  brand: "text-brand-900 border-brand-700 bg-brand-200",
  cta: "text-cta-800 border-cta-600 bg-cta-200",
};

export default function Tag({ text, tagStyle = "info" }: Props) {
  return (
    <div
      className={cn(
        "block rounded-full border text-xs font-bold px-3 py-1 leading-none max-w-xs truncate",
        tagStylesMap[tagStyle]
      )}
    >
      {text}
    </div>
  );
}
