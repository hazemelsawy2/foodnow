import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

function Restaurant(props) {
    const [restaurants] = useState(props.restaurantsArray);
    const [filteredState, setFilteredState] = useState(props.filteredState);

    return (
        <div>
            {filteredState.length === 0 && (
                <div>No restaurants have been found!</div>
            )}
            {filteredState.map((r) => (
                <Link  key={r.place_id} to={'/RestaurantPage/' + r.place_id}>
                <div className="restaurant">
                    <div className="restaurant-hero">
                        <span className="helper"></span>
                        <img src="https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png" alt="GBK" />
                    </div>
                    <div className="restaurant-details">
                        <h3>{r.name}</h3>
                        <p className="restaurant-category">{r.vicinity}</p>
                        <Rater total={5} rating={r.rating} interactive={false} /><span className="ratingsCount">({r.user_ratings_total})</span>
                        <p className="restaurant-ratings"></p>
                        <button className="review-button">Review</button>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default Restaurant;
