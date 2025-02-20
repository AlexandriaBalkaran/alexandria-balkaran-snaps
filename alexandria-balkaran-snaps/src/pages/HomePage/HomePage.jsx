import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx"
import Hero from "../../components/Hero/Hero";
import FilteredPhotos from "../../components/FilteredPhotos/FilteredPhotos.jsx";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer.jsx";
import FilterButton from "../../components/FilterButton/FilterButton.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Tag from "../../components/Tag/Tag.jsx";
// import photos from "../../data/photos.json";
import "./Homepage.scss"
import axios from "axios";

function HomePage() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [photos, setPhotos] = useState([]);

  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag)) 
    : photos;

  const handleButtonClick = () => {
    setIsActive(!isActive);
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="app">
      <div className="header--fixed">
        <Header />
        <FilterButton
          isActive={isActive}
          drawerOpen={drawerOpen}
          handleButtonClick={handleButtonClick}
        />
      </div>

      <div className="main__content">
        <div className={`filter__drawer ${drawerOpen ? 'filter__drawer--open' : ''}`}>
          <FilterDrawer
            drawerOpen={drawerOpen}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}/>
        </div>

        <div className="hero-photos__content">
          <Hero />
          <FilteredPhotos filteredPhotos={filteredPhotos} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;