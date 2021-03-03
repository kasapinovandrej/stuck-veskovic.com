import React from 'react';

const MultiPictures = (props) => {
    return (
        <div>
            <div className="multi">
                <div className="multi__imgbox">
                    <img className="img" src={props.imgOne} alt={`${props.imgOne}`} />
                    <h3 className="image-title">{props.titleOne}</h3>
                </div>
                <div className="multi__imgbox">
                    <img className="img" src={props.imgTwo} alt={`${props.imgTwo}`} />
                    <h3 className="image-title">{props.titleTwo}</h3>
                </div>
            </div >
        </div>
    )
}

export default MultiPictures;
