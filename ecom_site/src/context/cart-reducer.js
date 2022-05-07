export const sumItems = cartItems =>{
    return {
        itemCount: cartItems.reduce((total, product)=> total + product.quantity,0),
        total: cartItems.reduce((total, product) => total + product.price * product.quantity, 0),
    }
}

const cartReducer = (state, action) =>{
    switch(action.type){

        case 'ADD_ITEM':
            //checking if the item is in the cart already
            if(!state.cartItems.find(item => item.id === action.payload.id)){
                // add item to cartItems to update current state
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            // return new / updated state
            return {
                ...state,
                cartItems: [...state.cartItems],
                itemCount: state.cartItems.reduce((total, product) => total + product.quantity,0),
                total: state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0),
            }

        case 'INCREASE':
            const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[increaseIndex].quantity++;
            return {
                ...state,        
                cartItems: [...state.cartItems],        
                ...sumItems(state.cartItems), 
            }

        default:
            return state;
    }
}

export default cartReducer