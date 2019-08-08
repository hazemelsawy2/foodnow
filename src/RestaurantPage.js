import React from 'react';
import {Link} from 'react-router-dom';

function RestaurantPage() {
    return (
        <div className="main boxContainer">
            <p className="breadCrumbs"><Link to="/">Home page</Link> > <span className="currentPage">Restaurant Page</span></p>
            <div className="title box">
                <h1>Gourmet Burger Kitchen <span className="stars"></span></h1>
                <button className="review-button">Review</button>
            </div>
            <div className="box">
                <h3>Reviews</h3>
                <div className="review">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
make a type specimen book. It has survived not only five centuries</p>
                </div>
                <div className="review">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
make a type specimen book. It has survived not only five centuries</p>
                </div>
                <div className="review">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div>
            <div className="box streetView">
                Images to be inserted
            </div>
        </div>
        
    );
}

export default RestaurantPage;
