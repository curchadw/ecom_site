import React from 'react'
import Hero from '../hero/hero'
import Layout from './layout'
import MainSection from './main-section'

const HomePage = () =>{
    return (
        <>
           <Layout>
                <Hero />
                <MainSection />
           </Layout>
        </>
    )
}

export default HomePage