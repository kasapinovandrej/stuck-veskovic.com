import React from 'react';
import { Link } from 'react-router-dom';

const MultiPictures = (props) => {
    return (
        <div>
            <div className="multi">
                <Link to={props.linkOne} className="multi__imgbox">
                    <img className="img" src={props.imgOne} alt={`${props.imgOne}`} />
                    <h3 className="image-title">{props.titleOne}</h3>
                </Link>
                <Link to={props.linkTwo} className="multi__imgbox">
                    <img className="img" src={props.imgTwo} alt={`${props.imgTwo}`} />
                    <h3 className="image-title">{props.titleTwo}</h3>
                </Link>
            </div >
        </div>
    )
}

export default MultiPictures;
