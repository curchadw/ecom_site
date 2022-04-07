import React, { useState } from 'react'
import bag from '../../src/asset/shopping-bag-icon.png'
import './cart-icon.style.scss'

const CartIcon = ({ history }) =>{

    const [cart,setCart] = useState([])

    return(
        <div className='cart-container' onClick={()=>history.push('/cart')}>
            <img src={bag} alt='shoppping-cart-icon' />
            <span className='cart-count' id='cartCount'> {cart.length} </span>
        </div>
    )
}

export default CartIcon