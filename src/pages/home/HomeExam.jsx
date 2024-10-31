/**
 * @author Quynh Anh
 */
import { useState } from 'react'
import './HomeExam.scss'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CiClock1, CiUser } from "react-icons/ci"
import { AiOutlineComment } from "react-icons/ai"

const HomeExam = ({HomeExamData}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <h1 style={{textAlign: 'center'}}>Đề thi mới nhất</h1>
      <div className="HomeExam-container">
        <Row className='g-5'>
        {
          HomeExamData.map((item, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Thông tin đề thi</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Card className='Exam' key={index}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      <CiClock1 size={25}/> - 100
                      <br></br>
                      <CiUser size={25}/> - 100
                      <br></br>
                      <AiOutlineComment size={25}/> - 100
                      <br></br>
                      4 phần thi - 90 câu hỏi
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>Xem</Button>
                  </Card.Body>
                </Card>
              </>
            </Col>
          ))
        }
        </Row>
      </div>
    </>
  )
}

export default HomeExam