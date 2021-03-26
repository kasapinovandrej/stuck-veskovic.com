import React from 'react';
import Hero from '../components/Hero';
import Image from '../assets/img/Hero/hero-services.jpg'
import ServiceDescription from '../components/ServicesPage/ServiceDescription';

const Services = () => {
    return (
        <div>
            <Hero backgroundImage={Image} title="LEISTUNGEN" />
            <ServiceDescription />
        </div>
    )
}

export default Services
