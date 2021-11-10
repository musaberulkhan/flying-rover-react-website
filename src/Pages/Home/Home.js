import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;