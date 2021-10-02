import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className = 'Header'>
            <h1>Latest Tech News</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Tech</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            
        </div>
    );
};

export default Header;