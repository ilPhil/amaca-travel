import { useState, useEffect } from "react";
import { Map, GeolocateControl, Marker, Popup } from "react-map-gl";
// import { getCities } from '../utils/fetch';
import style from "../styles/map.module.scss";

function MapBox({ getCities }) {
  // const [showPopup, setShowPopup] = useState();
  // const [value, setValue] = React.useState();
  const [database, setDatabase] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({}); // obtaining city object with click on marker

  // GET DATA EVENT
  useEffect(() => {
    getCities().then((city) => setDatabase(city));
  }, []);
  console.log(selectedLocation.id);
  // React.useEffect(() => {
  //     // devo ottenere all'hover l'id del marker e
  //     // passare la foto o ad un altro marker o ad un popup
  // }, [value]) //in teoria si attiva al cambio state di value

  return (
    <Map
      mapboxAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/mrcalavera/cl3u94ry8002b15qg5txm1t9y/draft"
      style={{ width: 600, height: 400 }} // set map wdt hgt here
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 1,
      }}
    >
      {database &&
        database.map((city) => (
          <Marker
            key={city.id}
            longitude={city.longitude}
            latitude={city.latitude}
            anchor={"top"}
          >
            {/* <img className={style.marker} src={city.cover_image_url} /> */}
            <p
              onClick={() => setSelectedLocation(city)}
              className={style.pinner}
            >
              📍
            </p>
          </Marker>
        ))}
      {/* {selectedLocation.id === database.id ? <Popup longitude={data.longitude} latitude={data.latitude} anchor="top">
            {data.name}    when I take the data with click I need to pass them to the popup; HOW?
        </Popup> : false }      */}

      <GeolocateControl />
    </Map>
  );
}

export default MapBox;
