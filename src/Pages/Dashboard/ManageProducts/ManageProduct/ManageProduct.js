import React from 'react';
import './ManageProduct.css';

const ManageProduct = (props) => {
    const { _id, name, image, price, rating, sales } = props.product;
    const { handleDeleteProductButton } = props;

    return (
        <div className="manage-product px-4 py-2 d-flex align-items-center">
            <div>
                <img style={{ width: '180px' }} src={image} alt="" />
            </div>
            <div className="mx-4 py-3">
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p className="mb-0">Rating: {rating}</p>
                <p>Sales: {sales}+</p>
                <button onClick={() => handleDeleteProductButton(_id)} className="btn btn-danger">Delete Product</button>
            </div>
        </div>
    );
};

export default ManageProduct;