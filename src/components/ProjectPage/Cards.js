import React from 'react'
import Card from './Card';

const Cards = (props) => {
    return (
        <div className='cards-box'>
            {props.data.map(card => <Card cardData={card} key={card.title} />)}
        </div>
    )
}

export default Cards
