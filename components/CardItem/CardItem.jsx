import { getActivities } from "../../utils/fetch";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import style from "./index.module.scss";

export default function Slide() {
  const [activity, setActivity] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    getActivities().then((act) => setActivity(act.data));
  }, []);

  return (
    <div className={style.bigbox}>
      <motion.div
        ref={carousel}
        className={style.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -1600 }}
          className={style.inner_carousel}
        >
          {activity.map(({ uuid, cover_image_url, title, about }) => (
            <motion.div className={style.item} key={uuid}>
              <div className={style.card}>
                <div>
                  <img className={style.poster} src={cover_image_url} />
                  <div className={style.container}>
                    <h4 className={style.title}>{title.substring(0, 25)}</h4>

                    <p className={style.description}>
                      {about.substring(0, 60)+"..."}
                      <Link href={`activity/${uuid}`} key={uuid}>
                        <p className={style.info}>Per Maggiori Info.....</p>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
