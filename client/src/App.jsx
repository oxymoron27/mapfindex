import './App.css';
import MapComponent from './components/Map';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import { useState } from 'react';

function App() {
  const [clickedAddButton, setClickedAddButton] = useState(false);
  const [position, setPosition] = useState(null);
  const [streetArtObject, setStreetArtObject] = useState({});
  const [reloadToggle, setReloadToggle] = useState(false);

  const handleAddButtonClick = () => {
    setClickedAddButton(!clickedAddButton);

  };

  const handleReloadToggle = () => {
    setReloadToggle(!reloadToggle);

  };
  return (<div >
    <Header className="header" />
    <div className="map-wrapper">
      <MapComponent
        className="map-container"
        clickedAddButton={clickedAddButton}
        position={position}
        setPosition={setPosition}
        setStreetArtObject={setStreetArtObject}
        streetArtObject={streetArtObject}
        reloadToggle={reloadToggle}
      />
      <SideMenu
        className="side-menu floating"
        handleAddButtonClick={handleAddButtonClick}
        clickedAddButton={clickedAddButton}
        setStreetArtObject={setStreetArtObject}
        streetArtObject={streetArtObject}
        position={position}
        handleReloadToggle={handleReloadToggle}
      />
    </div>
  </div >)
}

export default App;
