"use client";

import Image from "next/image";
import styles from "./Testimonials.module.css";
import Title from "./Title";
import { useContext, useEffect, useRef, useState } from "react";
import Carousel, { changeSlide } from "./Carousel";
import { testimonials_img } from "@/app/(_page)/databases/testimonials_db";
import { Context } from "@/app/(_page)/hooks/Context";

const Testimonials = () => {
  const imgContainerRef = useRef();
  const { count, setCount } = useContext(Context);
  Carousel();

  const handleNext = () => {
    count === testimonials_img.length - 1 ? setCount(0) : setCount(count + 1);
    changeSlide(count, "right", 0.8);
  };
  const handlePrevious = () => {
    count === 0 ? setCount(testimonials_img.length - 1) : setCount(count - 1);
    changeSlide(count, "left", 0.8);
  };

  return (
    <section className={styles.testimonials}>
      <Title text="Depoimentos" />
      <div className={styles.testimonials_content}>
        <button>
          <img
            src="/assets/arrow-button.svg"
            alt="Imagem anteriror"
            className={styles.testimonials_previous}
            onClick={handlePrevious}
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
            onClick={handleNext}
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
