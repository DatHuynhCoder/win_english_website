
import { useContext, useEffect, useState } from "react";
import { ContextStore } from "../../context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import './HomeCourse.scss'
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

const HomeCourse = () => {
  const cookies = new Cookies()
  const [isLoaded, setIsLoaded] = useState(false)
  const {accessToken, setAccessToken} = useContext(ContextStore)
  const [examList, setExamList] = useState([{}, {}, {}])
  const [show, setShow] = useState(false);
  const [selectedExam, setSelectedExam] = useState({});
  const navigate = useNavigate();
  const handleClose = () => {
    setSelectedExam({});
    setShow(false);
  };
  const handleShow = (exam_item) => { 
    setSelectedExam(exam_item);
    setShow(true)
  };
  const handleTakeExam = () => navigate('/exam', {state: {examId: selectedExam.examid}});
  useEffect(() => {
    setAccessToken(cookies.get("accessToken"))
    if(accessToken) {
      const getExam = async () => {
        try {
          const response = await axios.get('http://localhost:8081/get-exam', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          console.log(response.data);
          setExamList(response.data);
        } catch (error) {
          console.log('Co loi trong qua trinh yeu cau get exam: ', error);
        } finally {
          console.log('check examList: ', examList)
          setIsLoaded(true)
        }
      }
      getExam();
    }
  }, [accessToken])
  return (
    <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedExam.examname}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="primary" onClick={handleTakeExam}>
              Bắt đầu thi
            </Button>
          </Modal.Footer>
        </Modal>
      <div className="Home-course-container">
        <h1 className="heading">Đề thi nổi bật</h1>
        <Swiper
          className="swiper_container"
          autoPlay={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            // depth: 694,
            depth: 600,
            // modifier: 2.5,
            modifier: 1
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
            examList.map((item, index) => (
              <SwiperSlide key={index}>
                <div style={{width: '50%', height: '50%', margin: '0 auto'}}>
                  <Card style={{ width: '18rem', margin: '0 auto' }}>
                    <Card.Img variant="top" src={item.image}/>
                    <Card.Body>
                      <Card.Title>
                        {isLoaded ? item.examname : 'Loading ...'}
                      </Card.Title>
                      <Card.Text>
                        Thời gian làm bài - 120 phút <br></br>
                        Số người tham gia - 100<br></br>
                        Đánh giá - 100<br></br>
                        4 phần thi - {isLoaded ? item.examtotalquestions : '...'} câu hỏi<br></br>
                      </Card.Text>
                      <Button variant="primary" onClick={() => handleShow(item)}>Xem</Button>
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
