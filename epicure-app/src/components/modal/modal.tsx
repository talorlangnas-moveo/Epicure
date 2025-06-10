// components/Modal.tsx
"use client";

import Image from "next/image";
import React from "react";
import styles from "./modal.module.scss";
import { xWhiteIcon } from "@/icons";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
        <Image src={xWhiteIcon} alt="Close" className={styles.xWhiteIcon} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
