import React from 'react';
import bannerImage from '../../../Images/banner1.jpg';

const Banner = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 p-4">
                        <img className="img-fluid" src={bannerImage} alt="" />
                    </div>
                    <div className="col-md-6 col-12 p-5 d-flex align-items-center">
                        <div>
                            <h6>FLY LIKE A BIRD!</h6>
                            <h1>Looking for a Flying Machine?</h1>
                            <p>To get a drone within your budget and purpose, you are welcome to Flying Rover.
                                We have more than 10 drones for multiple purposes. Hurry up and grab your one!</p>
                            <button className="btn btn-success px-4">Explore All Drones</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;