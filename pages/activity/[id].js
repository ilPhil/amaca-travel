import { getActivities } from "../../utils/fetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import styles from "./style.module.scss";
import Header from "../../components/Header";

export default function Id({data}) {


  const router = useRouter();
  const [activityData, setActivityData] = useState([]);
  const [price, setPrice] = useState([])

  useEffect(() => {
    getActivities(router.query.id).then((act) => setActivityData(act));
  }, []);
//   console.log(activityData)
  useEffect(() => {
    getActivities(router.query.id).then((price) => setPrice(price.retail_price.formatted_value))
  }, [activityData])

  
  console.log(price)
  const { about, title, cover_image_url } = activityData;

  // const price = activityData.retail_price.formatted_value;


  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>

        <img src={cover_image_url}/>

        <div className={styles.wrappertitle}> {title} </div>

        <div className={styles.wrapperdesc}> {about} </div>
    <div className={styles.wrapperprice}> Prezzo {price} </div>
        <button className={styles.wrapper__btn}>Acquista</button>

        </div>

    <Footer/>

    </div>

  );

}