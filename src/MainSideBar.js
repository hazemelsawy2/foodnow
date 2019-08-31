import React, { useState } from "react";
import Filters from "./MainSideBarComponents/RestaurantsFilter";
import Restaurant from "./MainSideBarComponents/RestaurantListItem";

function Main(props) {
  const [restaurants] = useState(props.restaurantsArray);
  const [filteredState] = useState(props.filteredState);
  const [starStart] = useState(props.starStart);
  const [starEnd] = useState(props.starEnd);
  const filterRestaurants = (valueStart, valueEnd) => {
    const filtered = restaurants.filter(function(value) {
      if (value.rating) {
        return value.rating >= valueStart && value.rating <= valueEnd;
      } else {
        return 0 >= valueStart && 0 <= valueEnd;
      }
    });
    props.updateFiltered(filtered);
    props.updateStars(valueStart, valueEnd);
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
        starStart={starStart}
        starEnd={starEnd}
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
