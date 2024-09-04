/* eslint-disable @next/next/no-img-element */
"use client";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
interface DATA {
  dis: string;
  img: string;
  title: string;
}
export default function Home() {
  const [data1, setData1] = useState<DATA[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get<DATA[]>(
        "https://server-api-lime.vercel.app/api/v1/email/api/get"
      );
      setData1(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data1.length === 0 ? (
        <div className="loader-container">
          <div className="loader"></div>

          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <section
            style={{ backgroundImage: "url(/panner.png)" }}
            className="section1"
          >
            <div className="section1__text">
              <div className="section1__text-box">
                <h1 className="medium-50">
                  Introduce Your Product Quickly & Effectively
                </h1>

                <p className="regular-18">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus
                </p>

                <p className="regular-18__sub">
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
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
              <div className="section2__content">
                <div className="section2__text-container">
                  <h2 className="medium-36">Light, Fast & Powerful</h2>
                  <p className="regular-16">
                    Lorem ipsum dolor sit amet,consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                  </p>
                </div>
                <div className="section2__cards">
                  {data1.map((item, index) => (
                    <Card
                      key={index}
                      icon={item.img}
                      title={item.title}
                      text={item.dis}
                    />
                  ))}
                </div>
              </div>

              <div className="section2__image-container">
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
            <div className="section3-info__item">
              <div className="section3-info__image-container">
                <img
                  src="/info.png"
                  alt="Info"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="section3-info__text-container">
                <h2 className=" medium-36">Light, Fast & Powerful</h2>
                <p className="regular-16">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus
                </p>
                <p className="regular-16__sub">
                  mus Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
          </section>

          <section className="section3-info1">
            <div className="section3-info__item1">
              <div className="section3-info__image-container1">
                <img
                  src="/info1.png"
                  alt="Info"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="section3-info__text-container1">
                <h2 className="medium-36">Light, Fast & Powerful</h2>
                <p className="regular-16">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus
                </p>
                <p className="regular-16__sub">
                  mus Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
          </section>

          <section className="section3-info2">
            <div className="section3-info__item2">
              <div className="section3-info__image-container2">
                <img
                  src="/info2.png"
                  alt="Info"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="section3-info__text-container2">
                <h2 className=" medium-36">Light, Fast & Powerful</h2>
                <p className="regular-16">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus
                </p>

                <p className="regular-16__sub">
                  mus Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
                <button className="section3-info__button">Purchase Now</button>
              </div>
            </div>
          </section>

          {/* <!-- section4 --> */}
          <section
            style={{ backgroundImage: "url(/Rectangle.png)" }}
            className="section4"
          >
            <div className="section4__content">
              <div className="section4__text-box">
                <h2 className="section4__title">A Price To Suit Everyone</h2>
                <p className="section4__description">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus.
                </p>
              </div>
              <div className="section4__price-box">
                <strong className="section4__price">$40</strong>
                <h2 className="section4__subtitle">UI Design Kit</h2>
              </div>
              <div className="section4__purchase">
                <p className="section4__note">See, One price. Simple.</p>
                <button className="section4__button">
                  <span className="section4__button-text">Purchase Now</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
