import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Slider from "react-slick";

import pic1 from '../../assets/pic1.jpg'  
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'

import './HomeCourse.scss'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const HomeCourse = () => {
  return (
    <>
      <div className="Home-course-container">
        <h1 className="heading">Khóa học nổi bật</h1>
        <Swiper
          className="swiper_container"
          autoPlay={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 1000,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img style={{width: '70%', height: '70%'}} src={pic1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{width: '70%', height: '70%'}} src={pic2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{width: '70%', height: '70%'}} src={pic3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{width: '70%', height: '70%'}} src={pic4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{width: '70%', height: '70%'}} src={pic5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{width: '70%', height: '70%'}} src={pic6} alt="slide_image" />
            {/* <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pic1}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card> */}
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  )
}

export default HomeCourse
