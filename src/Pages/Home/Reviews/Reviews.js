import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Review from './Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        setReviews([]);
    }, []);

    return (
        <div>            
            <div className="container py-5">
                <h2 className="text-center my-5">Customer Reviews</h2>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        reviews?.map(review => <Review
                            key={review._id}
                            review={review}                           
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;