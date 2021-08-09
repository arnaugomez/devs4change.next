import React, { ReactNode } from "react";
import Footer from "../../../navigation/view/components/Footer";
import Header from "../../../navigation/view/components/Header";
import Alerts from "./Alerts";

interface Props {
  children: ReactNode;
}

export default function UIWrapper({ children }: Props) {
  return (
    <>
      <Header />
      <Alerts />
      <main>{children}</main>
      <Footer />
    </>
  );
}
