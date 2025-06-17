import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import { getLocationService } from "../services/locationService";
import React, { useState, useEffect } from 'react';





const MapComponent = ({ clickedAddButton, position, setPosition, setStreetArtObject, streetArtObject, reloadToggle }) => {
    const [savedPositions, setSavedPositions] = useState([]);


    const getFromBackend = async () => {
        try {
            const promisedPositions = await getLocationService();
            setSavedPositions(promisedPositions);
        }

        catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getFromBackend();
    }, [reloadToggle]); //reload if user submits new location



    return (<div>
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '100vh', width: '100%', cursor: 'default' }}
            scrollWheelZoom={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {clickedAddButton &&
                (<LocationMarker
                    position={position}
                    setPosition={setPosition}
                    setStreetArtObject={setStreetArtObject}
                    streetArtObject={streetArtObject} />)}
            {savedPositions.map((savedPosition, index) => (
                <Marker
                    key={index}
                    position={[savedPosition.lat, savedPosition.lng]}>
                    <Popup>
                        <h3>{savedPosition.descriptionLocation}</h3>
                        <p>{savedPosition.titleLocation}</p>
                    </Popup>
                </Marker>
            ))}

        </MapContainer>
    </div >);
}
export default MapComponent;


