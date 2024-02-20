import { useState, useEffect, useContext } from "react";
import { testimonials_img } from "@/databases/testimonials_db";
import { Context } from "@/hooks/Context";

const intervalTime = 3500;
const position = 290;
let testimonials;
let balls;
let imgPos = 0;

// for (let i = 0; i < testimonials_img.length; i++) {
//   imgPos.push(0);
// }

if (typeof window !== "undefined") {
  balls = document.querySelectorAll(".ball");
  testimonials = document.querySelectorAll(".images_caroussel");
}

export const changeSlide = (count, direction, time) => {
  testimonials.forEach((img, idx) => {
    img.style.transition = `transform ${time}s ease`;
    let currentPosition = +img.style.transform
      .replace("translateX(", "")
      .replace("px)", "");

    img.style.transform = `translateX(${imgPos}px)`;
  });
  imgPos = imgPos - position;
};

const Carousel = () => {
  const { count, setCount } = useContext(Context);

  useEffect(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(count, "right", 2);
      count === testimonials_img.length - 4
        ? setCount(0)
        : setCount((count) => count + 1);
      // setCount(count + 1);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [count]);

  return count;
};

export default Carousel;
