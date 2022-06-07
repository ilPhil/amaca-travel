import Hero from "../components/Hero";
import Image from "next/image";
import Map from "../components/Map";
import CardItem from "../components/CardItem/CardItem";
import styles from "../styles/Home.module.css";
import { getCities } from "../utils/fetch";
import Head from "next/head";
import Footer from "../components/Footer/index.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pixel Travel</title>
        <div className={styles.box}>
          <h1 className={styles.text}>Pixel Travel</h1>
        </div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero />
      <CardItem />
      <main className={styles.main}>
        <section>
          <Map getCities={getCities} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
