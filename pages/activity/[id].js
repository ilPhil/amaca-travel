import { getActivities } from "../../utils/fetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import styles from "./style.module.scss";
import Header from "../../components/Header";
import { useDispatch } from 'react-redux';

export default function Id({ data }) {
  const router = useRouter();
  const [activityData, setActivityData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getActivities(router.query.id).then((act) => setActivityData(act));
  }, [router]);

  const { about, title, cover_image_url, retail_price } = activityData;

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <img src={cover_image_url} />
        <div className={styles.wrappertitle}> {title} </div>
        <div className={styles.wrapperdesc}> {about} </div>
        <div className={styles.wrapperprice}>
          {" "}
          Prezzo {retail_price?.formatted_value}{" "}
        </div>
        <button onClick={() => dispatch(addToCart(product))} className={styles.wrapper__btn}>Acquista</button>
      </div>

      <Footer />
    </div>
  );
}
