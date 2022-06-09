import { getActivities } from "../../utils/fetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import styles from "./style.module.scss";
import Header from "../../components/Header";

export default function Id() {
  const router = useRouter();
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    getActivities(router.query.id).then((act) => setActivityData(act));
  }, []);

  const { about, title, cover_image_url } = activityData;

  return (
    <div className={styles.wrapper}>
    <Header/>
      <div>
        <img className={styles.wrapperimg} src={cover_image_url}></img>
      </div>
      <div className={styles.wrappertitle}>{title}</div>
      <br></br>
      <div className={styles.wrapper__desc}>{about}</div>

      <Footer/>
    </div>
  );
}
