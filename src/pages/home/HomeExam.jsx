/**
 * @author Quynh Anh
 */
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContextStore } from '../../context/Context';

import './HomeExam.scss'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Cookies from 'universal-cookie'

import { CiClock1, CiUser } from "react-icons/ci"
import { AiOutlineComment } from "react-icons/ai"

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const HomeExam = () => {
  const cookies = new Cookies()
  const {accessToken, setAccessToken} = useContext(ContextStore)
  const [show, setShow] = useState(false);
  const [selectedExam, setSelectedExam] = useState({});
  const [topComment, setTopComment] = useState([])
  const navigate = useNavigate();
  //get exam data from database
  const [rate, setRate] = useState(2);
  const [hover, setHover] = useState(-1);

  const [listExam, setListExam] = useState([{}, {}, {}]);
  const [isLoaded, setIsLoaded] = useState(false)
  //use axios to request get exam
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
          setListExam(response.data);
        } catch (error) {
          console.log('Co loi trong qua trinh yeu cau get exam: ', error);
        } finally {
          setIsLoaded(true)
        }
      }
      getExam();
    }
  }, [accessToken])

  const handleClose = () => {
    setSelectedExam({});
    setShow(false);
  };
  const handleShow = (exam_item) => { 
    setSelectedExam(exam_item);
    console.log('check examid: ', exam_item.examid)
    axios.get('http://localhost:8081/get-comment-by-id?examid=' + exam_item.examid).then(res => {
      console.log('check data after get comment: ', res.data)
      setTopComment(res.data)
      setShow(true)
    })
    
  };
  const handleTakeExam = () => navigate('/exam', {state: {examId: selectedExam.examid}});

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  return (
    <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
        >
          <Modal.Header closeButton>
            <Modal.Title>{accessToken ? selectedExam.examname : 'Loading...'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thi đi bạn sợ à ?
            <br />
            <br />
            <p style={{fontWeight: 'bold'}}>Các đánh giá tốt nhất</p>
            <div>
                {
                  accessToken ? topComment.map((comment) => {
                    return <div style={{border: '1px solid black', borderRadius: '10px', margin: 2, padding: 5}}>
                    <p style={{marginBottom: -5, fontWeight: 'bold'}}>{comment.username}</p>
                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center'}}>
                      <Rating
                        name="hover-feedback"
                        value={comment.rate}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      
                    </Box>
                    <p>{comment.commenttext}</p>
                    </div>
                  })
                  : 'Loading ...'
                }
            </div>
          </Modal.Body>
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
                    <Card.Title>{isLoaded ? item.examname : 'Loading ...'}</Card.Title>
                    <Card.Text>
                      <CiClock1 size={25} />Thời gian làm bài - 120 phút
                      <br></br>
                      <CiUser size={25} />Số người tham gia - 100
                      <br></br>
                      <AiOutlineComment size={25} />Đánh giá - 100
                      <br></br>
                      4 phần thi - {isLoaded ? item.totalquestions : '...'} câu hỏi
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