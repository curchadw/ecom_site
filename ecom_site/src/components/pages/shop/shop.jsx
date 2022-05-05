import React, { useContext } from 'react'

import Layout from '../../layout'
import { ProductContext } from '../../../context/products-context'
import './shop.styles.scss'
import FeaturedProduct from '../../shared/featured-product'

const Shop = () =>{
    const { products } = useContext(ProductContext)
    const allProducts = products.map((product)=>(
        <FeaturedProduct {...product} key={product.id}/>
    ))

    return(
        <Layout>
            <div className='product-list-container'>
                <h2 className='product-list-title'>Shop</h2>
                <div className='products-list'>
                    { allProducts === undefined? <h1>Loading...</h1>: allProducts }
                </div>
            </div>
        </Layout>
    )
}

export default Shop;

