import React from 'react';
import dataServiceDescription from '../../Data/dataServiceDescription';

const ServiceDescription = (props) => {
    const isEvenNumber = number => number % 2 === 0
    return (
        <div className="service">
            {dataServiceDescription.map((el, i) => (
                <div className={`service__wrap ${isEvenNumber(i) ? '' : 'service__wrap--flex-direction'}`}
                    key={el.id}
                    ref={props.func}
                    id={el.id}
                >
                    <div className="service__imagebox" >
                        <img src={el.image} alt={el.title} className="service__image" />
                        <div className="service__title"><h3 className="service__h3">{el.title}</h3></div>
                    </div>
                    <div className="service__textbox">
                        <h5>{el.descriptionTitle}</h5>
                        {/* <p className="service__p">{el.descriptionText}</p> */}
                        <p className="service__p">{el.descriptionText}</p>
                        <p className="service__p">{el.descriptionText1}</p>
                        <p className="service__p">{el.descriptionText2}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServiceDescription;
