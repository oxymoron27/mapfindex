import React from "react";
import { postLocationService } from "../services/locationService";

const AddComment = ({ setStreetArtObject, streetArtObject, handleReloadToggle }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStreetArtObject(prev => ({ ...prev, [name]: value }));
        console.log(streetArtObject);
    };

    const sendToBackend = async () => {
        if (streetArtObject.lat && streetArtObject.lng && streetArtObject.descriptionLocation && streetArtObject.titleLocation) {
            try {
                await postLocationService(streetArtObject);
                alert('Location saved successfully!')
                setStreetArtObject({});
                handleReloadToggle();
            }
            catch (error) {
                alert('Error saving location: ' + error.message);
            }

        }

        else {
            alert('Your streetart is missing a position, a name or a description.');
        }
    }


    return (
        <div>
            <label className="label" htmlFor="titleLocation">Title:</label>
            <br></br>
            <input className="input" type="text" id="titleLocation" name="titleLocation" onChange={handleChange} value={streetArtObject.titleLocation} />
            <br></br>
            <br></br>
            <label className="label" htmlFor="descriptionLocation">Description:</label>
            <br></br>
            <textarea
                className="textarea"
                id="descriptionLocation"
                name="descriptionLocation"
                onChange={handleChange}
                value={streetArtObject.descriptionLocation}
                rows={5}
            />
            <br></br>
            <br></br>
            <button className="button"
                onClick={sendToBackend}>Save Location</button>
            <br></br>
        </div>

    );
}

export default AddComment;
