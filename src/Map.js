import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow }
    from 'react-google-maps';
import mapRestaurant from './img/mapRestaurant.png';
import go from './img/go.svg';
import { usePosition } from 'use-position';

const restaurants = [{
    "restaurantName": "Bronco",
    "address": "39 Rue des Petites Écuries, 75010 Paris",
    "lat": 51.610649967914554,
    "long": -0.11879437730715381,
    "ratings": [
        {
            "stars": 4,
            "comment": "Great! But not many veggie options."
        },
        {
            "stars": 5,
            "comment": "My favorite restaurant!"
        }
    ]
},
{
    "restaurantName": "Babalou",
    "address": "4 Rue Lamarck, 75018 Paris",
    "lat": 51.600726785867785,
    "long": -0.09427750040276806,
    "ratings": [
        {
            "stars": 5,
            "comment": "Tiny pizzeria next to Sacre Coeur!"
        },
        {
            "stars": 3,
            "comment": "Meh, it was fine."
        }
    ]
}];

function Map() {
    const [restaurant, setRestaurant] = useState(null);
    const { latitude, longitude } = usePosition(true);
    const [newRestaurant, setNewRestaurant] = useState(null);
    return (
        <div>
            {latitude && longitude && (
                <GoogleMap
                    defaultZoom={14}
                    defaultCenter={{ lat: latitude, lng: longitude }}
                    onClick={(e) => {
                        setNewRestaurant(e);
                    }}
                >
                    <Marker
                        position={{
                            lat: latitude,
                            lng: longitude
                        }}
                        onClick={() => {
                        }}
                        icon={{
                            url: `https://sheengroup.com.au/assets/Uploads/misc/current-location.png`,
                            scaledSize: new window.google.maps.Size(45, 45)
                        }}
                    />
                    {restaurants.map((r) => (
                        <Marker
                            key={r.key}
                            position={{
                                lat: r.lat,
                                lng: r.long
                            }}

                            onClick={() => {
                                setRestaurant(r);
                            }}
                            icon={{
                                url: `https://cdn4.iconfinder.com/data/icons/map-pins-2/256/21-512.png`,
                                scaledSize: new window.google.maps.Size(55, 55)
                            }}
                        />

                    ))}
                    {restaurant && (
                        <InfoWindow
                            position={{
                                lat: restaurant.lat,
                                lng: restaurant.long
                            }}
                            onCloseClick={() => {
                                setRestaurant(null);
                            }}
                        >
                            <div className="restaurant-map">
                                <div className="mapRestaurant"><img src={mapRestaurant} alt="restuant" /></div>
                                <h3>{restaurant.restaurantName}</h3>
                                <p className="restaurant-category">{restaurant.address}</p>
                                <p className="restaurant-status">Open</p>
                                <a target="_blank" rel="noopener noreferrer"
                                    href={"https://www.google.com/maps/?q=" + restaurant.lat + "," + restaurant.long}
                                    className="go">
                                    <img src={go} alt="go" /> Go</a>
                            </div>
                        </InfoWindow>
                    )}

                    {newRestaurant && (
                        <div className="add-restaurant-map">
                            <button className="xButton fr"
                                onClick={(e) => {
                                    setNewRestaurant(null);
                                }}
                            >x</button>
                            <form>
                                <label htmlFor="restaurantName">Restaurant Name: </label>
                                <input type="text" id="restaurantName" name="restaurantName" />
                                <label htmlFor="restaurantAddress">Restaurant Address: </label>
                                <input type="text" id="restaurantAddress" name="restaurantName" />
                                <label htmlFor="lat">Restaurant coordinates: </label>
                                <input type="text" name="lat" id="lat" disabled value={newRestaurant.latLng.lat()} /><br></br>
                                <input type="text" name="lng" id="lng" disabled value={newRestaurant.latLng.lng()} />
                                <label htmlFor="textArea">Description</label>
                                <textarea id="textArea"></textarea>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    const rName =document.getElementById("restaurantName").value;
                                    const rAddress =document.getElementById("restaurantAddress").value;
                                    const rLng = document.getElementById("lng").value;
                                    const rLat = document.getElementById("lat").value;
                                    const rJSON = {
                                        restaurantName: rName,
                                        address: rAddress,
                                        lat: rLat,
                                        long: rLng,
                                        ratings: []
                                    };
                                    restaurants.push(rJSON);
                                    setNewRestaurant(null);
                                }}>Add Restaurant</button>
                            </form>
                        </div>
                    )}
                </GoogleMap>
            )}

        </div>
    );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
    return (<div style={{ width: '100vw', height: '100vh' }}>
        <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyASm5cBnhfHyTc4GZQhoOBrC_8Otsozsp0`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
    );
}
