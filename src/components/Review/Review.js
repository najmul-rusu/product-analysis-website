import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewData from '../../hooks/ReviewData';
import ShowReview from './ShowReview';

const Review = () => {
    const [reviews] = ReviewData()
    const SeeAllBtn = useNavigate()
    return (
        <div className='text-center '>
            <h2 className='my-5 fw-bold'>Customer Reviews</h2>
            <div className='container'>
                    {
                        reviews.slice(0, 3).map(review => <ShowReview
                            review={review}
                            key={review.id}
                        ></ShowReview>)
                    }
                <button className='bg-blue-500  text-white py-2 px-10 text-lg rounded my-3' onClick={() => SeeAllBtn('/reviews')}>See All Review</button>

            </div>

        </div>
    );
};

export default Review;