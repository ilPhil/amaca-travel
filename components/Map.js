import mapboxgl from "mapbox-gl";
import { GeolocateControl, Map } from "react-map-gl";

function MapBox() {
    const map = new mapboxgl.Map({
        container: "map", // container ID
        center: [7.57, 41.893, 12.499], //starting pos.
        zoom: 13, // starting zoom
    })
    return <Map
        mapboxAccessToken={process.env.mapbox_key}
        mapStyle="mapbox://styles/mrcalavera/cl3u94ry8002b15qg5txm1t9y/draft"
        initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3
        }}
    >
        <GeolocateControl />
    </Map>
}

export default MapBox;