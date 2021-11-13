import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './TrainingDetails.css';
import pilot from '../../Images/pilot.jpg';

const TrainingDetails = () => {
    return (
        <div className="footer-parent">
            <Header></Header>
            <div className="container py-4">
                <h1 className="text-center">About Drone Pilot Training</h1>
                <div className="text-center">
                    <img className="img-fluid p-4" src={pilot} alt="" />
                </div>
                <h3 className="mt-4">Professional Drone Flying Course</h3>
                <h5>Course fee: $500</h5>
                <h5>Duration: 2 Months</h5>
                <p className="mb-1">Flying Hours: 100 Hours+</p>
                <p className="mb-1">Certificate: Yes</p>
                <p>Free course materials</p>
                <button className="btn btn-success px-4">Enroll Now</button>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default TrainingDetails;