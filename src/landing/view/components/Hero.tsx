import React from "react";
import MaxWidth from "../../../common/view/atoms/MaxWidth";
import Image from "next/image";
import HeroImg1 from "./../../../../public/assets/images/hero-1.jpg";
import Button from "../../../common/view/atoms/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-1 pb-1">
      <MaxWidth className="flex items-stretch h-screen-80 space-x-1">
        <div className="flex-1 flex flex-col justify-center pl-3">
          <h2 className="font-display italic font-thin text-6xl pb-6">
            Real learning.
            <br /> Real <span className="text-brand">change</span>.
          </h2>
          <p className="max-w-sm">
            <span className="text-cta">Learn to code for free</span> by building
            real projects for NGOs and non-profits. Meet other learners and land
            your first software engineering job.
          </p>
          <div className="pt-4 space-x-3">
            <Link href="/join" passHref>
              <Button isLink color="cta">
                Join
              </Button>
            </Link>
            <Link href="/join/nonprofit" passHref>
              <Button isLink color="black">
                I am a non-profit
              </Button>
            </Link>
          </div>
        </div>
        <div
          style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
          className="relative flex-grow-0 w-1/2"
        >
          <Image src={HeroImg1} alt="" layout="fill" objectFit="cover" />
        </div>
      </MaxWidth>
    </section>
  );
}
