import { useState, useEffect, useContext } from "react";
import { testimonials_img } from "@/databases/testimonials_db";
import { Context } from "@/hooks/Context";

const Carousel = () => {
  // const { count, setCount } = useContext(Context);
  const [count, setCount] = useState();
  const position = 290;
  const intervalTime = 3500;
  let testimonials;
  let balls;

  if (typeof window !== "undefined") {
    balls = document.querySelectorAll(".ball");
    testimonials = document.querySelectorAll(".images_caroussel");
  }

  useEffect(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      testimonials.forEach((img, idx) => {
        img.style.transform = `translateX(${-position * (count + 1)}px)`;

        if (
          +img.style.transform.replace("translateX(", "").replace("px)", "") <
          -position * (idx + 1)
        ) {
          img.style.transform = `translateX(${
            -position * (count + 1) + testimonials_img.length * position
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
      count === testimonials_img.length - 1
        ? setCount(0)
        : setCount((prevCount) => prevCount + 1);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [count]);

  return count;
};

export default Carousel;
