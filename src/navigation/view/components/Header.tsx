import React from "react";
import MaxWidth from "../../../common/view/components/atoms/MaxWidth";
import HeaderNavigation from "./HeaderNavigation";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <header className="sticky top-0 p-1.5 z-30">
      <MaxWidth className="flex justify-between items-stretch py-2.5 px-4 border border-black text-black bg-white">
        <HeaderLogo />
        <HeaderNavigation />
      </MaxWidth>
    </header>
  );
}
