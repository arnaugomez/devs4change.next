import React from "react";
import { FadeLoader, PropagateLoader } from "react-spinners";
import MaxWidth from "./MaxWidth";

function Loading() {
  return (
    <MaxWidth className="flex items-center justify-center h-96">
      <PropagateLoader />
    </MaxWidth>
  );
}

export default Loading;
