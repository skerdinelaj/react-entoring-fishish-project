import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    children: ReactNode,
} & ComponentPropsWithoutRef<"dialog">

const Modal =forwardRef<HTMLDialogElement, ModalProps>(
  ({children, ...props}, ref )=> {
    return createPortal(
      <dialog className="modal" {...props} ref={ref}>
        {children}
      </dialog>,
      document.getElementById("modal-root")!
    )
  }
) 


export default Modal