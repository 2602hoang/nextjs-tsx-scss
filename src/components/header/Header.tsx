"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useHeaderLogic } from "./useLogic";

export const Header = () => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu } = useHeaderLogic();
  const { logout } = useAuth();

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
            <button className="header__button-btn" onClick={logout}>
              Log Out{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  stroke="#FF8A65"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="M17.44 14.62L20 12.06 17.44 9.5M9.76 12.06h10.17M11.76 20c-4.42 0-8-3-8-8s3.58-8 8-8"
                ></path>
              </svg>
            </button>
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
    </div>
  );
};
