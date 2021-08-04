import React, { ReactNode } from "react";
import Header from "../../navigation/view/Header";

interface Props {
  children: ReactNode;
}

export default function UIWrapper({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
