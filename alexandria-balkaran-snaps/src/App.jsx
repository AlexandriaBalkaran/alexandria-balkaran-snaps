import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FilterButton from './components/FilterButton/FilterButton';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import FilteredPhotos from './components/FilteredPhotos/FilteredPhotos';
import Footer from './components/Footer/Footer';
import photos from './data/photos.json';
import './App.scss';

function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const filteredPhotos = selectedTag 
    ? photos.filter((photo) => photo.tags.includes(selectedTag)) : photos;

  const handleButtonClick = () => {
    setIsActive(!isActive);
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="app">
      <div className="header--fixed">
        <Header />
        <FilterButton 
          isActive={isActive} drawerOpen={drawerOpen} handleButtonClick={handleButtonClick}/>
      </div>
      
      <FilterDrawer 
        drawerOpen={drawerOpen} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>

      <div className='hero-photos__content'> 
           <Hero/>

           <FilteredPhotos filteredPhotos={filteredPhotos} />
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;