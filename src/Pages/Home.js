import React from 'react';
import Swiper from '../components/HomePage/Swiper';
import Projects from '../components/HomePage/Projects';
import Services from '../components/HomePage/Services';
import Clients from '../components/HomePage/Clients';
import Logo from '../components/Logo';


const Home = () => {
    return (
        <div className="home">
            <Swiper />
            <Projects />
            <Services />
            <Clients />
        </div>
    )
}

export default Home;
