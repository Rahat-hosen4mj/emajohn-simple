import React from 'react';
import './Header.css';
import image from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={image} alt="" />
            <div>
                <Link to="/shop">Shop</Link> 
                <Link to="/order">Order</Link> 
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/shop">Shop</Link> */}
                {/* <a href="/shop">Shop</a>
                <a href="/about">Order</a>
              
                <a href="/blog">Inventory</a>
                <a href="/contact">Login</a> */}
            </div>
        </nav>
    );
};

export default Header;