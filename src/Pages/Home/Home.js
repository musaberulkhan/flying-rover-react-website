import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;