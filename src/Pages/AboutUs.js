import React from 'react';
import Hero from '../components/Hero';
import Image from '../assets/img/Hero/hero-aboutUs.jpg'

const AboutUs = () => {
    return (
        <div>
            <Hero backgroundImage={Image} title="ÜBER UNS" />
        </div>
    )
}

export default AboutUs
