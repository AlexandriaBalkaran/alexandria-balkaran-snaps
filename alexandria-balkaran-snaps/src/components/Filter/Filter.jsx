import { useState } from "react";
import Tag from "/src/components/Tag/Tag.jsx";
import tags from "/src/data/tags.json";
import photos from "/src/data/photos.json";
// import Card from "../Card/Card";
import "/src/components/Filter/Filter.scss";
import CardList from "../CardList/CardList";


// function Filter() {
//   console.log("workin");
//   const [selectedTag, setSelectedTag] = useState(null);

//   const filteredPhotos = selectedTag ? photos.filter((photo) => photo.tags.includes(selectedTag)) : photos;

//   return (
//     <>
//       {/* <h1>welcome!</h1> */}
//       {/* <div>selected tag: {selectedTag ? selectedTag : "no tag selected"}</div> */}

//       {/* filter list */}
//       <ul>
//         {tags.map((tag) => (
//           <li
//             key={tag}
//             onClick={() => {
//               if (selectedTag === tag) {
//                 setSelectedTag(null);
//               } else {
//                 setSelectedTag(tag);
//               }
//             }}
//           >
//             <Tag tag={tag} isClickable selectedTag={selectedTag} />
//           </li>
//         ))}
//       </ul>

//       {/* {filteredPhotos.map((photo) => {
//         return <CardList photo={photo} key={photo.id} />;
//       })} */}
//     </>
//   );
// }

// export default Filter;









function Filter() {
  console.log("render App comp");
  const [selectedTag, setSelectedTag] = useState(null);

  const filteredPhotos = selectedTag ? photos.filter((photo) => photo.tags.includes(selectedTag)) : photos;

  return (
    <>
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

      {filteredPhotos.map((photo) => {
        return <PhotoCard photo={photo} key={photo.id} />;
      })}
    </>
  );
}

// function PhotoCard({ photo }) {
//   // const [count, setCount] = useState(0);
//   console.log("render PC");
//   return (

//     <div className='card__container'key={photo.id}>
//     <img className='card__image' src={photo.photo} alt={photo.photographer}  />
//     <h4 className='card__photographer'>{photo.photographer}</h4>
//     {photo.tags.map((tag) => {
//         return <div className='card__tag' key={tag}>{tag}</div>;
//         <Tag tag={tag} key={tag} />
//     })}
// </div>

    // <div className="photo">
    //   <img src={photo.photo} alt={photo.photoDescription} />
    //   {photo.tags.map((tag) => (
    //     <Tag tag={tag} key={tag} />
    //   ))}
    // </div>

    function PhotoCard({ photo }) {
      console.log("render PC");
    
      return (
        <div className='card__container' key={photo.id}>
          <img className='card__image' src={photo.photo} alt={photo.photographer} />
          <h4 className='card__photographer'>{photo.photographer}</h4>
          
          {/* {photo.tags.map((tag) => (
            <div key={tag} className='card__tag'>
              {tag}
            </div>
          ))} */}
    
          {photo.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
  );
}

export default Filter;