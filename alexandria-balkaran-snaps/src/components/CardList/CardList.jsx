// import Card from '../Card/Card';
import photos from '../../data/photos.json'
import "./CardList.scss";

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
            <div className='card__container'key={photo.id}>
                <img className='card__image' src={photo.photo} alt={photo.photographer}  />
                <h4 className='card__title'>{photo.photographer}</h4>
                {photo.tags.map((tag, index) => {
                    return <div className='card__tag' key={index}>{tag}</div>;
                })}
            </div>
        );
    });
}

function Tag({ name }) {
    return <div>{name}</div>;
}

export default CardList;
