import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link className="card" to={`/projekte${props.cardData.path}`}>
            <img className="card__image" src={props.cardData.image} alt={props.cardData.title} />
            <h6 className="card__title">{props.cardData.title}</h6>
            <p className="card__text">{props.cardData.text}</p>
        </Link>
    )
}

export default Card
