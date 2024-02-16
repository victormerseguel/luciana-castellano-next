import styles from "./page.module.css";
import "./globals.css";

import Header from "@/components/Header";
import Therapies from "@/components/Therapies";
import Trauma from "@/components/Trauma";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import { ContextProvider } from "@/hooks/Context";

export default function Page() {
  return (
    <div className={styles.main}>
      <ContextProvider>
        <Header />
        <main>
          <Therapies />
          <Trauma />
          <About />
          <Testimonials />
          <Services />
          <Contacts />
        </main>
      </ContextProvider>
    </div>
  );
}
