// import { useState } from "react";
// import Tag from "/src/components/Tag/Tag.jsx";
// import tags from "/src/data/tags.json";
// import photos from "/src/data/photos.json";
// // import Card from "../Card/Card";
// import "/src/components/Filter/Filter.scss";
// import CardList from "../CardList/CardList";
// import Hero from "../Hero/Hero";


// function Filter() {
//   console.log("render App comp");
//   const [selectedTag, setSelectedTag] = useState(null);

//   const filteredPhotos = selectedTag ? photos.filter((photo) => photo.tags.includes(selectedTag)) : photos;
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <>
//       {/* <div> */}
          
//         <div className="filter__button">
//           <button
//             onClick={() => {
//               setDrawerOpen(!drawerOpen);
//             }}
//           >
//             {drawerOpen ? "" : ""} Filters
//           </button>
//         </div>

//       <div className="filter__content">
        
//         <div className={`drawer ${drawerOpen ? "drawer--open" : ""}`}>
//         <h2>Filters</h2>

//       {/* </div> */}

//           <ul className="filter__list">
//             {tags.map((tag) => (
//               <li
//                 key={tag}
//                 onClick={() => {
//                   if (selectedTag === tag) {
//                     setSelectedTag(null);
//                   } else {
//                     setSelectedTag(tag);
//                   }
//                 }}
//               >
//                 <Tag tag={tag} isClickable selectedTag={selectedTag} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <Hero></Hero>
//       <div>
//         {filteredPhotos.map((photo) => {
//             return <PhotoCard photo={photo} key={photo.id} />;
//           })}
//         </div>
//     </>
//   );
// }


//   function PhotoCard({ photo }) {
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

// export default Filter;



import { useState } from "react";
import FilterDrawer from "../FilterDrawer/FilterDrawer";
import PhotoCardList from "../PhotoCardList/PhotoCardList";
import Hero from "../Hero/Hero";

function Filter() {
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <>
      <FilterDrawer selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <Hero />
      <PhotoCardList selectedTag={selectedTag} />
    </>
  );
}

export default Filter;