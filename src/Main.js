import React from 'react';
import Filters from './Main/Filters';
import Restaurant from './Main/Restaurant';

function Main() {
    return (
        <div className="main">
            <Filters />
            <div className="main-separator"></div>
            <Restaurant />
        </div>
    );
}

export default Main;
