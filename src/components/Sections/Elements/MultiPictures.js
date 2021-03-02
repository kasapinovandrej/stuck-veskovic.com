import React from 'react';

const MultiPictures = (props) => {
    return (
        <div>
            <div className="multi">
                <img className="multi__image" src={props.imgOne} alt={`${props.imgOne}`} />
                <img className="multi__image" src={props.imgTwo} alt={`${props.imgTwo}`} />
                <h3 className="multi__h3">{props.titleOne}</h3>
                <h3 className="single__h3">{props.titleTwo}</h3>
            </div >
        </div>
    )
}

export default MultiPictures;
