import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import useProducts from '../../Hooks/useProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const { getProducts, products } = useProducts();
    let history = useHistory();

    useEffect(() => {
        getProducts();
    }, []);

    const handleBuyNowOnClick = (id) => {
        history.push(`/purchase/${id}`);
    }

    return (
        <div className="footer-parent">
            <Header></Header>
            <div className="container my-5">
                <h2 className="text-center my-5">Our All Drones</h2>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        products?.map(product => <Product
                            key={product._id}
                            product={product}
                            handleBuyNowOnClick={handleBuyNowOnClick}
                        ></Product>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;