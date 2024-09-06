/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import React from "react";

interface CardProps {
  icon: string;
  title: string;
  text: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ icon, title, text, onClick }) => {
  return (
    <div className="section2__cards">
      <a className="card" onClick={onClick}>
        <img src={icon} alt="Icon" width={40} height={40} />
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{text}</p>
      </a>
    </div>
  );
};

export default Card;
