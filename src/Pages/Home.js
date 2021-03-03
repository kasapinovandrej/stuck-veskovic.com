import React from 'react';
import Swiper from '../components/Swiper';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Logo from '../assets/img/logo/Logo-beli.png'

const Home = () => {
    return (
        <div className="home">
            <img src={Logo} alt="Logo" className='home__logo' />
            <Swiper />
            <Projects />
            <Services />
        </div>
    )
}

export default Home;
