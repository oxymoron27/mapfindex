import './App.css';
import MapComponent from './components/Map';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import { useState } from 'react';

function App() {
  const [clickedAddButton, setclickedAddButton] = useState(false);
  const [position, setPosition] = useState('');
  const [streetArtObject, setStreetArtObject] = useState({});

  const handleAddButtonClick = () => {
    setclickedAddButton(!clickedAddButton); // State auf true setzen

  };
  return (<div >
    <Header />
    <div class='grid-container'>
      <MapComponent class="map-container" clickedAddButton={clickedAddButton} position={position} setPosition={setPosition} setStreetArtObject={setStreetArtObject} streetArtObject={streetArtObject} />
      <SideMenu handleAddButtonClick={handleAddButtonClick} clickedAddButton={clickedAddButton} setStreetArtObject={setStreetArtObject} streetArtObject={streetArtObject} position={position} />
    </div>
  </div >)
}

export default App;
