function Card({ url, title }) {
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <h4 className="card__title">{title}</h4>
        </div>
    );
}

export default Card;