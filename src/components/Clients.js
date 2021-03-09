import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DataClients from '../Data/dataClients';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

SwiperCore.use([Navigation, Pagination]);

const Clients = () => {
    return (
        <section className="cli">
            <div className='wrap'>
                <h2>nasi partneri</h2>
                <div className="cli__swipbox">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            nextEl: '.cli__next',
                            prevEl: '.cli__prev'
                        }}
                        breakpoints={{
                            350: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        {DataClients.map(el => (
                            <SwiperSlide key={el.id}>
                                <div className='cli__imgbox'>
                                    <img src={el.image} alt={el.id} className='cli__img' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="cli__next"><RiArrowRightSLine /></div>
                    <div className="cli__prev"><RiArrowLeftSLine /></div>
                </div>
            </div>
        </section>
    )
}

export default Clients
