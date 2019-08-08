import React from 'react';

function Filters() {

    
    return (
        <div>
            <select>
                <option value="0">Closest</option>
                <option value="1">Furthest</option>
            </select>
            <div id="slider"></div>
        </div>
    );
}

export default Filters;
