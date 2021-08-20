import React from "react";
import Image from "next/image";
import Button from "./atoms/Button";

interface Props {
  onClick: React.MouseEventHandler;
  text?: string;
}
export default function GoogleButton({
  onClick,
  text = "Join with Google",
}: Props) {
  return (
    <Button onClick={onClick} color="black">
      <span className="flex items-center space-x-2">
        <div className="relative flex-none h-4 w-4">
          <Image
            layout="fill"
            objectFit="cover"
            src="/assets/icons/google.svg"
            alt="Google Logo"
          />
        </div>
        <div>{text}</div>
      </span>
    </Button>
  );
}
