import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import AddReviewForm from './AddReviewForm';


function RestaurantPage({ match, map, restaurantsArray, updateMain }) {

    const [restaurants] = useState(restaurantsArray);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        var request = {
            placeId: match.params.id // example: ChIJN1t_tDeuEmsRUsoyG83frY4
        };

        var service = new window.google.maps.places.PlacesService(map); // map is your map object

        service.getDetails(request, function (place, status) {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setReviews(place.reviews);
            }
        });



        let latLng = null;
        for (let i = 0; i < restaurants.length; i++) {
            if (restaurants[i].place_id == match.params.id) {
                latLng = restaurants[i].geometry.location
            }
        }

       

        new window.google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
                position: latLng,
                pov: {
                    heading: 34,
                    pitch: 10
                }
            });



    }, []);


    const addNewReview = (review) => {
        let newReviews = [review, ...reviews];
        setReviews(newReviews);
    }


    return (
        <div>
            {restaurants.map((r, index) => {
                return match.params.id == r.place_id && (
                    <div key={r.place_id} className="main boxContainer">
                        <p className="breadCrumbs"><Link to="/">Home page</Link> > <span className="currentPage">{r.name}</span></p>
                        <div className="title box">
                            <h1>{r.name}<span className="stars"></span></h1>
                            <p>{r.vicinity}</p>
                            {r.opening_hours && (<p className={r.opening_hours.open_now ? "open" : "closed"}>{r.opening_hours.open_now ? "Open" : "Closed"}</p>)}
                            <Rater total={5} rating={r.rating} interactive={false} /><span className="ratingsCount">({r.user_ratings_total})</span>
                        </div>
                        <div className="box">
                            <AddReviewForm
                                restaurant={index}
                                addNewReview={addNewReview}
                            />
                        </div>
                        <div className="box">
                            <h3>Reviews</h3>
                            {reviews.map((review, index) => (
                                <div key={index} className="review">
                                    <div className="reviewerDetails">
                                        <div className="fl"><img src={review.profile_photo_url} alt="profile pic" /></div>
                                        <p className="reviewerName">{review.author_name}</p>
                                        <Rater total={5} rating={review.rating} interactive={false} />
                                    </div>
                                    <p>{review.text}</p>
                                </div>
                            )
                            )}
                        </div>
                        <div className="box streetView">
                            <h3>Street view</h3>
                            <div id="map2">
                                <div id="pano">something</div>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
}
export default RestaurantPage;
