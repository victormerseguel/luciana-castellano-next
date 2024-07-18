import Image from "next/image";
import styles from "./Navbar.module.css";

import { useContext, useState } from "react";
import NavItem from "./NavItem";
import { Context } from "@/app/(_page)/hooks/Context";

export default function Navbar() {
  const [navScroll, setNavScroll] = useState(false);
  const { setMobile, items_menu } = useContext(Context);

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
          {items_menu.map((item, idx) => (
            <NavItem index={idx} desktop key={idx} />
          ))}
          <li className={styles.menu_mobile} onClick={() => setMobile(true)}>
            <img src="/assets/menumobile.svg" alt="Menu" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
