import React from "react";
import { RecoilRoot } from "recoil";
import UIWrapper from "../src/common/view/components/UIWrapper";
import "../src/styles/globals.css";
import GetPersistedUser from "../src/user/view/components/GetPersistedUser";

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GetPersistedUser>
        <UIWrapper>
          <Component {...pageProps} />
        </UIWrapper>
      </GetPersistedUser>
    </RecoilRoot>
  );
}
