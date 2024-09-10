/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useHeaderLogic } from "./useLogic";
import { useState } from "react";
import UserModal from "../modal/UserModal";

export const Header = () => {
  const {
    isOpen,
    dataUser,
    setIsOpen,
    dataModal,
    onClick,
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
  } = useHeaderLogic();

  return (
    <div className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="container">
        <div className="header__content ">
          <nav className="header__menu-nav">
            <ul className="menu__nav-list">
              <li className="nav-list-active">
                <a href="/">Home</a>
              </li>
              <li className="nav-list-active">
                <a href="/About">About</a>
              </li>
              <li className="nav-list-active">
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="header__logo">
            <a href="/">Landing</a>
          </div>
          <div className="header__button">
            <div className="header__button-Avatar">
              <a className="Avatar-text" onClick={onClick}>
                {dataUser ? (
                  <img
                    src={dataUser?.avatar}
                    alt={dataUser?.username}
                    className="Avatar"
                  />
                ) : (
                  `😍`
                )}
              </a>
            </div>
          </div>
          <div className="header__mobile">
            <button className="header--mobile__menu" onClick={toggleMobileMenu}>
              &#9776;
            </button>
          </div>
        </div>

        <div
          className={`${
            isMobileMenuOpen
              ? "header__menu-mobile--open"
              : "header__menu-mobile "
          }`}
        >
          <nav className="menu__nav-mobile">
            <ul className="nav__mobile-list">
              <li className="nav-list-active">
                <a href="/">Home</a>
              </li>
              <li className="nav-list-active">
                <a href="/About">About</a>
              </li>
              <li className="nav-list-active">
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <UserModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={dataModal}
      />
    </div>
  );
};
