import React from 'react';
import logo from '../../Images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">

                    {/* ---------  Column 1  ------------ */}
                    <div className="col-md-4 col-12 p-3">
                        <div className="d-flex align-items-center">
                            <img className="footer-logo" src={logo} alt="" />
                            <h5 className="ms-2 mb-0 mt-1">FLYING ROVER</h5>
                        </div>
                        <p className="mission pe-lg-3 fs-6 pt-1">
                            We provide attractive drones for multiple purposes. We have more than 10 drones and online drone flying tutorial.
                            Our drones come with all accessories and 1 year replacement warranty and 2 years free servicing.
                        </p>
                    </div>

                    {/* ---------  Column 2  ------------ */}
                    <div className="col-md-4 col-12 ps-md-5 p-3">
                        <div className="important-links">
                            <p>Important Links</p>
                            <p className="mb-1"><a href="privacy-policy.html">Privacy Policy</a></p>
                            <p className="mb-1"><a href="privacy-policy.html">Terms of Service</a></p>
                            <p className="mb-1"><a href="privacy-policy.html">Newsroom</a></p>
                            <p className="mb-1"><a href="privacy-policy.html">Career</a></p>
                        </div>
                    </div>


                    {/* ---------  Column 3  ------------ */}
                    <div className="col-md-4 col-12 p-3">
                        <p>Want to hear from us?</p>
                        <input type="email" className="w-100 px-2" placeholder="Your email address" />
                        <button className="btn btn-light mt-3">Subscribe</button>
                    </div>
                </div>
                <div className="row">
                    <p className="mb-0 text-center">All Rights Reserved | @2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;