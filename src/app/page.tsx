/* eslint-disable @next/next/no-img-element */
"use client";
import Card from "@/components/card/Card";
import ContentLoading from "@/components/loading/ContentLoading";
import { NoData } from "@/components/nodata/NoData";
import { DATA, useLogicDataCard } from "@/store/DataCard";
import CardModal from "@/components/modal/CardModal";
import { useState } from "react";
import { useLogicHome } from "./Home/useLogic";
import LayoutPage from "@/components/layout/LayoutPage";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
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
  const { section1, section2, section4 } = useLogicHome();
  const { userToken } = useAuth();
  return (
    <>
      {userToken ? (
        <LayoutPage>
          {!loading ? (
            <ContentLoading />
          ) : (
            <>
              {dataCard.length > 0 ? (
                <div>
                  <section
                    style={{ backgroundImage: "url(/panner.png)" }}
                    className="section1"
                  >
                    <div data-aos="zoom-in" className="section1__text">
                      <div className="section1__text-box">
                        <h1 className="medium-50">{section1.title}</h1>

                        <p className="regular-18">{section1.dis}</p>

                        <p className="regular-18__sub">{section1.dis1}</p>
                      </div>

                      <div className="section1__buttons">
                        <button className="section1__button section1__button--primary">
                          Purchase UI Kit
                        </button>
                        <button className="section1__button section1__button--secondary">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* <!-- Section2 --> */}

                  <section className="section2">
                    <div className="section2__container">
                      <div data-aos="zoom-in" className="section2__content">
                        <div className="section2__text-container">
                          <h2 className="medium-36">{section2.title}</h2>
                          <p className="regular-16">{section2.dis}</p>
                        </div>
                        <div className="section2__cards-list">
                          {dataCard.slice(0, 4).map((item) => (
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

                      <div
                        data-aos="zoom-in"
                        className="section2__image-container"
                      >
                        <img
                          src="/mobile.png"
                          alt="Mobile"
                          className="section2__image"
                          width={"100%"}
                          height={"auto"}
                        />
                      </div>
                    </div>
                  </section>
                  {/* <!-- Section3 --> */}

                  <section className="section3-info">
                    <div data-aos="fade-up" className="section3-info__item">
                      <div className="section3-info__image-container">
                        <img
                          src="/info.png"
                          alt="Info"
                          width={"100%"}
                          height={"auto"}
                        />
                      </div>
                      <div className="section3-info__text-container">
                        <h2 className=" medium-36">{dataCard[4].title}</h2>
                        <p className="regular-16">{dataCard[4].dis}</p>
                        <p className="regular-16__sub">
                          mus Donec quam felis, ultricies nec, pellentesque eu,
                          pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="section3-info1">
                    <div data-aos="fade-up" className="section3-info__item1">
                      <div className="section3-info__image-container1">
                        <img
                          src="/info1.png"
                          alt="Info"
                          width={"100%"}
                          height={"auto"}
                        />
                      </div>
                      <div className="section3-info__text-container1">
                        <h2 className="medium-36">{dataCard[5].title}</h2>
                        <p className="regular-16">{dataCard[5].dis}</p>
                        <p className="regular-16__sub">
                          mus Donec quam felis, ultricies nec, pellentesque eu,
                          pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="section3-info2">
                    <div data-aos="fade-up" className="section3-info__item2">
                      <div className="section3-info__image-container2">
                        <img
                          src="/info2.png"
                          alt="Info"
                          width={"100%"}
                          height={"auto"}
                        />
                      </div>
                      <div className="section3-info__text-container2">
                        <h2 className=" medium-36">{dataCard[6].title}</h2>
                        <p className="regular-16">{dataCard[6].dis}</p>

                        <p className="regular-16__sub">
                          mus Donec quam felis, ultricies nec, pellentesque eu,
                          pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <button className="section3-info__button">
                          Purchase Now
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* <!-- section4 --> */}
                  <section
                    style={{ backgroundImage: "url(/Rectangle.png)" }}
                    className="section4"
                  >
                    <div className="section4__content">
                      <div data-aos="fade-up" className="section4__text-box">
                        <h2 className="section4__title">{section4.title}</h2>
                        <p className="section4__description">
                          {section4.dis}
                        </p>
                      </div>
                      <div data-aos="fade-up" className="section4__price-box">
                        <strong className="section4__price">
                          ${section4.price}
                        </strong>
                        <h2 className="section4__subtitle">UI Design Kit</h2>
                      </div>
                      <div data-aos="fade-up" className="section4__purchase">
                        <p className="section4__note">
                          See, One price. Simple.
                        </p>
                        <button className="section4__button">
                          <span className="section4__button-text">
                            Purchase Now
                          </span>
                        </button>
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
              ) : (
                <NoData />
              )}
            </>
          )}
        </LayoutPage>
      ) : (
        <></>
      )}
    </>
  );
}
