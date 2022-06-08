import City from './index.jsx'
import { getCities } from '../../utils/fetch'
// import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import styles from "./style.module.scss";

export default function IdCity () {
    // const router = useRouter();

    const [cityData, setCityData] = useState();

    useEffect(() => {
        getCities('ec1dd48e-339d-11ea-ba3c-029a16533fe4').then(data => setCityData(data))
      }, []);

      const { content,cover_image_url } = cityData;

      console.log(cityData);
    

    return (
        <div>
            <div>
                { content }
            </div>

            <div>
            <img src={cover_image_url}> 
            </img>
            </div>
        </div>
    )
}