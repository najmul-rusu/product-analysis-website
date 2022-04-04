import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center font-extrabold text-red-600 text-9xl mt-20 mb-10'>404</h1>
            <h3 className='text-center font-bold text-5xl m-10'>That page can’t be found.</h3>
            <p className='text-center text-xl'>Nothing was found at this location. Try searching, or check out the popular items below.</p>
        </div>
    );
};

export default NotFound;