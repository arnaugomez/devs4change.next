import { atom, useRecoilState } from "recoil";
import { Modal } from "../view-models/Modal";

const modalState = atom<Modal>({
  key: "modal",
  default: null,
});

export function useModalStore() {
  const [modal, setModal] = useRecoilState(modalState);

  const clearModal = () => setModal(null);

  return { modal, setModal, clearModal };
}
