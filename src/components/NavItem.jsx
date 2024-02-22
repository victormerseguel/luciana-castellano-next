import Link from "next/link";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { Context } from "@/hooks/Context";
import { handleCloseMenu } from "./MenuMobile";

const NavItem = ({ text, index, desktop, handle }) => {
  const { items_menu, currentMenu, setMobile, setAnimateMobileMenu } =
    useContext(Context);

  const handleClose = (setMobile, setAnimate) => {
    handleCloseMenu(setMobile, setAnimate);
  };

  return (
    <li
      className={desktop ? styles.menu_desktop : null}
      onClick={() => handleClose(setMobile, setAnimateMobileMenu)}
    >
      <a
        href={`#${items_menu[index]}`}
        className={`${styles.a} ${
          currentMenu === items_menu[index] ? styles.current_menu : ""
        }`}
      >
        {text}
      </a>
    </li>
  );
};

export default NavItem;
