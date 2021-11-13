import React from 'react';
import { Link } from 'react-router-dom';
import traningImage from '../../../Images/training.jpg';
import './Training.css';

const Training = () => {
    return (
        <div className="my-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex align-items-center p-3">
                        <div>
                            <h3>Want to become a professional <span className="text-primary">drone pilot?</span></h3>
                            <p className="py-2 pe-2 drone-traning-text">We are offering professional drone pilot training for beginner and intermediate. This traning will held in our permanent campus.
                                After completing this training we will issue a professional certificate. If you are looking for a complete drone flying course,
                                you may join this course to make your dream true.
                            </p>
                            <Link to="/training" className="btn btn-success px-4">View Course Details</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <img className="img-fluid" src={traningImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;