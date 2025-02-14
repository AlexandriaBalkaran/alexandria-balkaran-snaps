// import Card from '../Card/Card';
import photos from '../../data/photos.json'
import "./CardList.scss";

function CardList () {
    return (
        <section className='card-list'>
            {/* <PhotoList photos={photos} /> */}
        </section>
    )
}

function PhotoList ({ photos }) {
    return photos.map((photo) => {
        return (
            <div className='card__container'key={photo.id}>
                {/* <img className='card__image' src={photo.photo} alt={photo.photographer}  /> */}
                {/* <h4 className='card__photographer'>{photo.photographer}</h4> */}
                {/* {photo.tags.map((tag) => { */}
                    {/* return <div className='card__tag' key={tag}>{tag}</div>; */}
                {/* })} */}
            </div>
        );
    });
}





{/* <div className="photo__tags">
  {photo.tags.map((tag) => (
    <Tag tag={tag} key={tag} setCount={setGlobalCounter} />
  ))}
</div>
</div> */}
// function Tag({ name }) {
//     return <div>{name}</div>;
// }

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
