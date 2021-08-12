import React from "react";
import Button from "../../../common/view/components/atoms/Button";
import MaxWidth from "../../../common/view/components/atoms/MaxWidth";
import Link from "next/link";
import { useUserStore } from "../../../user/view/store/userStore";
import HeaderNavigation from "./HeaderNavigation";

export default function Header() {
  return (
    <header className="sticky top-0 p-1.5 z-30">
      <MaxWidth className="flex justify-between items-stretch py-2.5 px-4 border border-black text-black bg-white">
        <h1 className="font-display font-light italic text-3xl transform -translate-y-0.5">
          <Link href="/">Devs for Change</Link>
        </h1>
        <HeaderNavigation />
      </MaxWidth>
    </header>
  );
}
