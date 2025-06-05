import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';






const MapComponent = ({ clickedAddButton, position, setPosition, setStreetArtObject, streetArtObject }) => {
    const [savedPositions, setSavedPositions] = useState([]);

    const getFromBackend = async () => {
        try {
            const response = await fetch('http://localhost:4000/streetart', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const promisedPositions = await response.json()
            setSavedPositions(promisedPositions);
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    return (<div><MapContainer
        center={[51.505, -0.09]} // Standardposition der Karte (z.B. London)
        zoom={13}
        style={{ height: '100vh', width: '100%', cursor: 'default' }}
        scrollWheelZoom={false}
    >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {clickedAddButton && (<LocationMarker position={position} setPosition={setPosition} setStreetArtObject={setStreetArtObject} streetArtObject={streetArtObject} />)}

    </MapContainer>
        <button onClick={getFromBackend}>Get it Back! </button>
    </div >);
}
export default MapComponent; 