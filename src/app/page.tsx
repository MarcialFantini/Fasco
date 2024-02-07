import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Deals } from "@/components/Deals";
import { Arrivals } from "@/components/Arrivals";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Deals></Deals>
      <Arrivals></Arrivals>
    </main>
  );
}
