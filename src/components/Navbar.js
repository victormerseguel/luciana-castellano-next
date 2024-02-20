import Image from "next/image";
import styles from "./Navbar.module.css";

import { useState } from "react";
import NavItem from "./NavItem";

export default function Navbar() {
  const [navScroll, setNavScroll] = useState(false);

  const scrollNav = () => {
    window.scrollY > 25 ? setNavScroll(true) : setNavScroll(false);
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollNav);
  }

  return (
    <nav className={`${styles.nav} ${navScroll ? styles.menu_scroll : ""}`}>
      <div className={styles.nav_wrap}>
        <div className={styles.logo}>
          <a href="#home">
            <Image
              src="/assets/logo-luciana.svg"
              alt="Logo Luciana Castellano"
              width={268}
              height={55}
            />
          </a>
        </div>
        <ul className={styles.links}>
          <NavItem text="Terapias" index={1} desktop />
          <NavItem text="Trauma Informed" index={2} desktop />
          <NavItem text="Sobre Mim" index={3} desktop />
          <NavItem text="Atendimentos" index={4} desktop />
          <NavItem text="Contatos" index={5} desktop />
          <li className={styles.menu_mobile}>
            <img src="/assets/menumobile.svg" alt="Menu" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
