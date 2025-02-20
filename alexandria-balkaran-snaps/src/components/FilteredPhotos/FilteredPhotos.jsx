// import React from "react";
// import Tag from "../Tag/Tag";
// import "./FilteredPhotos.scss";
// import { Link } from "react-router-dom";

// function FilteredPhotos({ filteredPhotos }) {
//   return (
//     <div className="hero-card__container">
//       <div className="card__container--width">
//         {filteredPhotos.map((photo) => (
//           <PhotoCard photo={photo} key={photo.id} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function PhotoCard({ photo }) {
//   console.log(photo.id);
//   return (
//     <Link to={`/photo/${photo.id}`} className="card__link">
//     <div className="card__container" key={photo.id}>
//       <img className="card__image" src={photo.photo} alt={photo.photographer} />
//       <h4 className="card__photographer">{photo.photographer}</h4>
//       {photo.tags.map((tag) => (
//         <Tag tag={tag} key={tag} />
//       ))}
//     </div>
//   </Link>
   
//   );
// }

// export default FilteredPhotos;


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
      const { data } = await axios.get(
        "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e"
      );
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