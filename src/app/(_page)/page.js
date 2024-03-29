"use client";
import styles from "./page.module.css";
import "../globals.css";
import "./globals_home.css";

import { ContextProvider } from "@/app/(_page)/hooks/Context";

import Header from "@/app/(_page)/components/Header";
import Therapies from "@/app/(_page)/components/Therapies";
import Trauma from "@/app/(_page)/components/Trauma";
import About from "@/app/(_page)/components/About";
import Testimonials from "@/app/(_page)/components/Testimonials";
import Services from "@/app/(_page)/components/Services";
import Contacts from "@/app/(_page)/components/Contacts";
import MenuMobile from "@/app/(_page)/components/MenuMobile";

export default function Page() {
  return (
    <div className={styles.main}>
      <ContextProvider>
        <MenuMobile />
        <Header />
        <main>
          <Therapies />
          <Trauma />
          <About />
          {/* <Testimonials /> */}
          <Services />
          <Contacts />
        </main>
      </ContextProvider>
    </div>
  );
}
