import React from 'react';

const ShowReview = ({review}) => {
    const { name, rating, reviewTitle } = review;
    return (
        <div>
            <h1>{name}</h1>
            <p>{reviewTitle}</p>
            <p>{rating}</p>
        </div>
    );
};

export default ShowReview;