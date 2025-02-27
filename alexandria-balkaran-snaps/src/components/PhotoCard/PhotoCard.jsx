import React from "react";
import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";
import "./PhotoCard.scss";

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

export default PhotoCard;