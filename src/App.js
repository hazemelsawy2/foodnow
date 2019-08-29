import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./MainSideBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantPage from "./RestaurantPage";
import Map from "./Map";

function App() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [map, setMap] = useState(null);
  const [filteredState, setFilteredState] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [stars, setStars] = useState(0);

  const updateMain = (e, map) => {
    setAllRestaurants(e);
    setFilteredState(e);
    setMap(map);
  };
  const updateFiltered = e => {
    setFilteredState(e);
  };
  const updateMarkers = e => {
    setMarkers(e);
  };
  const updateStars = e => {
    setStars(e);
  };

  return (
    <div className="App">
      <div className="loader">
        <div>
          <h3>Please allow location access to fetch restaurants around you!</h3>
          <div className="lds-dual-ring"></div>
      </div>
      </div>
      <Router>
        <Header />
        <div className="mainContainer">
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Main
                  filteredState={filteredState}
                  restaurantsArray={allRestaurants}
                  updateFiltered={updateFiltered}
                  updateStars={updateStars}
                  stars={stars}
                />
              )}
            />
            <Route
              path="/RestaurantPage/:id"
              render={props => (
                <RestaurantPage
                  {...props}
                  map={map}
                  updateMain={updateMain}
                  filteredState={filteredState}
                  restaurantsArray={allRestaurants}
                  markers={markers}
                  isAuthed={true}
                />
              )}
            />
          </Switch>
          <div className="mapContainer" style={{ width: "100vw" }}>
            <Map
              filteredState={filteredState}
              reastaurantsArray={allRestaurants}
              updateMain={updateMain}
              updateMarkers={updateMarkers}
            />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
