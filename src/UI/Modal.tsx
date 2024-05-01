import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    children: ReactNode
}

export default function Modal({children}: ModalProps) {
  return createPortal(
    <dialog open>{children}</dialog>,
    document.getElementById("modal-root")!
  )
}
