import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function LoginFormCard({ title, children }: Props) {
  return (
    <section className="p-4 w-screen min-h-screen flex items-center justify-center">
      <div className="relative pt-4 w-full max-w-sm">
        <h2 className="absolute w-max-content px-4 max-w-40 text-center font-display font-bold text-2xl inset-x-0 m-auto top-0 bg-white">
          {title}
        </h2>
        <div className="pt-12 pb-8 px-4 border border-black">{children}</div>
      </div>
    </section>
  );
}
