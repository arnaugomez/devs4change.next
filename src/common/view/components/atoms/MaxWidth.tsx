import React, { ReactNode } from "react";
import cn from "classnames";

export default function MaxWidth({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-screen-lg mx-auto", className)}>{children}</div>
  );
}
