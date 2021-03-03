import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight, BsArrowLeft, BsArrowDown } from 'react-icons/bs'
import 'swiper/swiper.scss';
import DataSwiper from '../Data/dataSwiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const HeroSwiper = () => {

    const scrollToSection = (e) => {
        const sectionOne = document.querySelector('.pro').getBoundingClientRect()
        window.scrollTo({
            left: sectionOne.left + window.pageXOffset,
            top: sectionOne.top + window.pageYOffset,
            behavior: 'smooth'
        })
    }

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{
                clickable: true
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }}
        >
            {
                DataSwiper.map(el => (
                    <SwiperSlide key={el.id}>
                        <div className="swiper">
                            <img src={el.image} alt={`${el.image}`} className="swiper__image" />
                            <div className="swiper__textbox">
                                <h1 className="swiper__h1">{el.title}</h1>
                                <p className="swiper__p">{el.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            <div className="swiper-button-prev"><BsArrowLeft /></div>
            <div className="swiper-button-next"><BsArrowRight /></div>
            <div className="btn-next-section" onClick={scrollToSection}><BsArrowDown /></div>
        </ Swiper >
    );
};

export default HeroSwiper