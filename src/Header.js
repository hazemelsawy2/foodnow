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
                </div>
                <div className="nav">
                    <ul>
                        <li className="welcome-message">Hello, Guest!</li>
                        <li className="profile-picture"></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
