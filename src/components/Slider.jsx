import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../assets/styles/Slider.scss'
import { Scrollbar } from 'swiper/modules';
import slider1 from '../assets/img/slider1.jpg'
import slider2 from '../assets/img/slider2.jpg'
import slider3 from '../assets/img/slider3.jpg'
import slider4 from '../assets/img/slider4.jpg'
import slider5 from '../assets/img/slider5.jpg'
import slider6 from '../assets/img/slider6.jpg'
import slider7 from '../assets/img/slider7.jpg'
import slider8 from '../assets/img/slider8.jpg'
import slider9 from '../assets/img/slider9.jpg'

const Slider = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider9} alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
