/* eslint-disable @next/next/no-img-element */
"use client";

import Card from "@/components/card/Card";
import ContentLoading from "@/components/loading/ContentLoading";
import { NoData } from "@/components/nodata/NoData";
import { DATA, useLogicDataCard } from "@/store/DataCard";
import React, { useState } from "react";

import CardModal from "@/components/modal/CardModal";
import { useLogicContact } from "./useLogic";
import LayoutPage from "@/components/layout/LayoutPage";

function Contact() {
  const { loading, dataCard } = useLogicDataCard();
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({
    title: "",
    img: "",
    dis: "",
  });

  const onClick = (item: DATA) => {
    setIsOpen(true);
    setDataModal({
      title: item.title,
      img: item.img,
      dis: item.dis,
    });
  };
  const { contact } = useLogicContact();
  return (
    <LayoutPage>
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
                  <div data-aos="fade-up" className="contact__image-container">
                    <img
                      src="/Image.png"
                      alt="Image"
                      height="auto"
                      width="100%"
                    />
                  </div>

                  <div data-aos="fade-down" className="contact__content">
                    <div className="contact__text-container">
                      <h2 className="medium-36">{contact.title}</h2>
                      <p className="regular-16">{contact.dis}</p>
                    </div>
                    <div className="contact__cards">
                      <div className="contact__card-container">
                        {dataCard.slice(5, 10).map((item) => (
                          <Card
                            key={item.id}
                            icon={item.img}
                            title={item.title}
                            text={item.dis}
                            onClick={() => onClick(item)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <>
                <CardModal
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  data={dataModal}
                />
              </>
            </div>
          )}
        </>
      )}
    </LayoutPage>
  );
}

export default Contact;
