import { useState } from "react";
import PhotoCard from "/src/components/PhotoCard/PhotoCard";
import photos from "/src/data/photos.json";

function PhotoCardList({ selectedTag }) {
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <div>
      {filteredPhotos.map((photo) => {
        return <PhotoCard photo={photo} key={photo.id} />;
      })}
    </div>
  );
}

export default PhotoCardList;