import UIWrapper from "../src/common/view/UIWrapper";
import "../src/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <UIWrapper>
      <Component {...pageProps} />
    </UIWrapper>
  );
}
