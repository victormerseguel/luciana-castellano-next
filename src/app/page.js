import styles from "./page.module.css";
import "./globals.css";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Therapies from "@/components/Therapies";
import Trauma from "@/components/Trauma";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";

export default function Page() {
  return (
    <div className={styles.main}>
      <Header />
      <main>
        <Therapies />
        <Trauma />
        <About />
        <Testimonials />
        <Services />
        <Contacts />
      </main>
    </div>
  );
}
