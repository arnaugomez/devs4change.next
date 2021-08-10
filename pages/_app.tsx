import React from "react";
import { RecoilRoot } from "recoil";
import UIWrapper from "../src/common/view/components/UIWrapper";
import "../src/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <UIWrapper>
        <Component {...pageProps} />
      </UIWrapper>
    </RecoilRoot>
  );
}
