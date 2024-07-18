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
    ["home", "Home"],
    ["therapies", "Terapias"],
    ["about", "Sobre Mim"],
    ["trauma", "Trauma Informed"],
    ["services", "Meu Servir"],
    ["contacts", "Contatos"],
  ];

  const services_menu = [
    ["Atendimentos Terapêuticos", "therapies"],
    "Yoga",
    "Yoga para crianças",
    "Educação Emocional para Crianças",
    "Oficina Pequenos Inventores",
  ];

  useEffect(() => {
    eval(items_menu[0][0] + "Visible") > eval(items_menu[1][0] + "Visible")
      ? setCurrentMenu(items_menu[0][0])
      : eval(items_menu[1][0] + "Visible") > eval(items_menu[2][0] + "Visible")
      ? setCurrentMenu(items_menu[1][0])
      : eval(items_menu[2][0] + "Visible") > eval(items_menu[3][0] + "Visible")
      ? setCurrentMenu(items_menu[2][0])
      : eval(items_menu[3][0] + "Visible") > eval(items_menu[4][0] + "Visible")
      ? setCurrentMenu(items_menu[3][0])
      : eval(items_menu[4][0] + "Visible") > eval(items_menu[5][0] + "Visible")
      ? setCurrentMenu(items_menu[4][0])
      : setCurrentMenu(items_menu[5][0]);
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
