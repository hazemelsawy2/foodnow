import React from 'react';

function Filters(props) {

    const handleFilter = ()=>{
        var filter = document.getElementById("filter").value;
        props.filterRestaurants(filter);
    }
    return (
        <div>
            <select id="filter" onChange={handleFilter}>
                <option value="">-- Select rating --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    );
}

export default Filters;
