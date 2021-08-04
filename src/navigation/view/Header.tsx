import React from "react";
import Button from "../../common/view/atoms/Button";
import MaxWidth from "../../common/view/atoms/MaxWidth";

export default function Header() {
  return (
    <header className="sticky p-1">
      <MaxWidth className="flex justify-between items-stretch py-2.5 px-4 border border-black text-black bg-white">
        <h1 className="font-display font-light italic text-3xl transform -translate-y-0.5">
          Devs for Change
        </h1>
        <nav className="flex items-stretch space-x-3">
          <Button color="black" onClick={() => {}}>
            Log in
          </Button>
          <Button color="cta" onClick={() => {}}>
            Join
          </Button>
        </nav>
      </MaxWidth>
    </header>
  );
}
