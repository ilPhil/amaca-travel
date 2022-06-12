import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { getCities, getCityActivities } from "../../utils/fetch";
import Link from "next/dist/client/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

import styles from "./style.module.scss";

export default function City({ activities }) {
  const router = useRouter();
  const carousel = useRef();
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
      {/* CITY */}
      <div className={styles.pippo_wrapper}>
        <div className={styles.city_page_data}>
          <h1 className={styles.city_page_name}>{name}</h1>
          <img className={styles.city_page_poster} src={cover_image_url} />
          <p className={styles.city_page_content}>{content}</p>
        </div>
      </div>
      
      {/* ACTIVITIES */}
      <div className={styles.paperino_wrapper}>
        <motion.div
          ref={carousel}
          className={styles.carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -1600}}
            className={styles.inner_carousel}
          >
            {activitiesData.data?.map(
              ({ cover_image_url, uuid, title, about }) => (
                <motion.div className={styles.item} key={uuid}>
                  <div key={uuid} className={styles.activity_container}>
                    <div>
                      <img
                        className={styles.activity_poster}
                        src={cover_image_url}
                        alt={"Activity picture"}
                      />
                      <div className={styles.text_container}>
                        <h4 className={styles.activity_title}>
                          {title.substring(0, 20)}
                        </h4>
                        <p className={styles.activity_about}>
                          {about.substring(0, 22) + "..."}
                          <Link href={`../activity/${uuid}`}>
                            <p className={styles.more_info}>
                              Per Maggiori Info.....
                            </p>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
