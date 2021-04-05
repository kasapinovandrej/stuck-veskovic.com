import React from 'react';
import Hero from '../components/Hero';
import Image from '../assets/img/Hero/hero-services.jpg'
import ServiceDescription from '../components/ServicesPage/ServiceDescription';

const Services = ({ func }) => {
    return (
        <div>
            <Hero backgroundImage={Image} title="LEISTUNGEN" />
            <ServiceDescription func={func} />
        </div>
    )
}

export default Services
