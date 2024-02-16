"use client";
import { useState, useEffect } from "react";

export const testimonials_img = [
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

const Carousel = () => {
  const [count, setCount] = useState(0);
  const lenght = testimonials_img.length;
  const position = 290;
  let testimonials;
  let balls;
  const intervalTime = 3500;

  if (typeof window !== "undefined") {
    balls = document.querySelectorAll(".ball");
    testimonials = document.querySelectorAll(".images_caroussel");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      testimonials.forEach((img, idx) => {
        img.style.transform = `translateX(${-position * (count + 1)}px)`;

        if (
          +img.style.transform.replace("translateX(", "").replace("px)", "") <
          -position * (idx + 1)
        ) {
          img.style.transform = `translateX(${
            -position * (count + 1) + testimonials_img.length * 290
          }px)`;
        }
        if (
          +img.style.transform.replace("translateX(", "").replace("px)", "") <
          -position * idx
        ) {
          img.style.opacity = "0";
          setTimeout(() => {
            img.style.opacity = "1";
          }, intervalTime * 2);
        }
      });

      count === lenght - 1
        ? setCount(0)
        : setCount((prevCount) => prevCount + 1);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [count]);

  return count;
};

export default Carousel;
