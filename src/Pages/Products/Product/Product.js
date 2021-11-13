import React from 'react';
import './Product.css';

const Product = (props) => {
    const {_id, name, price, features, image, rating, sales} = props.product;
    const {handleBuyNowOnClick} = props;

    return (
        <div className="product">
            <div className="col h-100">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">                        
                        <h5 className="card-title">{name}</h5>
                        <ul className="card-text">
                            {
                                features.map(detail => <li
                                    key={detail}
                                >
                                    - {detail}</li>)
                            }
                        </ul>
                    </div>
                    <div className="card-footer">
                        <h5 className="px-2">Price: ${price} </h5>
                        <div className="d-flex justify-content-between">
                            <h6><i style={{color:'#f5cc00'}} className="fas fa-star"></i> {rating}</h6>
                            <h6>Sales: {sales}+</h6>
                        </div>
                        <button onClick={() => handleBuyNowOnClick(_id)} className="w-100 btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Product;