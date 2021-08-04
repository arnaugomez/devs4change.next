import React from "react";
import MaxWidth from "../../../common/view/atoms/MaxWidth";
import { advantages } from "../../data/advantages";
import AdvantagesTriadItem from "./AdvantagesTriadItem";

export default function AdvantagesTriad() {
  return (
    <section className="pb-1 py-1 pt-20">
      <MaxWidth className="px-12">
        <h2 className="font-display font-bold text-3xl text-center pb-12">
          How it works
        </h2>
        <ul className="flex items-stretch gap-6">
          {advantages.map((advantage) => (
            <AdvantagesTriadItem key={advantage.name} {...advantage} />
          ))}
        </ul>
      </MaxWidth>
    </section>
  );
}
