import React from 'react';
import DataServices from '../Data/dataServices';

const Services = () => {
    return (
        <section className="ser">
            <div className="wrap">
                <h2>uslusge</h2>
                <div className="ser__box">
                    {DataServices.map(el => (
                        <div className="ser__card" key={el.id}>
                            <img src={el.image} alt="aaa" className="ser__img" />
                            <h3>{el.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;
