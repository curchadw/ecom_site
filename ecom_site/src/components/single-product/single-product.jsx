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

    ///some type of loader could happen right here if the product is loading to screen
    if(!product) return null

    const { imageUrl, title, price, description} = product;
    return (
        <Layout>
            <div className='single-product-container'>
                <div className='product-image'>
                    <img src={imageUrl} alt="product" />
                </div>
                <div className='product-details'>
                    <div className='name-price'>
                        <h3>{title}</h3>
                        <p>{price}</p>
                    </div>
                    <div className='add-to-cart-btns'>
                        <button className='button is-white nomad-btn' id='btn-white-outline'>
                            ADD TO CART
                        </button>
                        <button 
                            className="button is-black nomad-btn" 
                            id='buy-it-now-btn' 
                            onClick={() => history.push('/cart')}>
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                    <div className='product-description'>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(SingleProduct);