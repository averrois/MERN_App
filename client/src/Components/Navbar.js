import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const [cookies, setCookies] = useCookies(["access_token"]);

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    }

  return (
    <nav>
        <ul>
            <li>
                <Link to="/"  className='links'>Home</Link>
            </li>
            <li>
                <Link to="/create-post" className='links'>Create Post</Link>
            </li>
            {cookies.access_token && (
                <li>
                    <Link to="/saved-post" className='links'>Saved Post</Link>
                </li>
            )}
            <li>
                {!cookies.access_token ? (
                    <Link to="/auth" className='links btn'>Sign in</Link>
                ) : (
                    <button
                        className='logout'
                        onClick={logout}
                    >
                        LogOut
                    </button>
                )
                }
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;