import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='flex justify-center gap-10 text-xl p-10 bg-slate-100'>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/reviews">Reviews</ActiveLink>
            <ActiveLink to="/dashboard">Dashboard</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
        </nav>
    );
};

export default Header;