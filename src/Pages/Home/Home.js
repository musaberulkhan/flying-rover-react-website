import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import './Home.css';
import Reviews from './Reviews/Reviews';
import Training from './Training/Training';

const Home = () => {
    return (
        <div className="home footer-parent">
            <Header></Header>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Training></Training>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;