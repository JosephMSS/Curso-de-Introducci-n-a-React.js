import { createPortal } from "react-dom";
export function Modal({ children }) {
  return createPortal(
    <div
      className="
  bg-primary bg-opacity-40
  fixed 
  flex
  -inset-3
  justify-center
  align-middle
  items-center
  "
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
}
