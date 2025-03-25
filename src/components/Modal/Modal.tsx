import React, { useEffect } from "react";
import ReusableButton from "../ReusableButton";
import "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleClickOutside = (event: React.MouseEvent) => {
    const modalElement = event.target as HTMLElement;
    if (modalElement && modalElement.dataset.dismiss === "true") {
      onClose();
    }
  };

  return (
    <div
      data-testid="mockId"
      className="modal-overlay"
      data-dismiss="true"
      onClick={handleClickOutside}
    >
      <div className="modal-content" role="dialog" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-lg font-bold" role="heading">{title}</h2>
        <ReusableButton label="Close" onClick={onClose} variant="primary" />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;