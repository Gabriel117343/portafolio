"use client";
import React, { useRef, useState } from "react";
import "./styles.css";
export const CustomModal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    setIsOpen(false);
    dialogRef.current?.close();
  };
  const toAction = isOpen ? closeModal : openModal;
  return (
    <div onClick={() => toAction()} className="cursor-zoom-in">
      <div className={` ${className}`}>
        <dialog
          className="  mx-auto mt-10 overflow-hidden rounded-md  custom-modal "
          ref={dialogRef}
        >
          {children}
        </dialog>
      </div>

      {children}
    </div>
  );
};
