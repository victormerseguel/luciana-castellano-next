import Link from "next/link";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { Context } from "@/app/(_page)/hooks/Context";
import { handleCloseMenu } from "./MenuMobile";

const NavItem = ({ index, desktop }) => {
  const { items_menu, currentMenu, setMobile, setAnimateMobileMenu } =
    useContext(Context);

  const handleClose = (setMobile, setAnimate) => {
    handleCloseMenu(setMobile, setAnimate);
  };

  if (index < 2) return;

  return (
    <li
      className={desktop ? styles.menu_desktop : null}
      onClick={() => handleClose(setMobile, setAnimateMobileMenu)}
    >
      <a
        href={`#${items_menu[index][0]}`}
        className={`${styles.a} ${
          currentMenu === items_menu[index][0] ? styles.current_menu : ""
        }`}
      >
        {items_menu[index][1]}
      </a>
    </li>
  );
};

export default NavItem;
