import React from 'react';
import logo from './logo.png';
import './App.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
            <div className="header-wrapper">
                <div className="logo">
                    <Link  className="App-logo" to="/"><img src={logo} alt="logo" /></Link>
                    <span className="header-separator"></span>
                    <Link to="/AddRestaurant">
                        <button className="add-restaurant">Add restaurant</button>
                    </Link> 
                </div>
                <div className="nav">
                    <ul>
                        <li className="welcome-message">Hello, Hazem</li>
                        <li className="profile-picture"><div className="triangle-down"></div></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
