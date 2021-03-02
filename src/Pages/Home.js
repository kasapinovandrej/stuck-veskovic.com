import React from 'react';
import Swiper from '../components/Swiper';
import Projects from '../components/Sections/Projects';
import Logo from '../assets/img/logo/Logo-beli.png'

const Home = () => {
    return (
        <div className="home">
            <img src={Logo} alt="Logo" className='home__logo' />
            <Swiper />
            <Projects />
        </div>
    )
}

export default Home;
