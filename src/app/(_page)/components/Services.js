"use client";

import Image from "next/image";
import styles from "./Services.module.css";
import Title from "./Title";
import { useContext, useRef } from "react";
import { Context } from "@/app/(_page)/hooks/Context";
import Observer from "@/app/(_page)/hooks/Observer";

const Services = () => {
  const { servicesVisible, setServicesVisible } = useContext(Context);
  const servicesRef = useRef(null);

  return (
    <div className={styles.services} ref={servicesRef} id="services">
      <Observer
        state={servicesVisible}
        setState={setServicesVisible}
        ref={servicesRef}
      />
      <Image
        src="/assets/clean-bg.jpg"
        alt="background"
        fill={true}
        className={styles.services_bg}
      />
      <div className={styles.services_content}>
        <Image
          src="/assets/services-image.jpg"
          alt="Mãos dadas"
          width={221}
          height={309}
          quality={85}
          className={styles.services_image}
        />
        <div className={styles.services_right}>
          <Title text="Atendimentos" />
          <p className="text">
            Saiba mais como funcionam os atendimentos, os detalhes, os valores e
            algumas coisinhas a mais…
          </p>
          <a href="#">
            <p className={`text ${styles.services_link}`}>Saiba Mais</p>
            <img src="/assets/next-button.png" alt="Next" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
