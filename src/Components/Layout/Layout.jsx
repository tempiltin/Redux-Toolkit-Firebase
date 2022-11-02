import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../Routers/Router'
const Layout = () => {
  return (
    <>
    <Header />
    <div>
        <Routers />
    </div>
    <Footer />
    </>
  )
}

export default Layout