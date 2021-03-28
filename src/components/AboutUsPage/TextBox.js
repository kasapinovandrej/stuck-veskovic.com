import React from 'react'

const TextBox = (props) => {
    return (
        <div className="about">
            <div className="wrap" >
                <div className="about__box">
                    <div className="about__text">
                        <img src={props.data.workerImage} alt={props.data.owner} className="about__image" />
                        <p className="about__p about__firstLetter">{props.data.text}</p>
                        <p className="about__p">{props.data.text1}</p>
                        <p className="about__p">{props.data.text2}</p>
                        <p className="about__p">{props.data.text3}</p>
                        <p className="about__p">{props.data.text4}</p>
                        <p className="about__p">{props.data.text5}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextBox
