import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <>
            <nav className="nav" role="navigation">
                <ul className="nav__items">
                    <li>
                        <Link to='/work' className='navbar-link'>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='navbar-link'>
                            Home 
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='navbar-link'>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
