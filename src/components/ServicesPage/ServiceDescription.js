import React from 'react';
import Image from '../../assets/img/ServiceDescription/Slider-1.jpg'

const ServiceDescription = () => {
    return (
        <div className="service">
            <div className="service__wrap">
                <div className="service__imagebox">
                    <img src={Image} alt="asd" className="service__image" />
                    <div className="service__title"><h3 className="service__h3">STUCK UND FASSADEN</h3></div>
                </div>
                <div className="service__textbox">
                    <h5>Installation von Fassade und Zierstein. Installation der Demit-Fassade, Abschlussarbeiten an der Fassade.</h5>
                    <p className="service__p">Die Außenseite des Hauses wird nach Ihren Wünschen mit Stuck oder mit Putz verarbeitet. Das erste Erscheinungsbild eines Gebäudes ist am wichtigsten.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceDescription;
