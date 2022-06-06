import { useState, useEffect } from "react";
import { Map, GeolocateControl, Marker, Popup } from "react-map-gl";
import style from "../styles/map.module.scss";

function MapBox({ getCities }) {
  const [database, setDatabase] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({}); // obtaining city object with click on marker

  // GET DATA EVENT
  useEffect(() => {
    getCities().then((city) => setDatabase(city));
  }, []);
  console.log(selectedLocation.id);

  return (
    <div className={style.map_container}>
      {/* MAP SIDE CARD */}
      <div className={style.map_card}>
        <img
          className={style.card_poster}
          src={
            selectedLocation.cover_image_url ||
            "https://images.musement.com/cover/0002/37/rome-jpg_header-136539.jpeg"
          }
        />
        <div className={style.card_info}>
          <h1 className={style.card_info_name}>
            {selectedLocation.name || "Roma"}
          </h1>
          <p className={style.card_info_description}>
            {selectedLocation.meta_description || "Scopri le attività"}
          </p>
        </div>
      </div>
      {/* MAP ELEMENT */}
      <Map
        mapboxAccessToken={process.env.mapbox_key}
        mapStyle="mapbox://styles/mrcalavera/cl3u94ry8002b15qg5txm1t9y/draft"
        style={{ width: "50vw", height: "50vh" }} // set map wdt hgt here
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 1,
        }}
      >
        {
          database?.map((city) => (
            <Marker
              key={city.id}
              longitude={city.longitude}
              latitude={city.latitude}
              anchor={"center"}
            >
              <img
                onClick={() => setSelectedLocation(city)}
                className={style.pinner}
                src="/Map-Pin.svg"
              />
            </Marker>
          ))}
        <GeolocateControl />
      </Map>
    </div>
  );
}

export default MapBox;
