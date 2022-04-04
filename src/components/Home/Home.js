import React from 'react';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-2 bg-blue-400 '>
                <div className='m-auto'>
                    <h1 className='text-white text-5xl'>BIKE REVIEWS</h1>
                    <p className='text-gray-200  px-24 mt-4'>Shopping for a new bike? Discover the must-haves and the always-avoids with reviews from Cycling Weekly.</p>
                    <button className='py-2 px-10 bg-white mt-5 text-lg rounded '>Explore</button>
                </div>
                <div>
                    <img src="/Images/QdHm4ivYRL3LfCoYzqPZ3T.jpg" alt="" />
                </div>
            </div>
            <Review></Review>
        </div>

    );
};

export default Home;