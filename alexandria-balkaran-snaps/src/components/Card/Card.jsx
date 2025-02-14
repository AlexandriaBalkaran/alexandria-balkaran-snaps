function Card({ url, title }) {
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <h4 className="card__title">{title}</h4>
        </div>
    );
}

export default Card;


// import { useState } from "react";
// import Tag from "/src/components/Tag/Tag.jsx";
// import "./Card.scss";

// function Card({ photo }) {
//   console.log(photo.photographer);

//   const [count] = useState(0);

//   return (
//     <div className="photo">
//       <div className="photo__content">
//         {/* <img className="photo__image" src={photo.photo} alt={photo.photoDescription} /> */}
//         {/* <div className="photo__photographer">{photo.photographer}</div> */}
//       </div>
//       {/* <div className="photo__tags">
//         {photo.tags.map((tag) => (
//           <Tag tag={tag} key={tag} />
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default Card;