import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CiClock1, CiUser } from "react-icons/ci"
import { AiOutlineComment } from "react-icons/ai"

import './ListExam.scss'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'

const ListExamData = [
  {
    title: 'First slide label',
    content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: pic1
  },
  {
    title: 'Second slide label',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: pic2
  },
  {
    title: 'Third slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic3
  },
  {
    title: 'Fourth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic4
  },
  {
    title: 'Fifth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic5
  },
  {
    title: 'Sixth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic6
  },
  {
    title: 'Seventh slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic1
  }
]

const ListExam = ({search}) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTakeExam = () => navigate('/exam');

  return (
    <>
      <div className="ListExam-container">
        <Modal 
          show={show} 
          onHide={handleClose} 
          backdrop='static'
        >
          <Modal.Header closeButton>
            <Modal.Title>Thông tin đề thi</Modal.Title>
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
        <Row className='g-5'>
          {
            ListExamData.filter((item) => {
              return search.toLowerCase() === '' ? item
              :
              (
                item.title.toLowerCase().includes(search.toLowerCase())
              )
            }).map((item, index) => (
              <Col xs={12} sm={6} md={4} key={index}>
                
                <Card className='ListExam-child' key={index}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      <CiClock1 size={25}/>Thời gian làm bài - 100
                      <br></br>
                      <CiUser size={25}/>Số người tham gia - 100
                      <br></br>
                      <AiOutlineComment size={25}/>Đánh giá - 100
                      <br></br>
                      4 phần thi - 90 câu hỏi
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleShow()}>Xem</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    </>
  )
}

export default ListExam