import React from 'react'

const GridGallery = (props) => {
    return (
        <div className='wrap'>
            <div className="grid">
                {props.images.map((image, i) =>
                    <div key={image} className={`grid__imagebox grid__imagebox--${i + 1}`} style={{ backgroundImage: `url(${image})` }}>
                    </div>)}
            </div>
        </div>
    )
}

export default GridGallery
