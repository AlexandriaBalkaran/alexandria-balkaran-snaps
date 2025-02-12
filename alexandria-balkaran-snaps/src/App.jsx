import Header from './components/Header/Header'
import Card from './components/Card/Card'
import CardList from './components/CardList/CardList'
import Hero from './components/Hero/Hero'
// import { useState } from 'react'
import './App.scss'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <Hero></Hero>
      
      <section>
        <CardList></CardList>
      </section>

      <Footer/>
      
    </>
  )
}

export default App
