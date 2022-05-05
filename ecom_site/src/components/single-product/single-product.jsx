import React,{ useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router'
import { ProductContext } from '../../context/products-context'
import Layout from '../layout'
import './single-product.styles.scss'


const SingleProduct = ({match, history}) =>{
    const { push } = history
    const { products } = useContext(ProductContext)
    const { id } = match.params
    const [product, setProduct] = useState(null)
    useEffect(()=>{
        // check to see if the id from the route param matches a product
        const product = products.find((item) => Number(item.id) === Number(id))

        // if the product does not exist, we redirect back to the shop
        if(!product){
            return push('/shop')
        }
        // set the product as the state
        setProduct(product)
    },[product,push, id, products])
}

export default SingleProduct