import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import useProducts from '../../../Hooks/useProducts';
import Product from '../../Products/Product/Product';

const FeaturedProducts = () => {
    const { getProducts, products } = useProducts();
    let history = useHistory();

    useEffect(() => {
        getProducts();
    }, []);

    const handleBuyNowOnClick = (id) => {
        history.push(`/purchase/${id}`);
    }

    return (
        <div>
            <div className="container my-5">
                <h2 className="text-center my-5">Our Featured Drones</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products?.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                            handleBuyNowOnClick={handleBuyNowOnClick}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;