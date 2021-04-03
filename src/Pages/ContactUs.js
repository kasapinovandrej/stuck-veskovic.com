import React, { useRef } from 'react';
import Hero from '../components/Hero';
import Image from '../assets/img/Hero/hero-contact.jpg';
import Info from '../components/ContactUs.js/ContactInfo';
import Form from '../components/ContactUs.js/Form';
import Folow from '../components/ContactUs.js/Follow';
import Clients from '../components/HomePage/Clients';

const ContactUs = () => {
    const ref = useRef(null)
    const scrollFunction = (e) => {
        e.preventDefault()
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <Hero backgroundImage={Image} title="kontaktiere uns" />
            <Info scrollFunction={scrollFunction} />
            <Form ref={ref} />
            <Folow />
            <Clients />
        </div>
    )
}

export default ContactUs
