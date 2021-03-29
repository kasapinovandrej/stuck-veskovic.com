import React from 'react';
import Hero from '../components/Hero';
import Image from '../assets/img/Hero/hero-contact.jpg';
import Info from '../components/ContactUs.js/ContactInfo';

const ContactUs = () => {
    return (
        <div>
            <Hero backgroundImage={Image} title="kontaktiere uns" />
            <Info />
        </div>
    )
}

export default ContactUs
