import React from 'react';
import ReviewData from '../../hooks/ReviewData';
import ShowReview from './ShowReview';

const AllReview = () => {
    const [reviews] = ReviewData()
    return (
        <div className='container my-5 text-center'>
            <h5 className='text-info fw-bold my-5'>All Reviews</h5>
            
                { 
                    reviews.map(review => <ShowReview key={review.id} review={review}></ShowReview>)
                }
            
        </div>
    );
};
export default AllReview;