import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import AddRestaurant from './AddRestaurant';
import RestaurantPage from './RestaurantPage';
import Map from './Map';

function App() {

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [map, setMap] = useState(null);
  const [filteredState, setFilteredState] = useState([]);
  const updateMain = (e, map) => {
    setAllRestaurants(e);
    setFilteredState(e);
    setMap(map);
  }
  const updateFiltered = (e) => {
    setFilteredState(e);
    console.log(filteredState);
  }


  return (
    <div className="App">
      <Router>
        <Header />
        <div className="mainContainer">
          <Switch>
            <Route path="/" exact component={() => 
              <Main 
                filteredState={filteredState}
                restaurantsArray={allRestaurants} 
                updateFiltered={updateFiltered} 
              />} />
            <Route path="/AddRestaurant" component={AddRestaurant} />
            <Route path="/RestaurantPage/:id" render={(props) => 
              <RestaurantPage 
                {...props} map={map} 
                updateMain={updateMain} 
                filteredState={filteredState}
                restaurantsArray={allRestaurants} 
                isAuthed={true} />} 
              />
          </Switch>
          <div style={{ width: '100vw' }}>
            <Map
              filteredState={filteredState}
              reastaurantsArray={allRestaurants}
              updateMain={updateMain}
            />
          </div>
        </div>
      </Router>
    </div>
  );
}


//const WrappedMap = withScriptjs(withGoogleMap(Map));


export default App;
