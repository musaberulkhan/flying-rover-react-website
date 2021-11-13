import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DroneShop from '../../Images/drone-shop.jpg';
import DroneAcademy from '../../Images/drone-training.jpg';

const About = () => {
    return (
        <div className="footer-parent">
            <Header></Header>
            <div className="container py-5">
                <h1 className="text-center">About Us</h1>
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid p-5" src={DroneShop} alt="" />
                    </div>
                    <div className="col-md-7 p-4 d-flex align-items-center">
                        <p style={{textAlign:'justify'}}>Creativity is at the heart of every dream. Every idea, every groundbreaking leap that changes our world starts
                            with the vision of talented creators. At DJI, we give these creators the tools they need to bring their ideas to life.
                            <br /><br />
                            Our platforms empower them to capture images that were once out of reach. Our flying and camera stabilization systems
                            redefine camera placement and motion. Amazing photos and video, treasured personal memories, and high-end professional
                            imagery are captured every day, in every corner of the world using DJI products.
                            <br /><br />
                            We do this through an unparalleled commitment to R&D, a culture of constant innovation and curiosity,
                            and a focus on transforming complex technology into easy-to-use devices. Building on the ethos of “form follows function,”
                            our products combine advanced technology with dynamic designs.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 p-4 d-flex align-items-center">
                        <p style={{textAlign:'justify'}}>Flying Rover Academy is a training center dedicated to professional drone pilot training.
                            Our training centers are located in several regions in France and as well as in different countries. 
                            Members of Flying Rover Academy comply with a very precise quality charter which allows 
                            us to offer high quality training to all our trainees. <br /><br />
                            Flying Rover Academy offers pleasant and well-equipped training rooms.
                            For the practical training we have open, quiet and pleasant areas. 
                            In addition, Flying Rover Academy has dedicated areas which makes it possible to provide the best practical training.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid p-5" src={DroneAcademy} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;