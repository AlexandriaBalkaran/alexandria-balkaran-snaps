import React from "react";
import "./CommentsPhotoCard.scss";
import Tag from "../../components/Tag/Tag";

function CommentsPhotoCard({ photo, formatDate }) {
  return (
    <div className="comments-page__container">
      <div className="photo-section">
        <img
          className="comments-page__image"
          src={photo.photo}
          alt={photo.photoDescription}
        />
        <div className="tags__container">
          {photo.tags.map((tag) => (
            <Tag tag={tag} key={tag} size="large"/>
          ))}
        </div>
        <div className="photo-section__text">
          <div className="photo-section__likes-date-container">
            <p>
              <img
                src="../src/assets/images/Like_Outline.svg"
                alt="heart outline of image"
              />
              {photo.likes} likes
            </p>
            <p className="photo-section__tablet--appear">Photo by {photo.photographer}</p>
            <p>{formatDate(photo.timestamp)}</p>
          </div>
          <p className="photo-section__mobile--disappear">Photo by {photo.photographer}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentsPhotoCard;
