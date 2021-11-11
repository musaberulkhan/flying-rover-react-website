import React from 'react';
import Purchased from '../../../../Images/purchased.jpg';
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';

const PurchaseSuccessful = () => {
    return (
        <div className="footer-parent">
            <Header></Header>
            <div className="container text-center my-5">
                <h1>Your order is successfully placed!</h1>
                <h4>Thanks for staying with Flying Rover</h4>
                <p>Please check your email, we will notify you about shipping soon.</p>
                <img className="img-fluid p-5" src={Purchased} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PurchaseSuccessful;