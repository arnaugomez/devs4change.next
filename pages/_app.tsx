import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { FirebaseProvider } from "../src/common/data/firebase";
import UIWrapper from "../src/common/view/components/UIWrapper";
import "../src/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    new FirebaseProvider();
  }, []);

  return (
    <RecoilRoot>
      <UIWrapper>
        <Component {...pageProps} />
      </UIWrapper>
    </RecoilRoot>
  );
}
