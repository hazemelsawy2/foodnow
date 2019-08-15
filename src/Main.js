import React, { useState } from 'react';
import Filters from './Main/Filters';
import Restaurant from './Main/Restaurant';

function Main(props) {
    const [restaurants, setRestaurants] = useState(props.restaurantsArray);
    const [filteredState, setFilteredState] = useState(props.filteredState);

    const filterRestaurants = value => {
        const filtered = restaurants.filter(function (value2) {
            return value2.rating >= value;
        });
        props.updateFiltered(filtered);
        console.log(filtered);
    }

    return (
        <div className="main">
            <button id="mobileAnimation" onClick={() => {
                document.querySelector('.mainContainer').classList.toggle('mobileA');
            }}>&lt;  &gt;</button>
            <p className="fr">{filteredState.length} Restaurants</p>
            <Filters filterRestaurants={filterRestaurants} restaurants={restaurants} />
            <div className="main-separator"></div>
            <Restaurant filteredState={filteredState} restaurantsArray={restaurants} />

        </div>
    );
}

export default Main;
