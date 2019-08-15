import React from 'react';

function AddRestaurantForm({ addNewRestaurant, closeAddRestaurantWindow, newRestaurant }) {
    
    const handleSubmit = e => {
        e.preventDefault();
        const rName = document.getElementById("restaurantName").value;
        const rAddress = document.getElementById("restaurantAddress").value;
        const rLng = parseFloat(document.getElementById("lng").value);
        const rLat = parseFloat(document.getElementById("lat").value);
        if (rName === '' || rAddress === '') {
            if (rName === '') {
                const rNLabel = document.getElementById("rNLabel");
                rNLabel.innerHTML = 'Restaurant Name: Please fill in this field';
                rNLabel.style.color = "red";
                if (rAddress === '') {
                    const rALabel = document.getElementById("rALabel");
                    rALabel.innerHTML = 'Restaurant Address: Please fill in this field';
                    rALabel.style.color = "red";
                }
            } else {
                const rALabel = document.getElementById("rALabel");
                rALabel.innerHTML = 'Restaurant Address: Please fill in this field';
                rALabel.style.color = "red";
            }
        } else {
            const rJSON = {
                geometry: {
                    location: {
                        lat:rLat,
                        lng: rLng
                    }
                },
                name: rName,
                vicinity: rAddress,
                place_id:Date.now(),
                rating: 0,
                user_ratings_total:0
            };
            addNewRestaurant(rJSON);
        }
    }
    return (
        <div className="add-restaurant-map">
            <button className="xButton fr"
                onClick={(e) => {
                    closeAddRestaurantWindow();
                }}
            >x</button>
            <form>
                <label htmlFor="restaurantName" id="rNLabel">Restaurant Name: </label>
                <input type="text" id="restaurantName" name="restaurantName" />
                <label htmlFor="restaurantAddress" id="rALabel">Restaurant Address: </label>
                <input type="text" id="restaurantAddress" name="restaurantName" />
                <label htmlFor="lat">Restaurant coordinates: </label>
                <input type="text" name="lat" id="lat" disabled value={newRestaurant.latLng.lat()} /><br></br>
                <input type="text" name="lng" id="lng" disabled value={newRestaurant.latLng.lng()} />
                <label htmlFor="textArea">Description</label>
                <textarea id="textArea"></textarea>
                <button onClick={handleSubmit}>Add Restaurant</button>
            </form>
        </div>
    );
}

export default AddRestaurantForm;
