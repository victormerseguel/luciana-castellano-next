import styles from "./MenuMobile.module.css";
import animate from "../helpers/animate.module.css";

import { useContext, useEffect, useRef } from "react";
import { Context } from "@/app/(_page)/hooks/Context";

import Image from "next/image";
import NavItem from "./NavItem";

export const handleCloseMenu = (setMobile, setAnimate) => {
  setAnimate(false);
  setTimeout(() => {
    setMobile(false);
    setAnimate(true);
  }, 500);
  console.log("fechou");
};

const MenuMobile = () => {
  const { mobile, setMobile, animateMobileMenu, setAnimateMobileMenu } =
    useContext(Context);

  const handleClickLogo = () => {};

  return (
    <>
      {mobile && (
        <nav
          className={`${styles.mobile_container} ${
            animateMobileMenu ? animate.animeIn : animate.animeOut
          }`}
        >
          <Image
            src="/assets/bg-mobile.jpg"
            alt="background"
            fill
            className={styles.bg_mobile}
          />
          <div className={styles.mobile_logo}>
            <a
              href="#"
              onClick={() => handleCloseMenu(setMobile, setAnimateMobileMenu)}
            >
              <Image
                src="/assets/logo-luciana.svg"
                alt="Luciana Castellano Logo"
                fill
              />
            </a>
          </div>
          <ul className={styles.mobile_ul}>
            <NavItem text="Terapias" index={1} />
            <NavItem text="Trauma Informed" index={2} />
            <NavItem text="Sobre Mim" index={3} />
            <NavItem text="Atendimentos" index={4} />
            <NavItem text="Contatos" index={5} />
          </ul>
          <div className={styles.mobile_close}>
            <Image
              src="/assets/closemobile.svg"
              alt="fechar"
              width={34}
              height={34}
              onClick={() => handleCloseMenu(setMobile, setAnimateMobileMenu)}
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default MenuMobile;
