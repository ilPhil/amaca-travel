
import { Map } from "react-map-gl";

function MapBox() {
    return <Map
        mapboxAccessToken={process.env.mapbox_key}
        mapStyle="mapbox://styles/mrcalavera/cl3u94ry8002b15qg5txm1t9y/draft"
        initialViewState={{
            width: "50vw",
            height: "50vh",
            longitude: -100,
            latitude: 40,
            zoom: 3
        }}
    >
    </Map>
}

export default MapBox;