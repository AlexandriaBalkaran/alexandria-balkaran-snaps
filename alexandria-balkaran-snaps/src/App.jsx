import Header from './components/Header/Header'
// import Card from './components/Card/Card'
import CardList from './components/CardList/CardList'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Filter from './components/Filter/Filter'
import FilterButton from './components/FilterButton/FilterButton';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import FilteredPhotos from './components/FilteredPhotos/FilteredPhotos';

import { useState } from 'react'
import './App.scss'
import '/src/styles/partials/_global.scss'


function App() {

  return (
    <>
    {/* <Header/> */}
    <Filter/>
    <CardList></CardList>
    <Footer/>
      
    </>
  )
}

export default App
