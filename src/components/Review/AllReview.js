import React from 'react';
import ReviewData from '../../hooks/ReviewData';
import ShowReview from './ShowReview';

const AllReview = () => {
    const [reviews , setReviews] = ReviewData()
    return (
        <div className='container my-5 text-center'>
            <h5 className='text-info fw-bold my-5'>Customer Reviews <br /> _____</h5>
            
                { 
                    reviews.map(review => <ShowReview key={review.id} review={review}></ShowReview>)
                }
            
        </div>
    );
};
export default AllReview;