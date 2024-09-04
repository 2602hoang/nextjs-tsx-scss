"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const Fotter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById(
        "backToTop"
      ) as HTMLButtonElement;
      if (backToTopButton) {
        if (window.scrollY > 300) {
          backToTopButton.classList.add("show");
        } else {
          backToTopButton.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="responsive-container">
          <button id="backToTop" className="back-to-top" onClick={scrollToTop}>
            ↑
          </button>
          <div className="top-section">
            <p className="top-section__p">©2023 Yourcompany</p>
            <a className="top-section__a" href="/">
              Landing
            </a>
            <button className="top-section__button">Purchase now</button>
          </div>

          <div className="bottom-section">
            <div className="links">
              <ul className="links__list">
                <li>
                  <a href="/" className="links-active1">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/About" className="links-active2">
                    About
                  </a>
                </li>
                <li>
                  <a href="/Contact" className="links-active3">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-icons">
              <ul className="social-icons__list">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="icons-facebook"
                      src="/face.png"
                      alt="Facebook"
                      width={20}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="icons-linkedin"
                      src="/in.png"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="icons-twitter"
                      src="/Twicth.png"
                      alt="Twitter"
                      width={20}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="icons-youtube"
                      src="/Youtube.png"
                      alt="YouTube"
                      width={20}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="icons-instagram"
                      src="/Instagram.png"
                      alt="Instagram"
                      width={20}
                      height={20}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
