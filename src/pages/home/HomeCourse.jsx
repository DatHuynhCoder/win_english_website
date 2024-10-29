

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import './HomeCourse.scss'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

const HomeCourse = ({HomeCourseData}) => {
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
            depth: 694,
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
          {
            HomeCourseData.map((item, index) => (
              <SwiperSlide key={index}>
                <div style={{width: '50%', height: '50%', margin: '0 auto'}}>
                  <Card style={{ width: '18rem', margin: '0 auto' }}>
                    <Card.Img variant="top" src={item.image}/>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.content}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
            ))
          }
        
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FaArrowAltCircleLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FaArrowAltCircleRight />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  )
}

export default HomeCourse
