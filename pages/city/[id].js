import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCities, getCityActivities } from "../../utils/fetch";
import Link from "next/dist/client/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./style.module.scss";

export default function City({ activities }) {
  const router = useRouter();
  const [cityData, setCityData] = useState([]);
  const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    getCities(router.query.id).then((data) => setCityData(data));
  }, []);

  useEffect(() => {
    getCityActivities(cityData.id).then((info) => setActivitiesData(info));
  }, [cityData]);

  const { name, content, cover_image_url } = cityData;

  return (
    <div className={styles.card_body}>
      <Header />
      <div className={styles.pippo_wrapper}>
        <div className={styles.city_page_data}>
          <h1 className={styles.city_page_name}>{name}</h1>
          <img className={styles.city_page_poster} src={cover_image_url} />
          <p className={styles.city_page_content}>{content}</p>
        </div>

        <div className={styles.paperino_wrapper}>
          {activitiesData.data?.map(
            ({ cover_image_url, uuid, title, about }) => (
              <div className={styles.activity_container}>
                <Link href={`../activity/${uuid}`} key={uuid}>
                  <a>
                    <img className={styles.activity_poster} src={cover_image_url} alt={"Activity picture"} />
                    <div>
                      <h4 className={styles.activity_title}>{title.substring(0, 20)}</h4>
                      <p className={styles.activity_about}>
                        {about.substring(0, 80)} <br />
                        <br /> <p>Per Maggiori Info.....</p>
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
