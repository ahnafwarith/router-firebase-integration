import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <Link className='anchor' to='/'>Home</Link>
            <Link className='anchor' to='/login'>Login</Link>
        </nav>
    );
};

export default Header;