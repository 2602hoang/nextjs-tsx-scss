/* eslint-disable @next/next/no-img-element */
"use client";

import Card from "@/components/card/Card";
import ContentLoading from "@/components/loading/ContentLoading";
import { NoData } from "@/components/nodata/NoData";
import { useLogicDataCard } from "@/store/DataCard";
import React from "react";

import CardModal from "@/components/modal/CardModal";
import { useLogicCommom } from "../indexLogic/useLogic";

function Contact() {
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
              <section className="contact">
                <div className="contact__container">
                  <div className="contact__image-container">
                    <img
                      src="/Image.png"
                      alt="Image"
                      height="auto"
                      width="100%"
                    />
                  </div>

                  <div className="contact__content">
                    <div className="contact__text-container">
                      <h2 className="medium-36">Light, Fast & Powerful</h2>
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
                    <div className="contact__cards">
                      <div className="contact__card-container">
                        {dataCard.slice(5, 10).map((item) => (
                          <Card
                            key={item.id}
                            icon={item.img}
                            title={item.title}
                            text={item.dis}
                            onClick={() => openModal(item.id)}
                          />
                        ))}
                      </div>
                    </div>
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

export default Contact;
