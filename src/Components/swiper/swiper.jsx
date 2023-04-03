import swipe1 from '../../img/swiper1.png';
import swipe2 from '../../img/swiper2.png';



import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";

export default function swiper() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='wrap'>
          <img className="swip" src={swipe1} alt="Error" />
        </SwiperSlide>
        <SwiperSlide className='wrap'>
          <img className="swip" src={swipe2} alt="Error" />
        </SwiperSlide>
        <SwiperSlide className='wrap'>
          <img className="swip" src={swipe1} alt="Error" />
        </SwiperSlide>
        <SwiperSlide className='wrap'>
          <img className="swip" src={swipe2} alt="Error" />
        </SwiperSlide>
        <SwiperSlide className='wrap'>
          <img className="swip" src={swipe1} alt="Error" />
        </SwiperSlide>
        <SwiperSlide className='wrap'>
          <img className="swip" src={swipe2} alt="Error" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}