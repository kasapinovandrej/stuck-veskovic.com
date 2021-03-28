import React from 'react';
import Hero from '../components/Hero';
import Image from '../assets/img/Hero/hero-aboutUs.jpg'
import TextBox from '../components/AboutUsPage/TextBox';
import dataAboutUs from '../Data/dataAboutUs';
import Location from '../components/AboutUsPage/Location';

const AboutUs = () => {
    
    return (
        <div>
            <Hero backgroundImage={Image} title="ÜBER UNS" />
            <TextBox data={dataAboutUs} />
            <Location />
        </div>
    )
}

export default AboutUs
