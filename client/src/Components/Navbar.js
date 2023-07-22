import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/"  className='links'>Home</Link>
            </li>
            <li>
                <Link to="/create-post" className='links'>Create Post</Link>
            </li>
            <li>
                <Link to="/saved-post" className='links'>Saved Post</Link>
            </li>
            <li>
                <Link to="/auth" className='links'>Sign in</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;