
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';

function LocationMarker({ position, setPosition, setStreetArtObject, streetArtObject }) {

    useMapEvents({
        click: (e) => {
            setPosition(e.latlng);

            setStreetArtObject(prev => ({ ...prev, lat: position.lat, lng: position.lng }));
            console.log('hansi');
            console.log(e.latlng);
            console.log(streetArtObject);
        }

    })
    if (position) {
        return <Marker position={position}></Marker>;
    }


    else return null;

}

export default LocationMarker;



