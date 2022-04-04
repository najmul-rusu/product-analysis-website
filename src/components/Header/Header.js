import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/review">Review</ActiveLink>
            <ActiveLink to="/dashboard">Dashboard</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
        </nav>
    );
};

export default Header;