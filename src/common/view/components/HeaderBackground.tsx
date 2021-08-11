import React from "react";
import { useHeaderBackgroundStore } from "../store/headerBackgroundStore";
import SafeImage from "./atoms/SafeImage";
import FallbackImage from "../../../../public/assets/images/hero-1.jpg";

export default function HeaderBackground() {
  const { headerBackground } = useHeaderBackgroundStore();
  return (
    headerBackground && (
      <div className="absolute inset-x-0 top-0 h-80">
        {headerBackground === "USE_PLACEHOLDER" ? (
          <SafeImage
            layout="fill"
            objectFit="cover"
            src={FallbackImage}
            alt="User has no background image"
          />
        ) : (
          <SafeImage layout="fill" objectFit="cover" {...headerBackground} />
        )}
      </div>
    )
  );
}
