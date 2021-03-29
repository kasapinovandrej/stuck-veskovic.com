import React from 'react';
import Hero from '../components/Hero';
import Image from '../assets/img/Hero/hero-contact.jpg';
import Info from '../components/ContactUs.js/ContactInfo';
import Form from '../components/ContactUs.js/Form';
import Folow from '../components/ContactUs.js/Follow';
import Clients from '../components/HomePage/Clients';

const ContactUs = () => {
    return (
        <div>
            <Hero backgroundImage={Image} title="kontaktiere uns" />
            <Info />
            <Form />
            <Folow />
            <Clients />
        </div>
    )
}

export default ContactUs
