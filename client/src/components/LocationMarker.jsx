
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';

function LocationMarker({ position, setPosition, setStreetArtObject }) {

    useMapEvents({
        click: (e) => {
            setPosition(e.latlng);

            setStreetArtObject(prev => ({ ...prev, lat: position.lat, lng: position.lng }));

        }

    })
    if (position) {
        return <Marker position={position}></Marker>;
    }


    else return null;

}

export default LocationMarker;



