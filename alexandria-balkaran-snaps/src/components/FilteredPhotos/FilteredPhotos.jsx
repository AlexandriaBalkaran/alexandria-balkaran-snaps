import React from "react";
import Tag from "../Tag/Tag";
import "./FilteredPhotos.scss";
import { Link } from "react-router-dom";

function FilteredPhotos({ filteredPhotos }) {
  return (
    <div className="hero-card__container">
      <div className="card__container--width">
        {filteredPhotos.map((photo) => (
          <PhotoCard photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({ photo }) {
  console.log(photo.id);
  return (
    // <Link to={`/photo/${photo.id}`} className="card__link">
    // <div className="card__container" key={photo.id}>
    //   <img className="card__image" src={photo.photo} alt={photo.photographer} />
    //   {/* </Link> */}
    //   <h4 className="card__photographer">{photo.photographer}</h4>
    //   {photo.tags.map((tag) => (
    //     <Tag tag={tag} key={tag} />
    //   ))}
    // </div>
    <Link to={`/photo/${photo.id}`} className="card__link">
    <div className="card__container" key={photo.id}>
      <img className="card__image" src={photo.photo} alt={photo.photographer} />
      <h4 className="card__photographer">{photo.photographer}</h4>
      {photo.tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  </Link>
   
  );
}

export default FilteredPhotos;
