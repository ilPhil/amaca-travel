import Hero from "../components/Hero";
import Image from "next/image";
import Map from "../components/Map";
import CardItem from "../components/CardItem/CardItem";
import styles from "../styles/Home.module.css";
import { getCities } from "../utils/fetch";
import Footer from "../components/Footer/index.js";

export default function Home() {
  return (
  <div className={styles.container}>
    <Hero />
    <CardItem />
    <main className={styles.main}>
      <section>
        <Map />
      </section>
    </main>
    <Footer />
  </div>
  );
}
