import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import './Home.css';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div className="home footer-parent">
            <Header></Header>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;