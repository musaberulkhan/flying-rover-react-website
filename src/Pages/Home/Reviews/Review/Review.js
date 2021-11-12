import React from 'react';
import './Review.css';

const Review = (props) => {
    const { comment, rating, email, displayName} = props.review;

    return (
        <div className="review">
            <div className="col h-100">
                <div className="card h-100 py-3">                   
                    <div className="card-body">                        
                       <q>{comment}</q>                      
                    </div>
                    <div className="card-footer">
                        <h6 className="px-2">{displayName} </h6>                        
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Review;