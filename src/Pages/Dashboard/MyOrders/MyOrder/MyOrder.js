import React, { useEffect, useState } from 'react';
import './MyOrder.css';

const MyOrder = (props) => {
    const { _id, productId, status } = props.order;
    const { handleCancelOrderButton } = props;

    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`https://whispering-chamber-62649.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <div className="my-order m-3 p-3 d-flex flex-column flex-md-row align-items-center">
            <div className="">
                <img className="package-image img-fluid mb-3 mb-md-0" src={product?.image} alt="" />
            </div>
            <div className="ms-4">
                <h3>{product?.name}</h3>
                <h5>Price: {product?.price}</h5>
                <ul>
                    {
                        product?.details?.map(detail => <li
                            key={detail}
                        >
                            <i className="fas fa-check"></i>{detail}</li>)
                    }
                </ul>
                <h6>Status: {status}</h6>
                <button onClick={() => handleCancelOrderButton(_id)} className="btn btn-danger">Cancel Booking</button>
            </div>
        </div>
    );
};

export default MyOrder;