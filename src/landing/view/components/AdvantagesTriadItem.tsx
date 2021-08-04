import React from "react";
import { Advantage } from "../../domain/Advantage";
import Image from "next/image";

export default function AdvantagesTriadItem({
  icon,
  name,
  description,
}: Advantage) {
  return (
    <li className="flex-1 border border-black p-4 pt-8 pb-6">
      <div className="h-6 w-6 mb-4 m-auto relative">
        {icon && <Image src={icon} alt="" layout="fill" objectFit="contain" />}
      </div>
      <h3 className="font-display font-bold text-center text-xl pb-6">
        {name}
      </h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </li>
  );
}
