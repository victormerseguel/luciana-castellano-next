"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import Title from "./Title";

const Footer = () => {
  const getYear = new Date();
  const currentYear = getYear.getFullYear();

  const instagram_images = [
    {
      url: "",
      src: "/assets/Instagram1.jpg",
    },
    {
      url: "",
      src: "/assets/lucrecia-sincera.jpg",
    },
    {
      url: "",
      src: "/assets/Instagram2.jpg",
    },
    {
      url: "",
      src: "/assets/Instagram4.jpg",
    },
    {
      url: "",
      src: "/assets/Descobertas.jpg",
    },
    ,
    {
      url: "",
      src: "/assets/Instagram3.jpg",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <Title text="Siga" />
        <div className={styles.instagram_posts}>
          {instagram_images.map((image, i) => (
            <a href={image.url} key={i}>
              <Image
                src={image.src}
                alt={`Post Instagram ${i}`}
                width={154}
                height={154}
              />
            </a>
          ))}
        </div>
        <div className={styles.social_links}>
          <a href="https://www.instagram.com/luhcastellano/" target="_blank">
            <img src="/assets/icon-instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/c/LuhCastellano" target="_blank">
            <img src="/assets/icon-youtube.svg" alt="Youtube" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=351935715800&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+%C3%A0+respeito+dos+atendimentos.&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img src="/assets/icon-whatsapp.svg" alt="WhatsApp" />
          </a>
          <a href="#contacts">
            <img src="/assets/icon-mail.svg" alt="E-mail" />
          </a>
        </div>
        <p>
          COPYRIGHT © {currentYear} - LUCIANA CASTELLANO |{" "}
          <br className={styles.mobile3} />
          <a href="">TERMOS DE USO</a> | <br className={styles.mobile2} />
          <a href="">Política de Privacidade</a> |{" "}
          <br className={styles.mobile1} />
          <a href="">WEB DESIGNER: VICTOR MERSEGUEL</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
