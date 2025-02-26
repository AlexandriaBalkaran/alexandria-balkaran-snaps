import React, { useEffect, useState } from "react";
import axios from "axios";
import Tag from "../Tag/Tag";
import "./FilteredPhotos.scss";
import { Link } from "react-router-dom";

function FilteredPhotos() {
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    try {
      const { data } = await axios.get
        (`http://localhost:8080/photos/`);
      setFilteredPhotos(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }

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
  return (
    <Link to={`/photo/${photo.id}`} className="card__link">
      <div className="card__container" key={photo.id}>
        <img
          className="card__image"
          src={photo.photo}
          alt={photo.photoDescription}
        />
        <h4 className="card__photographer">{photo.photographer}</h4>
        {photo.tags.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
    </Link>
  );
}

export default FilteredPhotos;
