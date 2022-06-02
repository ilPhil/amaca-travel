
import { Map, GeolocateControl } from "react-map-gl";

function MapBox() {
    return <Map
        mapboxAccessToken={process.env.mapbox_key}
        mapStyle="mapbox://styles/mrcalavera/cl3u94ry8002b15qg5txm1t9y/draft"
        style={{width: 600, height: 400,}} // set map wdt hgt here
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