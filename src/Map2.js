import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';


export class Map2 extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}
            >
                <Marker onClick={this.onMarkerClick} name={
                <div className="restaurant-map">
                <div className="mapRestaurant"><img src="mapRestaurant" alt="restuant" /></div>
                <h3>selectedPark.properties.NAME</h3>
                <p className="restaurant-category">selectedPark.properties.DESCRIPTIO</p>
                <p className="restaurant-status">Open</p>
                <a target="_blank" rel="noopener noreferrer" href="#"
                    className="go">
                    <img src="w" alt="go" /> Go</a>
            </div>
                } />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </CurrentLocation>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyASm5cBnhfHyTc4GZQhoOBrC_8Otsozsp0'
})(Map2);