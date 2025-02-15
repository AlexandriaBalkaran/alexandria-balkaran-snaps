// import photos from "/src/data/photos.json";  // Import photos here
// import PhotoCard from "/src/components/PhotoCard/PhotoCard";

// function PhotoCardList({ selectedTag }) {
//   const filteredPhotos = selectedTag
//     ? photos.filter((photo) => photo.tags.includes(selectedTag))
//     : photos;

//   return (
//     <div>
//       {filteredPhotos.map((photo) => {
//         return <PhotoCard photo={photo} key={photo.id} />;
//       })}
//     </div>
//   );
// }

// export default PhotoCardList;






// import { useState } from "react";
// import photos from "/src/data/photos.json";  // Import photos here
// import PhotoCard from "/src/components/PhotoCard/PhotoCard";  // Import PhotoCard component

// function FilteredPhotos({ selectedTag }) {
//   const filteredPhotos = selectedTag
//     ? photos.filter((photo) => photo.tags.includes(selectedTag))
//     : photos;

//   return (
//     <div>
//       {filteredPhotos.map((photo) => (
//         <PhotoCard photo={photo} key={photo.id} />
//       ))}
//     </div>
//   );
// }

// export default FilteredPhotos;