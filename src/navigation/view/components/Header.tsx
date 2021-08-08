import React from "react";
import Button from "../../../common/view/atoms/Button";
import MaxWidth from "../../../common/view/atoms/MaxWidth";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 p-1 z-30">
      <MaxWidth className="flex justify-between items-stretch py-2.5 px-4 border border-black text-black bg-white">
        <h1 className="font-display font-light italic text-3xl transform -translate-y-0.5">
          <Link href="/">Devs for Change</Link>
        </h1>
        <nav className="flex items-stretch space-x-3">
          <Link href="/login" passHref>
            <Button isLink color="black">Log in</Button>
          </Link>
          <Link href="/join" passHref>
            <Button isLink color="cta">Join</Button>
          </Link>
        </nav>
      </MaxWidth>
    </header>
  );
}
