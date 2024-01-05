import React from "react";

const GridGallery = (props) => {
  return (
    <div className="wrap">
      {props.images.length <= 5 ? (
        <div className="grid">
          {props.images.map((image, i) => (
            <div
              onClick={props.showHideModal}
              key={image}
              className={`grid__imagebox grid__imagebox--${i + 1}`}
              // style={{ backgroundImage: `url(${image})` }}
            >
              <img src={image} alt={i} className="grid__images" />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex__imagebox">
          {props.images.map((image, i) => (
            <div
              onClick={props.showHideModal}
              key={image}
              className="flex__images__box"
            >
              <img src={image} alt={i} className="flex__images" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GridGallery;
