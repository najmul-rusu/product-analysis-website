import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewData from '../../hooks/ReviewData';
import ShowReview from './ShowReview';

const Review = () => {
    const [reviews] = ReviewData()
    const navigate = useNavigate()
    return (
        <div className='text-center '>
            <h2 className='my-5 fw-bold'>Customer Reviews (3) </h2>
            <div className='container'>
                    {
                        reviews.slice(0, 3).map(review => <ShowReview
                            review={review}
                            key={review.id}
                        ></ShowReview>)
                    }
                <button className='btn btn-info text-white my-3' onClick={() => navigate('/reviews')}>See All Review</button>

            </div>

        </div>
    );
};

export default Review;