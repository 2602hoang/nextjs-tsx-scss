/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";

export interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title?: string;
    img?: string;
    dis?: string;
  };
}

const CardModal: React.FC<CardModalProps> = ({ isOpen, onClose, data }) => {
  // If the modal is closed, return nothing
  if (!isOpen) return null;
  // If the modal is open, render the content below
  return (
    <div onClick={onClose} className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          &times;
        </button>
        <h2 className="medium-36">{data.title}</h2>
        <div className="content-text">
          <p>{data.dis}</p>
          <img src={data.img} alt={data.title} width={"90%"} height={"auto"} />
        </div>
      </div>
    </div>
  );
};

export default CardModal;
