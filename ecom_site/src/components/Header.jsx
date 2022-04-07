import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from './cart-icon'


import './header.styles.scss'

const Header = () =>{
    return(
        <nav className='nav-menu container'>
            <div className='logo'>
                <Link to='/'>Curtis</Link>
            </div>
            <ul className='link-items'>
                <li>
                    <Link
                    to='/'
                    className=''
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/shop' className=''>
                        Shop
                    </Link>
                </li>
            </ul>
            <CartIcon />
        </nav>
    )
}

export default Header;