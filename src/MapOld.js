import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow }
    from 'react-google-maps';
import mapRestaurant from './img/mapRestaurant.png';
import go from './img/go.svg';
import { usePosition } from 'use-position';
import AddRestaurantForm from './AddRestaurantForm';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Link } from 'react-router-dom';

function Map(props) {
    const [restaurant, setRestaurant] = useState(null); //marker info
    const { latitude, longitude } = usePosition(true); //getting user location
    const [allRestaurants, setRestaurants] = useState(props.reastaurantsArray); // global state
    const [newRestaurant, setNewRestaurant] = useState(null);//add new restaurant

    const addNewRestaurant = rJSON =>{
        let newAllRestaurants = [...allRestaurants, rJSON];
        setRestaurants(newAllRestaurants);
        props.updateMain(newAllRestaurants);
        setNewRestaurant(null);
    }

    const closeAddRestaurantWindow = text=>{
        setNewRestaurant(null);
    }

    const handleRatings = r =>{
        let average = 0;
        for(let i = 0; i < r.ratings.length; i++){
            average += r.ratings[i].stars;
        }
        average = average / r.ratings.length;
        return average;
    }

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
                    {allRestaurants.map((r) => (
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
                                <Link to={'/RestaurantPage/'+restaurant.key}><h3>{restaurant.restaurantName}</h3></Link>
                                <p className="restaurant-category">{restaurant.address}</p>
                                <Rater total={5} rating={handleRatings(restaurant)} interactive={false}/>
                                <p className="restaurant-status">Open</p>
                                <a target="_blank" rel="noopener noreferrer"
                                    href={"https://www.google.com/maps/?q=" + restaurant.lat + "," + restaurant.long}
                                    className="go">
                                    <img src={go} alt="go" /> Go</a>
                            </div>
                        </InfoWindow>
                    )}

                    {newRestaurant && (
                        <AddRestaurantForm
                            addNewRestaurant={addNewRestaurant}
                            closeAddRestaurantWindow={closeAddRestaurantWindow}
                            newRestaurant={newRestaurant}
                        />
                    )}
                </GoogleMap>
            )}



        </div>
    );
}


export default Map;