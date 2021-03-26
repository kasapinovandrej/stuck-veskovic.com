import React from 'react';
import dataServiceDescription from '../../Data/dataServiceDescription';

const ServiceDescription = () => {
    const isEvenNumber = number => number % 2 === 0
    return (
        <div className="service">
            {dataServiceDescription.map((el, i) => (
                <div className="service__wrap" key={el.id} style={isEvenNumber(i) ? null : { flexDirection: 'row-reverse' }}>
                    <div className="service__imagebox">
                        <img src={el.image} alt={el.title} className="service__image" />
                        <div className="service__title"><h3 className="service__h3">{el.title}</h3></div>
                    </div>
                    <div className="service__textbox">
                        <h5>{el.descriptionTitle}</h5>
                        <p className="service__p">{el.descriptionText}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServiceDescription;
