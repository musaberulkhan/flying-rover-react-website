import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;