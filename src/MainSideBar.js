import React, { useState } from "react";
import Filters from "./MainSideBarComponents/RestaurantsFilter";
import Restaurant from "./MainSideBarComponents/RestaurantListItem";

function Main(props) {
  const [restaurants] = useState(props.restaurantsArray);
  const [filteredState] = useState(props.filteredState);
  const [stars] = useState(props.stars);
  const filterRestaurants = value => {
    const filtered = restaurants.filter(function(value2) {
      return value2.rating >= value;
    });
    props.updateFiltered(filtered);
    props.updateStars(value);
  };

  return (
    <div className="main">
      <button
        id="mobileAnimation"
        onClick={() => {
          document.querySelector(".mainContainer").classList.toggle("mobileA");
        }}
      >
        &lt; &gt;
      </button>
      <p className="fr">{filteredState.length} Restaurants</p>
      <Filters
        filteredState={filteredState}
        filterRestaurants={filterRestaurants}
        restaurants={restaurants}
        stars={stars}
      />
      <div className="main-separator"></div>
      <Restaurant
        filteredState={filteredState}
        restaurantsArray={restaurants}
      />
    </div>
  );
}

export default Main;
