import Link from "next/link";
import styles from "./Navbar.module.css";
import { useContext, useEffect } from "react";
import { Context } from "@/hooks/Context";

const NavItem = ({ text, index, desktop }) => {
  const {
    homeVisible,
    therapiesVisible,
    traumaVisible,
    aboutVisible,
    servicesVisible,
    contactsVisible,
    setCurrentMenu,
    items_menu,
    currentMenu,
  } = useContext(Context);

  useEffect(() => {
    homeVisible > therapiesVisible
      ? setCurrentMenu(items_menu[0])
      : therapiesVisible > traumaVisible
      ? setCurrentMenu(items_menu[1])
      : traumaVisible > aboutVisible
      ? setCurrentMenu(items_menu[2])
      : aboutVisible > servicesVisible
      ? setCurrentMenu(items_menu[3])
      : servicesVisible > contactsVisible
      ? setCurrentMenu(items_menu[4])
      : setCurrentMenu(items_menu[5]);
  }, [currentMenu]);

  return (
    <li className={desktop ? styles.menu_desktop : null}>
      <Link
        href={`#${items_menu[index]}`}
        className={`${styles.a} ${
          currentMenu === items_menu[index] ? styles.current_menu : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
