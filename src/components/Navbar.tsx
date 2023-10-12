import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import background from '../background.png'
import logo from '../logo.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <div style={{ backgroundImage: `url(${background})`, height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'screen' }}>
                <nav className='navbar'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={logo} />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Buyer
                            </Link>
                        </li>
                        <li
                            className='nav-item'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Link
                                to='/services'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Seller <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Investors
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/contact-us'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Property Management
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/contact-us'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/contact-us'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Agents
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <Button />
                </nav>
            </div>
        </>
    );
}

export default Navbar;