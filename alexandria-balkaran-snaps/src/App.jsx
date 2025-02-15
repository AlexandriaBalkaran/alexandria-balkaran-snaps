import Header from './components/Header/Header'
// import Card from './components/Card/Card'
import CardList from './components/CardList/CardList'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Filter from './components/Filter/Filter'

import { useState } from 'react'
import './App.scss'
import '/src/styles/partials/_global.scss'
import PhotoCardList from './components/PhotoCardList/PhotoCardList'
import FilterDrawer from './components/FilterDrawer/FilterDrawer'


function App() {
  

  return (
    <>
    <div className='header__container'>
      <Header/>
      <Filter/>
    </div>

    <Hero></Hero>
    <PhotoCardList>
    </PhotoCardList>
    
    <FilterDrawer></FilterDrawer>
      
    <section>
      <CardList/>
    </section>

    <Footer/>
      
    </>
  )
}

export default App
