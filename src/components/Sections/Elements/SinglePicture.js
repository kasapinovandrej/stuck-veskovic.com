import React from 'react';

const SinglePicture = (props) => {
    return (
        <div className="single">
            <img className="single__img" src={props.img} alt={`${props.img}`} />
            <h3 className="single__h3">{props.title}</h3>
        </div >
    )
}

export default SinglePicture;

