import styles from "./page.module.css";
import "./globals.css";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Therapies from "@/components/Therapies";
import Trauma from "@/components/Trauma";

export default function Page() {
  return (
    <div className={styles.main}>
      <Header />
      <main>
        <Therapies />
        <Trauma />
      </main>
    </div>
  );
}
