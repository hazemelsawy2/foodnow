import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import foodnow from './../img/foodnow.png'
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
                        <img src={foodnow} alt="GBK" />
                    </div>
                    <div className="restaurant-details">
                        <h3>{r.name}</h3>
                        <p className="restaurant-category">{r.vicinity}</p>
                        {r.opening_hours && (<p className={r.opening_hours.open_now ? "open" : "closed"}>{r.opening_hours.open_now ? "Open" : "Closed"}</p>)}
                        <Rater total={5} rating={r.rating} interactive={false} /><span className="ratingsCount">{r.user_ratings_total ? "("+r.user_ratings_total+")" : "(0)"}</span>
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
