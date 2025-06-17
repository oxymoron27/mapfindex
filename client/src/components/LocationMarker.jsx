
import { useMapEvents, Marker, Popup } from 'react-leaflet';

function LocationMarker({ position, setPosition, setStreetArtObject }) {

    useMapEvents({
        click: (e) => {
            console.log('Klick auf Karte:', e.latlng);
            const { lat, lng } = e.latlng;
            setPosition(prev => ({ ...prev, lat: lat, lng: lng }));
            setStreetArtObject(prev => ({ ...prev, lat: lat, lng: lng, titleLocation: '', titleDescription: '' }));
        }

    })
    if (position) {
        return <Marker position={position}></Marker>;
    }


    else return null;

}

export default LocationMarker;



