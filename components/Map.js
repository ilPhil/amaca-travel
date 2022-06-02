// import CardItem from "./CardItem/CardItem";
import { Map, GeolocateControl, Marker } from "react-map-gl";

function MapBox() {
  return (
    <Map
      mapboxAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/mrcalavera/cl3u94ry8002b15qg5txm1t9y/draft"
      style={{ width: 1900, height: 600 }} // set map wdt hgt here
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3,
      }}
    >
      <Marker
        style={{ width: 100, height: 20 }}
        longitude={-100}
        latitude={40}
        anchor="bottom"
      ></Marker>
      <GeolocateControl />
    </Map>
  );
}

export default MapBox;
