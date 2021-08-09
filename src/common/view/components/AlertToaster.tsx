import React from "react";
import { Alert } from "../view-models/Alert";

export interface AlertProps extends Alert {
  onClose: React.MouseEventHandler;
}

export default function AlertToaster({ message, type, onClose }: AlertProps) {
  return (
    <div
      className={`px-4 py-2 border border-${type} bg-${type}-200 flex items-center text-${type}-800`}
    >
      <div className={`flex-1 w-full text-sm`}>{message}</div>
      <button className="flex-none w-8 text-xl text-right" onClick={onClose}>
        ×
      </button>
    </div>
  );
}
