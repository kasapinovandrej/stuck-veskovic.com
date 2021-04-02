import React from 'react'

const GridGallery = (props) => {
    console.log(props)
    return (
        <div className='wrap'>
            <div className="grid">
                {props.images.map((image, i) =>
                    <div key={image} className={`grid__imagebox grid__imagebox--${i + 1}`} style={{ backgroundImage: `url(${image})` }}>
                        {/* <img className={`grid__image grid__image--${i + 1}`} src={image} alt="" /> */}
                    </div>)}
            </div>
        </div>
    )
}

export default GridGallery
