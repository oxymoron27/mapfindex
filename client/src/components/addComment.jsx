import React from "react";

const AddComment = ({ setStreetArtObject, streetArtObject }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStreetArtObject(prev => ({ ...prev, [name]: value }));
        console.log(streetArtObject);
    };

    const sendToBackend = () => {
        fetch('http://localhost:4000/streetart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                streetArtObject
            ),
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));

    }







    return (
        <div>
            <label htmlFor="titleLocation">Title:</label>
            <br></br>
            <input type="text" id="titleLocation" name="titleLocation" onChange={handleChange} value={streetArtObject.titleLocation} />
            <br></br>
            <br></br>
            <label htmlFor="descriptionLocation">Description:</label>
            <br></br>
            <textarea
                id="descriptionLocation"
                name="descriptionLocation"
                onChange={handleChange}
                value={streetArtObject.descriptionLocation}
                rows={5}
            />
            <br></br>
            <br></br>
            <button onClick={sendToBackend}>Save Location</button>
            <br></br>
        </div>

    );
}

export default AddComment;
