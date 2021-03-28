import React from 'react'

const Owner = (props) => {
    return (
        <div className="wrap">
            <div className="about__owner-imagebox">
                <img className="about__owner-image" src={props.data.data.ownerImage} alt={props.data.data.title} />
            </div>
            <h3 className="about__owner-name">{props.data.data.owner}</h3>
            <h3 className="about__owner-title">{props.data.data.title}</h3>
        </div>
    )
}

export default Owner
