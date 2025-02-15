// import Card from '../Card/Card';
import photos from '../../data/photos.json'
import "./CardList.scss";
import Filter from '../Filter/Filter';
import { useState } from "react";

function CardList () {
    // const [selectedTag, setSelectedTag] = useState(null);
    // const filteredPhotos = selectedTag ? photos.filter((photo) => photo.tags.includes(selectedTag)) : photos;
    
    return (
        <section className='card-list'>
            {/* <PhotoList photos={photos} /> */}
            {/* {filteredPhotos.map((photo) => {
            return <PhotoCard photo={photo} key={photo.id} />;
          })} */}
        </section>
    )
}


//     function PhotoCard({ photo }) {
//       console.log("render PC");
    
//       return (
//         <div className='card__container' key={photo.id}>
//           <img className='card__image' src={photo.photo} alt={photo.photographer} />
//           <h4 className='card__photographer'>{photo.photographer}</h4>
    
//           {photo.tags.map((tag) => (
//             <Tag tag={tag} key={tag} />
//           ))}
//         </div>
//   );
// }

//    {filteredPhotos.map((photo) => {
//             return <PhotoCard photo={photo} key={photo.id} />;
//           })}



export default CardList;


// function PhotoCard({ photo, setGlobalCounter }) {
//     console.log(photo.photographer);
  
//     const [count, setCount] = useState(0);
  
//     return (
//       <div className="photo">
//         <div className="photo__content">
//           <img className="photo__image" src={photo.photo} alt={photo.photoDescription} />
//           <div className="photo__photographer">{photo.photographer}</div>
//         </div>
//         <div className="photo__tags">
//           {photo.tags.map((tag) => (
//             <Tag tag={tag} key={tag} setCount={setGlobalCounter} />
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default PhotoCard;
