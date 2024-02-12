"use client";

import Image from "next/image";
import styles from "./Testimonials.module.css";
import Title from "./Title";
import { useEffect, useRef } from "react";

const Testimonials = () => {
  const imgContainerRef = useRef();
  let gap;
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
        <div
          className={styles.testimonials_images}
          ref={imgContainerRef}
          style={{ gap: { gap } + "px" }}
        >
          {testimonials_img.map((img, i) => (
            <div className={styles.testimonials_img} key={i}>
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
        <div className={styles.testimonials_ball}></div>
      </div>
    </section>
  );
};

export default Testimonials;
