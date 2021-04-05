import React from 'react';
import DataServices from '../../Data/dataServices';
import { FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Services = (props) => {
    return (
        <section className="ser">
            <div className="wrap">
                <h2>LEISTUNGEN</h2>
                <div className="ser__box">
                    {DataServices.map(el => (
                        <div className="ser__card" key={el.id} onClick={props.func}>
                            <img src={el.image} alt={`${el.id}`} className="ser__img" />
                            <h3>{el.title}</h3>
                        </div>
                    ))}
                    <Link to="/leistungen" className="ser__link">Mehr leistungen sehen <FiExternalLink /></Link>
                </div>
            </div>
        </section>
    )
}

export default Services;
