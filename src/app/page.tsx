"use client"
import React, { useState } from 'react'
import Navbar from './components/front-end/Navbar'
import Cart from './components/front-end/Cart'
import Hero from './components/front-end/Hero'
import Feature from './components/front-end/Feature'
import Products from './components/front-end/Products'
import Banner from './components/front-end/Banner'
import Footer from './components/front-end/Footer'
const Home = () => {
  const [showCart, setShowCart] =useState(false)
  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      { showCart && <Cart setShowCart={setShowCart} />}
      <Hero/>
      <Feature/>
      <Products/>
      <Banner/>
      <Footer/>
    </main>
  )
}

export default Home