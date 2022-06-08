import style from "./index.module.scss";
import { getActivities } from "../../utils/fetch";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function CardItem() {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    getActivities().then((act) => setActivity(act));
  }, []);

  return (
    <div className={style.cardsWrapper}>
      {activity.data?.map(({uuid, cover_image_url, title,about}) => (
          <Link href={`activity/${uuid}`} key={uuid}>

          <div className={style.card} >
            <div>
              <img className={style.poster} src={cover_image_url} />
              <div className={style.container}>
                <h4 className={style.title}>{title.substring(0,20)}</h4>
                <p className={style.description}>
                  {about.substring(0, 50)}

export default function CardItem(title, description) {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    getActivities().then((act) => setActivity(act.data));
  }, []);

  console.log(activity, "ACTIVITY");

  const formatContentText = (content) => {
    const textArr = content && content.split(" ");
    return content && textArr.splice(1, textArr.length - 2).join(" ");
  };

  return (
    <div className={style.cardsWrapper}>
      {/* {console.log(data)} */}
      {activity &&
        activity.map((actList) => (
          <div className={style.card} key={actList.uuid}>
            <div>
              <img className={style.poster} src={actList.cover_image_url} />
              <div className={style.container}>
                <h1 className={style.title}>{actList.title}</h1>
                <p className={style.description}>
                  {formatContentText(actList.about)}

                </p>
              </div>
            </div>
          </div>
          </Link>
        ))}
    </div>
  );
}
