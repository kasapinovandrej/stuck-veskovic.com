import React from 'react';

const SinglePicture = (props) => {
    return (
        <div className="single">
            <img className="img" src={props.img} alt={`${props.img}`} />
            <h3 className="image-title">{props.title}</h3>
        </div >
    )
}

export default SinglePicture;

