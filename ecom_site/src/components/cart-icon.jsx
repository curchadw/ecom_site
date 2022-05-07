import React, { useContext, useState } from 'react'
import bag from '../../src/asset/shopping-bag-icon.png'
import { CartContext } from '../context/cart-context'
import { withRouter } from 'react-router'
import './cart-icon.style.scss'

const CartIcon = ({ history }) =>{

    // const [cart,setCart] = useState([])
    const { itemCount } = useContext(CartContext) 

    return(
        <div className='cart-container' onClick={()=>history.push('/cart')}>
            <img src={bag} alt='shopping-cart-icon' />
          { itemCount > 0 ? <span className='cart-count' id='cartCount'> {itemCount} </span> : null }
        </div>
    )
}

export default withRouter(CartIcon)