"use client";

import Image from "next/image";
import styles from "./Testimonials.module.css";
import Title from "./Title";
import { useEffect, useRef, useState } from "react";
import Carousel, { testimonials_img } from "./Carousel";

const Testimonials = () => {
  const imgContainerRef = useRef();

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
            className={`ball ${styles.testimonials_ball} ${
              Carousel() === i ? styles.active_ball : ""
            }`}
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
