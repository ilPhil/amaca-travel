import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCities, getActivities } from "../../utils/fetch";
import Link from "next/dist/client/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./style.module.scss";

export default function City() {
  const router = useRouter();
    const [cityData, setCityData] = useState([]);
    const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    getCities(router.query.id).then((data) => setCityData(data));
  }, []);
    
    useEffect(() => {
        getActivities().then((info) => setActivitiesData(info));
    }, [])

  const { name, content, cover_image_url } = cityData;

  return (
    <div className={city_page_container}>
      <Header />
      <Link href={"/"}>
        <a>🔙</a>
      </Link>
      <div className={styles.city_page_data}>
        <h1 className={styles.city_page_name}>{name}</h1>
        <div>
          <img className={styles.city_page_poster} src={cover_image_url}/>
        </div>
        <p className={styles.city_page_content}>{content}</p>
          </div>
        

      <Footer />
    </div>
  );
}
