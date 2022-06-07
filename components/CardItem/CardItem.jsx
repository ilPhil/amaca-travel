import style from "./index.module.scss";
import { getActivities } from "../../utils/fetch";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CardItem() {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    getActivities().then((act) => setActivity(act));
  }, []);

  const data = activity.data;

 

  return (
    <div className={style.cardsWrapper}>
      {data?.map(({uuid, cover_image_url, title,about}) => (
          <Link href={`activity/${uuid}`} key={uuid}>

          <div className={style.card} >
            <div>
              <img className={style.poster} src={cover_image_url} />
              <div className={style.container}>
                <h4 className={style.title}>{title.substring(0,20)}</h4>
                <p className={style.description}>
                  {about.substring(0, 50)}
                </p>
              </div>
            </div>
          </div>
          </Link>
        ))}
    </div>
  );
}
