import React, { createContext, useState } from 'react';
import { SHOP_DATA } from '../shop-data/shop-data'




export const ProductContext = createContext()

const ProductContextProvider = ({children}) =>{
    const [products] = useState(SHOP_DATA
         )
    return (
        <ProductContext.Provider value={{ products }}>
            { children }
        </ProductContext.Provider>
    )
}

export default ProductContextProvider