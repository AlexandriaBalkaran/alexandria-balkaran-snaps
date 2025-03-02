import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FilteredPhotos.scss";
import PhotoCard from "../PhotoCard/PhotoCard.jsx";

function FilteredPhotos() {
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    try {
      const { data } = await axios.get(`http://localhost:8080/photos/`);
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

export default FilteredPhotos;
