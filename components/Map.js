// import MapCard from "./MapCard/MapCard";
import * as React from "react";
import { Map, GeolocateControl, Marker, Popup } from "react-map-gl";
import { getCities } from "../utils/fetch";

function MapBox() {
  const [showPopup, setShowPopup] = React.useState(true);
  // const data = getCities();
  const [coordinates, setCoordinates] = React.useState([]);
  // const { latitude, longitude } = data;
  // const latitude = data.latitude;
  // const longitude = data.longitude;
  React.useEffect(() => {
    getCities().then((data) => setCoordinates(data));
  }, []);

  return (
    <Map
      mapboxAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/mrcalavera/cl3u94ry8002b15qg5txm1t9y/draft"
      style={{ width: 600, height: 400 }} // set map wdt hgt here
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 4,
      }}
    >
      {coordinates &&
        coordinates.map((city) => (
          <Marker
            key={city.id}
            longitude={city.longitude}
            latitude={city.latitude}
            anchor={"top"}
          ></Marker>
        ))}
      {/* {showPopup && (
            <Popup longitude={-100} latitude={40} anchor="top" onClose={() => setShowPopup(false)}>Gran festa</Popup>
        )} */}

      <GeolocateControl />
    </Map>
  );
}

export default MapBox;
