import React from 'react';
import GBK from './../img/restaurant.jpg';
import {Link} from 'react-router-dom';

const restaurants = [{
    "restaurantName":"Bronco",
    "address":"39 Rue des Petites Écuries, 75010 Paris",
    "lat":51.610649967914554,
    "long":-0.11879437730715381,
    "ratings":[
       {
          "stars":4,
          "comment":"Great! But not many veggie options."
       },
       {
          "stars":5,
          "comment":"My favorite restaurant!"
       }
    ]
 },
 {
    "restaurantName":"Babalou",
    "address":"4 Rue Lamarck, 75018 Paris",
    "lat":51.600726785867785,
    "long":-0.09427750040276806,
    "ratings":[
       {
          "stars":5,
          "comment":"Tiny pizzeria next to Sacre Coeur!"
       },
       {
          "stars":3,
          "comment":"Meh, it was fine."
       }
    ]
 }];

function Restaurant() {
    return (
        <div>
            {restaurants.map((r) => (
                <div className="restaurant">
                    <div className="restaurant-hero">
                        <img src={GBK} alt="GBK" />
                    </div>
                    <div className="restaurant-details">
                        <Link to="/RestaurantPage"><h3>{r.restaurantName}</h3></Link>
                        <p className="restaurant-category">{r.address}</p>
                        <p className="restaurant-status">9am - 10pm</p>
                        <p className="restaurant-price">$$$</p>
                        <div className="restaurant-rating">
                            ratings here
                        </div>
                        <Link to="/RestaurantPage"><button className="fr review-button">Review</button></Link>
                    </div>
                </div>
            ))}
        </div>
        
    );
}

export default Restaurant;
