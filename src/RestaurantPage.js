import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import AddReviewForm from './AddReviewForm';
import go from './img/go.svg';

let theMarker;
var panorama;
function RestaurantPage({ match, map, restaurantsArray, updateMain, markers }) {

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
                latLng = restaurants[i].geometry.location;
            }
        }

        for (let i = 0; i < markers.length; i++) {
            if (markers[i].position == latLng) {
                theMarker = markers[i];
                theMarker.setAnimation(window.google.maps.Animation.BOUNCE);
                setTimeout(function () { theMarker.setAnimation(null); }, 1500);

            }
        }
        var sv = new window.google.maps.StreetViewService();

        panorama = new window.google.maps.StreetViewPanorama(document.getElementById('pano'));
        sv.getPanorama({location: latLng, radius: 50}, function(data, status){
            if (status === 'OK') {
                console.log("OK");
                panorama.setPano(data.location.pano);
                panorama.setPov({
                  heading: 270,
                  pitch: 0
                });
                panorama.setVisible(true);
            
              } else {
                var map2 = document.getElementById("map2");
                map2.innerHTML = "No street view has been found!";
                map2.style.height="50px";
            }
        });




    }, []);


    const addNewReview = (review) => {
        let newReviews = new Array();
        if (reviews) {
            newReviews = [review, ...reviews]
        } else {
            newReviews = [review];
            console.log(typeof newReviews);
        }
        setReviews(newReviews);
    }


    return (
        <div>

            {restaurants.map((r, index) => {
                return match.params.id == r.place_id && (
                    <div key={r.place_id} className="main boxContainer">
                        <p className="breadCrumbs"><Link to="/">Home page</Link> > <span className="currentPage">{r.name}</span></p>
                        <button id="mobileAnimation" className="marp" onClick={() => {
                            document.querySelector('.mainContainer').classList.toggle('mobileA');
                        }}>&lt;  &gt;</button>
                        <div className="title box">
                            <h1>{r.name}<span className="stars"></span></h1>
                            <p>{r.vicinity}</p>
                            {r.opening_hours && (<p className={r.opening_hours.open_now ? "open" : "closed"}>{r.opening_hours.open_now ? "Open" : "Closed"}</p>)}
                            <Rater total={5} rating={r.rating} interactive={false} /><span className="ratingsCount">{r.user_ratings_total ? "("+r.user_ratings_total+")" : "(0)"}</span>
                            <br />
                            {isNaN(r.geometry.location.lat) && (<a target="_blank" rel="noopener noreferrer"
                                href={"https://www.google.com/maps/?q=" + r.geometry.location.lat() + "," + r.geometry.location.lng()}
                                className="go">
                                <img src={go} alt="go" /> Directions</a>)}
                            {!isNaN(r.geometry.location.lat) && (<a target="_blank" rel="noopener noreferrer"
                                href={"https://www.google.com/maps/?q=" + r.geometry.location.lat + "," + r.geometry.location.lng}
                                className="go">
                                <img src={go} alt="go" /> Directions</a>)}
                        </div>
                        <div className="box">
                            <AddReviewForm
                                restaurant={index}
                                addNewReview={addNewReview}
                            />
                        </div>
                        <div className="box">
                            <h3>Reviews</h3>
                            {reviews.length > 0 && (
                                reviews.map((review, index) => (
                                    <div key={index} className="review">
                                        <div className="reviewerDetails">
                                            <div className="fl"><img src={review.profile_photo_url} alt="profile pic" /></div>
                                            <p className="reviewerName">{review.author_name}</p>
                                            <Rater total={5} rating={review.rating} interactive={false} />
                                        </div>
                                        <p>{review.text}</p>
                                    </div>
                                )
                                )
                            )}

                            {reviews.length == 0 &&
                                (
                                    <div className="noReviews">No reviews have been found!</div>
                                )

                            }
                        </div>
                        <div className="box streetView">
                            <h3>Street view</h3>
                            <div id="map2">
                                <div id="pano"></div>
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
