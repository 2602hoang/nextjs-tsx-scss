/* eslint-disable @next/next/no-img-element */
"use client";
import Card from "@/components/card/Card";
import ContentLoading from "@/components/loading/ContentLoading";
import { NoData } from "@/components/nodata/NoData";
import React from "react";
import { useLogicDataCard } from "@/store/DataCard";
import CardModal from "@/components/modal/CardModal";
import { useLogicCommom } from "../indexLogic/useLogic";

function About() {
  const { loading, dataCard } = useLogicDataCard();
  const { selectedItemId, selectedItem, openModal, closeModal } =
    useLogicCommom({ dataCard });
  return (
    <div>
      {!loading ? (
        <ContentLoading />
      ) : (
        <>
          {dataCard.length === 0 ? (
            <NoData />
          ) : (
            <div>
              <section className="aboutsection">
                <div className="aboutsection__container">
                  <div className="aboutsection__text-container">
                    <div className="aboutsection__text">
                      <h2 className="medium-36">
                        Design & Build Your Own Landing Pages
                      </h2>
                      <p className="regular-16">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus
                        <br />
                        <br />
                        mus. Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Nulla consequat massa quis enim.
                      </p>
                    </div>
                    <div className="aboutsection__cards">
                      <div className="aboutsection__card-container">
                        {dataCard.slice(4, 10).map((item, index) => (
                          <Card
                            key={index}
                            icon={item.img}
                            title={item.title}
                            text={item.dis}
                            onClick={() => openModal(item.id)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="aboutsection__image-container">
                    <img
                      src="/Vert.png"
                      alt="Logo"
                      width="100%"
                      height="auto"
                    />
                  </div>
                </div>
              </section>
              <>
                <CardModal
                  isOpen={!!selectedItemId}
                  onClose={closeModal}
                  title={selectedItem?.title || ""}
                  img={selectedItem?.img || ""}
                  dis={selectedItem?.dis || ""}
                />
              </>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default About;
