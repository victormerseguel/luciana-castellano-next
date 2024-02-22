"use client";
import styles from "./page.module.css";
import "./globals.css";

import { ContextProvider } from "@/hooks/Context";

import Header from "@/components/Header";
import Therapies from "@/components/Therapies";
import Trauma from "@/components/Trauma";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import MenuMobile from "@/components/MenuMobile";

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
