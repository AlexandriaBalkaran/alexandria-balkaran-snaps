import Header from './components/Header/Header'
// import Card from './components/Card/Card'
import CardList from './components/CardList/CardList'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Filter from './components/Filter/Filter'

import { useState } from 'react'
import './App.scss'
import '/src/styles/partials/_global.scss'


function App() {
  

  return (
    <>
      <Header/>
      <Hero></Hero>

      <Filter/>
      
      <section>
        <CardList/>
      </section>

      <Footer/>
      
    </>
  )
}

export default App
