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
    <div>
      <Header />
      
      <Link href={"/"}>
        <a>Back</a>
      </Link>

      <div className={styles.city_page_data}>
        <h1 className={styles.city_page_name}>{name}</h1>
        <div>
          <img className={styles.city_page_poster} src={cover_image_url} />
        </div>
        <p className={styles.city_page_content}>{content}</p>
      </div>

      <div>
        {activitiesData.data?.map(({ cover_image_url, uuid, title, about }) => (
          <Link href={`activity/${uuid}`} key={uuid}>
            <div>
              <div>
                <img src={cover_image_url} />
                <div>
                  <h4>{title.substring(0, 20)}</h4>
                  <p>
                    {about.substring(0, 80)} <br />
                    <br /> <p>Per Maggiori Info.....</p>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}

// export async function getServerSideProps() {
//     const router = useRouter();
//     const [cityDota, setCityDota] = useState([]);
//     useEffect(() => {
//         getCities(router.query.id).then((data) => setCityDota(data));
//     }, []);

//     const response = await fetch(`https://api.musement.com/api/v3/cities/${cityDota.id}/activities/data`)
//     const data = await response.json()

//     return {
//         props: {
//             activities: data,
//         }
//     }
// }
