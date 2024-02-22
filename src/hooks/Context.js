"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [homeVisible, setHomeVisible] = useState(0);
  const [therapiesVisible, setTherapiesVisible] = useState(0);
  const [traumaVisible, setTraumaVisible] = useState(0);
  const [aboutVisible, setAboutVisible] = useState(0);
  const [servicesVisible, setServicesVisible] = useState(0);
  const [contactsVisible, setContactsVisible] = useState(0);
  const [currentMenu, setCurrentMenu] = useState("home");
  const [count, setCount] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [animateMobileMenu, setAnimateMobileMenu] = useState(true);

  const items_menu = [
    "home",
    "therapies",
    "trauma",
    "about",
    "services",
    "contacts",
  ];

  useEffect(() => {
    eval(items_menu[0] + "Visible") > eval(items_menu[1] + "Visible")
      ? setCurrentMenu(items_menu[0])
      : eval(items_menu[1] + "Visible") > eval(items_menu[2] + "Visible")
      ? setCurrentMenu(items_menu[1])
      : eval(items_menu[2] + "Visible") > eval(items_menu[3] + "Visible")
      ? setCurrentMenu(items_menu[2])
      : eval(items_menu[3] + "Visible") > eval(items_menu[4] + "Visible")
      ? setCurrentMenu(items_menu[3])
      : eval(items_menu[4] + "Visible") > eval(items_menu[5] + "Visible")
      ? setCurrentMenu(items_menu[4])
      : setCurrentMenu(items_menu[5]);
  });

  return (
    <Context.Provider
      value={{
        homeVisible,
        setHomeVisible,
        therapiesVisible,
        setTherapiesVisible,
        traumaVisible,
        setTraumaVisible,
        aboutVisible,
        setAboutVisible,
        servicesVisible,
        setServicesVisible,
        contactsVisible,
        setContactsVisible,
        currentMenu,
        setCurrentMenu,
        count,
        setCount,
        items_menu,
        mobile,
        setMobile,
        animateMobileMenu,
        setAnimateMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
