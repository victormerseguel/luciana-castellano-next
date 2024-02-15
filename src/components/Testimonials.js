"use client";

import Image from "next/image";
import styles from "./Testimonials.module.css";
import Title from "./Title";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const imgContainerRef = useRef();
  const testimonialsRef = useRef([]);
  const testimonials_img = [
    "/assets/depoimento_atendimento_01.jpg",
    "/assets/depoimento_atendimento_02.jpg",
    "/assets/depoimento_atendimento_03.jpg",
    "/assets/depoimento_atendimento_04.jpg",
    "/assets/depoimento_atendimento_05.jpg",
    "/assets/depoimento_atendimento_06.jpg",
    "/assets/depoimento_atendimento_07.jpg",
    "/assets/depoimento_criancas_01.jpg",
    "/assets/depoimento_criancas_02.jpg",
  ];

  const [activeBall, setActiveBall] = useState([]);
  const activeControl = [];

  useEffect(() => {
    testimonials_img.forEach((item) => {
      activeControl.push(false);
    });
    setActiveBall(activeControl);
  }, []);

  if (typeof window !== "undefined") {
    const balls = document.querySelectorAll(".ball");
    const testimonials = document.querySelectorAll(".images_caroussel");
    const lenght = testimonials_img.length;

    let count = 1;
    const position = 290;

    setInterval(() => {
      testimonials.forEach((img, idx) => {
        img.style.transform = `translateX(${-position * count}px)`;

        if (
          +img.style.transform.replace("translateX(", "").replace("px)", "") <
          -position * (idx + 2)
        ) {
          img.style.transform = `translateX(${
            -position * count + testimonials_img.length * 290
          }px)`;
        }
      });

      count > testimonials_img.length - 1 ? (count = 1) : (count = count + 1);
    }, 1500);
  }

  return (
    <section className={styles.testimonials}>
      <Title text="Depoimentos" />
      <div className={styles.testimonials_content}>
        <button>
          <img
            src="/assets/arrow-button.svg"
            alt="Imagem anteriror"
            className={styles.testimonials_previous}
          />
        </button>
        <div className={styles.testimonials_images} ref={imgContainerRef}>
          {testimonials_img.map((img, i) => (
            <div
              className={`images_caroussel ${styles.testimonials_img}`}
              key={i}
            >
              <img src={img} alt="Depoimento" />
            </div>
          ))}
        </div>
        <button>
          <img
            src="/assets/arrow-button.svg"
            alt="Próxima imagem"
            className={styles.testimonials_next}
          />
        </button>
      </div>
      <div className={styles.testimonials_display}>
        {testimonials_img.map((item, i) => (
          <div
            className={`ball ${styles.testimonials_ball}`}
            key={i}
            style={{ transform: "TranslateX('0')" }}
            id={"ball" + i}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
