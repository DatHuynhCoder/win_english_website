/**
 * @author Quynh Anh
 */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './HomeExam.scss'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import { CiClock1, CiUser } from "react-icons/ci"
import { AiOutlineComment } from "react-icons/ai"

const HomeExam = ({HomeExamData}) => {
  const [show, setShow] = useState(false);
  const [selectedExam, setSelectedExam] = useState({});
  const navigate = useNavigate();
  //get exam data from database
  const [listExam, setListExam] = useState([]);

  //use axios to request get exam
  useEffect(() => {
    const getExam = async () => {
      try {
        const response = await axios.get('http://localhost:8081/get-exam');
        console.log(response.data);
        setListExam(response.data);
      } catch (error) {
        console.log('Co loi trong qua trinh yeu cau get exam: ', error);
      }
    }
    getExam();
  }, [])

  const handleClose = () => {
    setSelectedExam({});
    setShow(false);
  };
  const handleShow = (exam_item) => {
    setSelectedExam(exam_item);
    setShow(true)
  };
  const handleTakeExam = () => navigate('/exam', {state: {examId: selectedExam.examid}});

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
      <h1 style={{textAlign: 'center'}}>Đề thi mới nhất</h1>
      <div className="HomeExam-container">
      <Row className='g-5'>
          {
            listExam.map((item, index) => (
              <Col xs={12} sm={6} md={4} key={index}>

                <Card className='ListExam-child' key={index}>
                  <Card.Body>
                    <Card.Title>{item.examname}</Card.Title>
                    <Card.Text>
                      <CiClock1 size={25} />Thời gian làm bài - 120 phút
                      <br></br>
                      <CiUser size={25} />Số người tham gia - 100
                      <br></br>
                      <AiOutlineComment size={25} />Đánh giá - 100
                      <br></br>
                      4 phần thi - {item.totalquestions} câu hỏi
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleShow(item)}>Xem</Button>
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

export default HomeExam