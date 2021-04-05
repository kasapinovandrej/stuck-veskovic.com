import React from 'react';
import Swiper from '../components/HomePage/Swiper';
import Projects from '../components/HomePage/Projects';
import Services from '../components/HomePage/Services';
import Clients from '../components/HomePage/Clients';


const Home = (props) => {
    return (
        <div className="home">
            <Swiper />
            <Projects />
            <Services func={props.func} />
            <Clients />
        </div>
    )
}

export default Home;
