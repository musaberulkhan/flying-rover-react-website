import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './ManageOrder.css';

const ManageOrder = (props) => {
    const { _id, productId, status } = props.order;
    const { handleCancelOrderButton, handleApproveOrderButton } = props;

    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <div className="manage-order m-3 p-3 d-flex flex-column flex-md-row align-items-center">
            <div className="">
                <img className="product-image img-fluid mb-3 mb-md-0" src={product?.image} alt="" />
            </div>
            <div className="ms-4">
                <h3>{product?.name}</h3>
                <h5>Price: {product?.price}</h5>
                <ul className="ps-2">
                    {
                        product?.features?.map(feature => <li
                            key={feature}
                        > - {feature}</li>)
                    }
                </ul>
                <h6>Status: {status}</h6>
                {
                    status === "pending" ?
                    (
                        <button onClick={() => handleApproveOrderButton(_id)} className="btn btn-success me-2">Approve Order</button>
                    )
                    :
                    (
                        <></>
                    )
                }
                <button onClick={() => handleCancelOrderButton(_id)} className="btn btn-danger">Cancel Booking</button>
            </div>
        </div>
    );
};

export default ManageOrder;