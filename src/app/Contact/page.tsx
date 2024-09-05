/* eslint-disable @next/next/no-img-element */
"use client";
import Card from "@/components/Card";
import ContentLoading from "@/components/ContentLoading";
import { useDataContext } from "@/contexts/DataContext";
import React from "react";

function Contact() {
  const { data1 } = useDataContext();
  return (
    <div>
      {data1.length === 0 ? (
        <ContentLoading />
      ) : (
        <div>
          <section className="contact">
            <div className="contact__container">
              <div className="contact__image-container">
                <img src="/Image.png" alt="Image" height="auto" width="100%" />
              </div>

              <div className="contact__content">
                <div className="contact__text-container">
                  <h2 className="medium-36">Light, Fast & Powerful</h2>
                  <p className="regular-16">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus
                    <br />
                    <br />
                    mus. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nulla consequat massa quis enim.
                  </p>
                </div>
                <div className="contact__cards">
                  <div className="contact__card-container">
                    {data1.slice(7, 9).map((item, index) => (
                      <Card
                        key={index}
                        icon={item.img}
                        title={item.title}
                        text={item.dis}
                      />
                    ))}
                  </div>
                  <div className="contact__card-container">
                    {data1.slice(9, 11).map((item, index) => (
                      <Card
                        key={index}
                        icon={item.img}
                        title={item.title}
                        text={item.dis}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Contact;
