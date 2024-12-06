import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
// import Cookies from 'universal-cookie';
import { ContextStore } from '../../context/Context';

import { CiClock1, CiUser } from "react-icons/ci"
import { AiOutlineComment } from "react-icons/ai"

import './ListExam.scss'

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

import Toeic_pic from '../../assets/toeic_pic.jpg'

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
  // const cookies = new Cookies()
  const {accessToken} = useContext(ContextStore)
  const [show, setShow] = useState(false);
  const [selectedExam, setSelectedExam] = useState({});
  const [topComment, setTopComment] = useState([])
  const [totalcomments, setTotalcomments] = useState(0)
  const navigate = useNavigate();
  //get exam data from database

  const [listExam, setListExam] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false)

  //use axios to request get exam
  useEffect(() => {
    // setAccessToken(cookies.get("accessToken"))
    // if(accessToken) {
      const getExam = async () => {
        try {
          const response = await axios.get('http://localhost:8081/get-exam');
          console.log(response.data);
          setListExam(response.data);
        } catch (error) {
          console.log('Co loi trong qua trinh yeu cau get exam: ', error);
        } finally {
          // setIsLoaded(true)
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
    const getTotalcommments = async (examid) => {
      try {
        axios.get('http://localhost:8081/count-comment-by-id?examid=' + examid).then(res => {
          console.log('check total commments: ',res.data[0].totalcomments);
          setTotalcomments(res.data[0].totalcomments);
        })
      } catch (error) {
        console.log('Co loi trong qua trinh dem so comment: ', error);
      } finally {
        // setIsLoaded(true)
      }
    }
    getTotalcommments(exam_item.examid)
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
      }
    });
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
            <b><AiOutlineComment size={25} />Số lượt đánh giá: </b>{totalcomments}
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
                        // onChangeActive={(event, newHover) => {
                        //   setHover(newHover);
                        // }}
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
                      <img src={Toeic_pic} alt="pic" style={{width: '100%'}}/>
                      <CiClock1 size={25} />Thời gian làm bài - 120 phút
                      <br></br>
                      <CiUser size={25} />Số người tham gia - {item.examtotalparticipants}
                      <br></br>
                      4 phần thi - {item.examtotalquestions} câu hỏi
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