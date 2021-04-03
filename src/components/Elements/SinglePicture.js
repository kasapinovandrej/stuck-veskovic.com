import React from 'react';
import { Link } from 'react-router-dom';

const SinglePicture = (props) => {
    return (
        <Link to={props.link} className="single">
            <img className="img" src={props.img} alt={`${props.img}`} />
            <h3 className="image-title">{props.title}</h3>
        </Link >
    )
}

export default SinglePicture;

