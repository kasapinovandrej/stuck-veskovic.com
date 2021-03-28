import React from 'react';
import Hero from '../components/Hero';
import Image from '../assets/img/Hero/hero-aboutUs.jpg'
import TextBox from '../components/AboutUsPage/TextBox';
import dataAboutUs from '../Data/dataAboutUs';

const AboutUs = () => {
    return (
        <div>
            <Hero backgroundImage={Image} title="ÜBER UNS" />
            <TextBox data={dataAboutUs} />
        </div>
    )
}

export default AboutUs
