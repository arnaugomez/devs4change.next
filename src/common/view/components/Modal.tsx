import React from "react";
import { useModalStore } from "../store/modalStore";

export default function Modal() {
  const { clearModal, modal } = useModalStore();
  return (
    modal && (
      <div className="z-30 fixed inset-0 flex items-center justify-center p-4">
        <button
          aria-label="close modal"
          onClick={clearModal}
          className="absolute block w-full h-full bg-black opacity-60 cursor-default"
        />
        <div className="relative bg-white overflow-hidden rounded-lg">
          <div className="relative h-12 flex justify-center items-center shadow">
            <h2 className="font-display font-bold text-lg truncate">
              {modal.title}
            </h2>
            <button
              className="absolute p-3 inset-y-0 m-auto right-2"
              onClick={clearModal}
            >
              ×
            </button>
          </div>
          <div className="devs4change__modal">{modal.content}</div>
        </div>
      </div>
    )
  );
}
