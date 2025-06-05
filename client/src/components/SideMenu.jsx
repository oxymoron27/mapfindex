
import AddButton from './addButton';
import AddComment from './addComment';

function SideMenu({ setStreetArtObject, streetArtObject, handleAddButtonClick, clickedAddButton }) {
    return <div class="side-menu" >
        {clickedAddButton === false && <>
            <AddButton handleAddButtonClick={handleAddButtonClick} />
            <br></br>
            <button> Delete Location</button>
        </>}
        {clickedAddButton === true && <>
            <h2>Add Location</h2>
            <AddComment setStreetArtObject={setStreetArtObject} streetArtObject={streetArtObject}></AddComment>
            <br></br>
            <button onClick={handleAddButtonClick}>Cancel</button></>}
        <br></br>

    </div >
}

export default SideMenu;  