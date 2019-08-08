import React from 'react';
import GBK from './img/restaurant.jpg';
import {Link} from 'react-router-dom';

function AddRestaurant() {
    return (
        <div className="main boxContainer">
            <p className="breadCrumbs"><Link to="/">Home page</Link> > <span className="currentPage">Add a restaurant</span></p>
            <div className="title box">
                <h1>Add a restaurant</h1>
                <p>And let thousands of eaters discover it</p>
            </div>
            <div className="form box">
                <form action="">
                    <label htmlFor="restaurantName">Restaurant Name</label>
                    <input type="text" name="restaurantName" />
                    <label htmlFor="lng">Restaurant Longitude</label>
                    <input type="text" disabled name="lng" value="Click on the map to fill" />
                    <label htmlFor="lat">Restaurant Latitude</label>
                    <input disabled type="text" name="lat" value="Click on the map to fill"/>
                    <button className="addButton">Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddRestaurant;
