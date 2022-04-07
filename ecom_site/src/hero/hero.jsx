import React from 'react'
import { withRouter } from 'react-router'
import './hero.styles.scss'

const Hero =({history})=>{
    return(
        <section className='hero is-info is-large hero-image'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='hero-title'>
                        Bags reimaged for modern life
                    </h1>
                    <div className='shop-now-btn'>
                        <button className='button is-black' id='shop-now' onClick={()=> history.push('/shop')}>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Hero)