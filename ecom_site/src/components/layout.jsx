import React from 'react'
import Header from './Header'
import Footer from './footer/footer'

const Layout = ({children}) =>{

    return(
        <>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}


export default Layout