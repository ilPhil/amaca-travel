import style from "./index.module.scss";
import { getActivities } from "../../utils/fetch";
import { useState, useEffect } from "react";

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
        ))}
    </div>
  );
}
