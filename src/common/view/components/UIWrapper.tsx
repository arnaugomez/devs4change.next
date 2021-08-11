import React, { ReactNode } from "react";
import Footer from "../../../navigation/view/components/Footer";
import Header from "../../../navigation/view/components/Header";
import Alerts from "./Alerts";
import HeaderBackground from "./HeaderBackground";

interface Props {
  children: ReactNode;
}

export default function UIWrapper({ children }: Props) {
  return (
    <>
      <HeaderBackground />
      <Header />
      <Alerts />
      <main>{children}</main>
      <Footer />
    </>
  );
}
