import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Map from './Map';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddRestaurant from './AddRestaurant';
import RestaurantPage from './RestaurantPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="mainContainer">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/AddRestaurant" component={AddRestaurant} />
            <Route path="/RestaurantPage" component={RestaurantPage} />
          </Switch>
          <Map />
        </div>
      </Router>
    </div>
  );
}

export default App;
