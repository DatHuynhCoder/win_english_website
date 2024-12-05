import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ContextStore } from '../../context/Context';
import { useTokenRefresher } from '../../hooks/useTokenRefresher';

import { CiClock1, CiUser } from "react-icons/ci"
import { AiOutlineComment } from "react-icons/ai"

import './ListExam.scss'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'

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

const ListExam = ({ search }) => { 
  const cookies = new Cookies()
  const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(ContextStore)
  const [show, setShow] = useState(false);
  const [selectedExam, setSelectedExam] = useState({});
  const [topComment, setTopComment] = useState([])
  const [totalparticipants, setTotalparticipants] = useState(0)
  const navigate = useNavigate();
  //get exam data from database
  const [rate, setRate] = useState(2);
  const [hover, setHover] = useState(-1);

  const [listExam, setListExam] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  //use axios to request get exam
  useEffect(() => {
    setAccessToken(cookies.get("accessToken"))
    // if(accessToken) {
      const getExam = async () => {
        try {
          const response = await axios.get('http://localhost:8081/get-exam');
          console.log(response.data);
          setListExam(response.data);
        } catch (error) {
          console.log('Co loi trong qua trinh yeu cau get exam: ', error);
        } finally {
          setIsLoaded(true)
        }
      }
      
      getExam();
    // }
  }, [accessToken])

  const handleClose = () => {
    setSelectedExam({});
    setShow(false);
  };
  const handleShow = (exam_item) => {
    setSelectedExam(exam_item);
    console.log('check examid: ', exam_item.examid)
    const getTotalparticipants = async (examid) => {
      try {
        const response = await axios.get('http://localhost:8081/count-comment-by-id?examid=' + examid);
        console.log('check total participants: ',response.data[0].totalparticipants);
        setTotalparticipants(response.data[0].totalparticipants);
      } catch (error) {
        console.log('Co loi trong qua trinh yeu cau get exam: ', error);
      } finally {
        setIsLoaded(true)
      }
    }
    getTotalparticipants(exam_item.examid)
    axios.get('http://localhost:8081/get-comment-by-id?examid=' + exam_item.examid).then(res => {
      console.log('check data after get comment: ', res.data)
      setTopComment(res.data)
      setShow(true)
    })
  };
  const handleTakeExam = () => {
    navigate('/exam', {
      state: {
        examId: selectedExam.examid, 
        examname: selectedExam.examname, 
        examaudio: selectedExam.examaudio,
        examtotalparticipants: selectedExam.examtotalparticipants
      }});
  }

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  return (
    <>
      <div className="ListExam-container">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedExam.examname}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thi đi bạn sợ à ?
            <br />
            <b>Số lượt đánh giá: </b>{totalparticipants}
            <br />
            <br />
            <p style={{fontWeight: 'bold'}}>Các đánh giá tốt nhất</p>
            <div>
                {
                  topComment.map((comment) => {
                    return <div style={{border: '1px solid black', borderRadius: '10px', margin: 2, padding: 5}}>
                    <p style={{marginBottom: -2, fontWeight: 'bold'}}>{comment.username}</p>
                    <p style={{marginBottom: -2}}>{comment.commentdate}</p>
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
                    <textarea style={{width: '100%'}} value={comment.commenttext} disabled></textarea>
                    </div>
                  })
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
        <Row className='g-5'>
          {
            listExam.filter((item) => {
              return search.toLowerCase() === '' ? item
                :
                (
                  item.examname.toLowerCase().includes(search.toLowerCase())
                )
            }).map((item, index) => (
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

export default ListExam