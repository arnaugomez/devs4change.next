import React from "react";
import MaxWidth from "../../../common/view/atoms/MaxWidth";

export default function Footer() {
  return (
    <footer className="p-1 pt-20">
      <MaxWidth className="border border-black p-4 text-center">
        <h2 className="font-display font-light italic text-3xl transform pb-3">
          Devs for Change
        </h2>
        <p>
          is built by developers like you. You can <strong>contribute</strong>{" "}
          by:
        </p>
      </MaxWidth>
    </footer>
  );
}
