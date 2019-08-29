import React, { useState } from "react";

function Filters(props) {
  const [stars] = useState(props.stars);
  const handleFilter = () => {
    var filter = document.getElementById("filter").value;
    props.filterRestaurants(parseInt(filter));
  };
  return (
    <div>
      <p className="filter">
        {props.stars !== 5 ? `${props.stars} or more star(s) rating` : `${props.stars} stars rating`}
      </p>
      <form action="">
        <input
          type="range"
          id="filter"
          value={stars}
          onChange={handleFilter}
          name="points"
          min="0"
          max="5"
        ></input>
      </form>
    </div>
  );
}

export default Filters;
