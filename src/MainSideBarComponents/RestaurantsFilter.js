import React, { useState } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function Filters(props) {
  const [starStart] = useState(props.starStart);
  const [starEnd] = useState(props.starEnd);
  const onUpdate = (render, handle, value, un, percent) => {
    const valueStart = value[0];
    const valueEnd = value[1];
    props.filterRestaurants(valueStart, valueEnd);
  };

  return (
    <div className="clearfix">
      <Nouislider
        range={{ min: 0, max: 5 }}
        start={[starStart, starEnd]}
        tooltips={true}
        step={1}
        onChange={onUpdate}
        connect
      />
    </div>
  );
}

export default Filters;
