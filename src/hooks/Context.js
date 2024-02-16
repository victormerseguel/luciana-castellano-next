"use client";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [homeVisible, setHomeVisible] = useState(null);
  const [traumaVisible, setTraumaVisible] = useState(null);
  const [aboutVisible, setAboutVisible] = useState(null);
  const [servicesVisible, setServicesVisible] = useState(null);
  const [contactsVisible, setContactsVisible] = useState(null);
  const [count, setCount] = useState(null);

  return (
    <Context.Provider
      value={{
        homeVisible,
        setHomeVisible,
        traumaVisible,
        setTraumaVisible,
        aboutVisible,
        setAboutVisible,
        servicesVisible,
        setServicesVisible,
        contactsVisible,
        setContactsVisible,
        count,
        setCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};
