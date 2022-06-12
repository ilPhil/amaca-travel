import { getActivities } from "../../utils/fetch";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import styles from "./style.module.scss";
import Header from "../../components/Header";
import { CartContext } from "../../store/provider";
// import { Item } from "framer-motion/types/components/Reorder/Item";

export default function Id({ data }) {
  const router = useRouter();
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    getActivities(router.query.id).then((act) => setActivityData(act));
  }, [router]);

  const { about, title, cover_image_url, retail_price } = activityData;
  const { cart, addActivity} = useContext(CartContext);
console.log(cart)
  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.wrapper__title}> {title} </div>
        <img className={styles.wrapper__img} src={cover_image_url} />
      </div>
      <div className={styles.container}>
        <div className={styles.container__about}> {about} </div>
        <div className={styles.container__price}>
          <div> Prezzo {retail_price?.formatted_value} </div>
        </div>
        <button
          onClick={() => addActivity(activityData)}
          className={styles.container__btn}
        >
          Acquista
        </button>
        
      </div>
      <Footer />
    </div>
  );
}
