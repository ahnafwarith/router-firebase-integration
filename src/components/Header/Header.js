import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <nav className='navbar'>
            <Link className='anchor' to='/'>Home</Link>
            <Link className='anchor' to='/products'>Products</Link>
            <Link className='anchor' to='/orders'>Orders</Link>
            <Link className='anchor' to='/register'>Register</Link>
            <span>{user?.displayName ? <p>{user?.displayName}</p> : <p></p>}</span>
            {
                user?.uid
                    ?
                    <button onClick={handleSignOut}>SignOut</button>
                    : <Link className='anchor' to='/login'>Login</Link>
            }
        </nav>
    );
};

export default Header;