/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import React from "react";

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ icon, title, text }) => {
  return (
    <div className="section2__cards">
      <div className="card">
        <img src={icon} alt="Icon" width={40} height={40} />
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
