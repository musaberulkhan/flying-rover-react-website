import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Review from './Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data));        
    }, []);


    return (
        <div>            
            <div className="container py-5">
                <h2 className="text-center my-5">Customer Reviews</h2>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
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