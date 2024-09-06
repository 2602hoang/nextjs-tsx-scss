/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  img: string;
  dis: string;
}

const CardModal: React.FC<CardModalProps> = ({
  isOpen,
  onClose,
  title,
  img,
  dis,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose} className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          &times;
        </button>
        <h2 className="medium-36">{title}</h2>
        <div className="content-text">
          <p>{dis}</p>
          <img src={img} alt={title} width={"100%"} height={"auto"} />
        </div>
      </div>
    </div>
  );
};

export default CardModal;
