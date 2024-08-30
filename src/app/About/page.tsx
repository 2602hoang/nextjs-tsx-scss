/* eslint-disable @next/next/no-img-element */

import React from "react";

function About() {
  return (
    <div>
      <section className="aboutsection">
        <div className="aboutsection__container">
          <div className="aboutsection__text-container">
            <div className="aboutsection__text">
              <h2 className="medium-36">
                Design & Build Your Own Landing Pages
              </h2>
              <p className="regular-16">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                <br />
                <br />
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className="aboutsection__cards">
              <div className="aboutsection__card-container">
                <a href="#" className="card">
                  <img src="/icon.png" alt="Icon" className="card__icon" />
                  <h2 className="card__title">Title Goes Here</h2>
                  <p className="card__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </a>
                <a href="#" className="card">
                  <img src="/icon.png" alt="Icon" className="card__icon" />
                  <h2 className="card__title">Title Goes Here</h2>
                  <p className="card__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </a>
              </div>
              <div className="aboutsection__card-container">
                <a href="#" className="card">
                  <img src="/icon.png" alt="Icon" className="card__icon" />
                  <h2 className="card__title">Title Goes Here</h2>
                  <p className="card__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </a>
                <a href="#" className="card">
                  <img src="/icon.png" alt="Icon" className="card__icon" />
                  <h2 className="card__title">Title Goes Here</h2>
                  <p className="card__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="aboutsection__image-container">
            <img src="/Vert.png" alt="Logo" width="100%" height="auto" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
