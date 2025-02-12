import Card from '../Card/Card';
import photos from '../../data/photos.json'

console.log(photos);

function CardList () {
    return (
        <section className='card-list'>
            <PhotoList photos={photos} />
        </section>
    )
}

function PhotoList ({ photos }) {
    return photos.map((photo) => {
        return (
            <div className='card'key={photo.id}>
                <img src={photo.photo} alt={photo.photographer}  />
                <h4 className='card__title'>{photo.photographer}</h4>
                {photo.tags.map((tag) => {
                    // <li>key={tag}</li>
                    return <div>{tag}</div>;
                })}
            </div>
        );
    });
}

function Tag({ name }) {
    return <div>{name}</div>;
}

export default CardList;
