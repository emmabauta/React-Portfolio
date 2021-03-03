import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ContactBtn';
import './NavBar.css';
function NavBar() {
    const [button, setButton] = useState(true)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
            <header class="header banner" id="top">
                <nav class="nav">
                    <ul class="nav__items">
                        <li class="nav__item">
                            <Link to='/work' className='nav-links'>
                                Work
                            </Link>
                        </li>
                        <li class="nav__item">
                            <Link to='/about' className='nav-links'>
                                About
                            </Link>
                        </li>
                        <li class="nav__item">
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div class="header__text-box row">
                    <div class="header__text">
                        <h1 class="heading-primary">
                            <span>Emma Dill</span>
                        </h1>
                        <p>Web Development | Design | Data</p>
                        {button && <Button buttonStyle='btn--outline'>Get in touch</Button>}
                    </div>
                </div>
            </header>

        </>
    )
}

export default NavBar
