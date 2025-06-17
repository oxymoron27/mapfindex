
import AddButton from './addButton';
import AddComment from './addComment';

function SideMenu({ setStreetArtObject, streetArtObject, handleAddButtonClick, clickedAddButton, className, handleReloadToggle }) {
    return (
        <div className={className}>
            {clickedAddButton ? (
                <>
                    <h2>Add Location</h2>
                    {!streetArtObject.lat && (<p>Click on the card to create a new streetart object!</p>)}
                    {streetArtObject.lat && (
                        <AddComment
                            setStreetArtObject={setStreetArtObject}
                            streetArtObject={streetArtObject}
                            handleReloadToggle={handleReloadToggle}
                        />
                    )}
                    <button className="button" onClick={handleAddButtonClick}>Cancel</button>
                </>
            ) : (
                <>
                    <AddButton handleAddButtonClick={handleAddButtonClick} />
                    <button className="button">Delete Location</button>
                </>
            )}
        </div>
    );

}

export default SideMenu;  