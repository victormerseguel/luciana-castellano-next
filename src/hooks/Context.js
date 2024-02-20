"use client";
import { createContext, useState } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [homeVisible, setHomeVisible] = useState(null);
  const [therapiesVisible, setTherapiesVisible] = useState(null);
  const [traumaVisible, setTraumaVisible] = useState(null);
  const [aboutVisible, setAboutVisible] = useState(null);
  const [servicesVisible, setServicesVisible] = useState(null);
  const [contactsVisible, setContactsVisible] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [count, setCount] = useState(null);

  const items_menu = [
    "home",
    "therapies",
    "trauma",
    "about",
    "services",
    "contacts",
  ];

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
      }}
    >
      {children}
    </Context.Provider>
  );
};
