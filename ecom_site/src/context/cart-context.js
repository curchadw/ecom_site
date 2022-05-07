import React, {createContext, useReducer} from 'react'
import cartReducer from './cart-reducer';

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0}

const CartContextProvider = ({children}) =>{
    const [ state, dispatch ] = useReducer(cartReducer, initialState)

    const addProduct = payload =>{
        dispatch({type: 'ADD_ITEM', payload})
    }

    const increase = payload =>{
        dispatch({type: 'INCREASE', payload})
    }
    
    const contextValues = {
        ...state,
        addProduct,
        increase
    }


    return (
        <CartContext.Provider value={contextValues}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;