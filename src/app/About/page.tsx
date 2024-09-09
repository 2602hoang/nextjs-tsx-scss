/* eslint-disable @next/next/no-img-element */
"use client";
import Card from "@/components/card/Card";
import ContentLoading from "@/components/loading/ContentLoading";
import { NoData } from "@/components/nodata/NoData";
import React, { useState } from "react";
import { DATA, useLogicDataCard } from "@/store/DataCard";
import CardModal from "@/components/modal/CardModal";
import { useLogicAbout } from "./useLogic";
import LayoutPage from "@/components/layout/LayoutPage";

function About() {
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
  const { about } = useLogicAbout();
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
              <section className="aboutsection">
                <div className="aboutsection__container">
                  <div
                    data-aos="zoom-in"
                    className="aboutsection__text-container"
                  >
                    <div className="aboutsection__text">
                      <h2 className="medium-36">{about.title}</h2>
                      <p className="regular-16">{about.dis}</p>
                    </div>
                    <div className="aboutsection__cards">
                      <div className="aboutsection__card-container">
                        {dataCard.slice(4, 10).map((item, index) => (
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
                  <div
                    data-aos="zoom-in-up"
                    className="aboutsection__image-container"
                  >
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

export default About;
