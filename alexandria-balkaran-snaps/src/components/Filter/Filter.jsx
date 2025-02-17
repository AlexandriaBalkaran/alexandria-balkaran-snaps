import { useState } from "react";
import Tag from "/src/components/Tag/Tag.jsx";
import tags from "/src/data/tags.json";
import photos from "/src/data/photos.json";
import "/src/components/Filter/Filter.scss";
import CardList from "../CardList/CardList";
import Hero from "../Hero/Hero";
import Header from "../Header/Header";


function Filter() {

  const [selectedTag, setSelectedTag] = useState(null);
  const filteredPhotos = selectedTag ? photos.filter((photo) => photo.tags.includes(selectedTag)) : photos;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setDrawerOpen(!drawerOpen);
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="header--fixed">
        <Header/>
        <div className="filter__button">
          <button className={`filter__button--color ${isActive ? 'active' : ''}`}
            onClick={handleButtonClick} 
          >
            {drawerOpen ? "" : ""} Filters
            <img className="filter__image" src="/src/assets/images/Filter.svg" alt="filter icon"></img>
          </button>
        </div>
      </div>
     

      <div className="filter__content">
        
        <div className={`drawer ${drawerOpen ? "drawer--open" : ""}`}>
        <h2 className="filter__title">Filters</h2>

          <ul className="filter__list">
            {tags.map((tag) => (
              <li
                key={tag}
                onClick={() => {
                  if (selectedTag === tag) {
                    setSelectedTag(null);
                  } else {
                    setSelectedTag(tag);
                  }
                }}
              >
                <Tag tag={tag} isClickable selectedTag={selectedTag} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hero-card__container">
          <Hero></Hero>

          <div className="card__container--width">
            {filteredPhotos.map((photo) => {
                return <PhotoCard photo={photo} key={photo.id} />;
              })}
          </div>
      </div>
    </>
  );
}


  function PhotoCard({ photo }) {
    
      return (
        <div className='card__container' key={photo.id}>
          <img className='card__image' src={photo.photo} alt={photo.photographer} />
          <h4 className='card__photographer'>{photo.photographer}</h4>
    
          {photo.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
  );
}

export default Filter;

