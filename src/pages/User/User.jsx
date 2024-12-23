import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Table,
  ListGroup,
  ProgressBar,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../../context/Context';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { FaCheckCircle, FaMinusCircle, FaClock, FaAssistiveListeningSystems, FaBookReader } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { GoGoal } from "react-icons/go";
import { LuGoal } from "react-icons/lu";

import { toast } from 'react-toastify';

import { FcPlus } from "react-icons/fc";

import DefaultAvatar from '../../assets/defaultAvatar.png'

import { jwtDecode } from "jwt-decode";

import './User.scss';

export default function User() {
  const cookies = new Cookies()
  const { accessToken, setAccessToken, userid, setUserid } = useContext(ContextStore);

  const [userName, setUserName] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [userPhone, setUserPhone] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [resultShowModal, setResultShowModal] = useState(false);
  const [userAvatarUrl, setUserAvatarUrl] = useState('');
  const [previewAvatar, setPreviewAvatar] = useState('');
  //get user data
  const [user, setUser] = useState([]);
  //get exam result data
  const [listExamresult, setListExamResult] = useState([]);
  const [loading, setLoading] = useState(true);

  //close modal
  const handleCloseModal = () => setShowModal(false);
  //show result modal
  const handleShowResultModal = (item) => {
    setSelectedResult(item);
    setResultShowModal(true);
  };
  //close result modal
  const handleCloseResultModal = () => setResultShowModal(false);

  // get user by id
  const getUserById = async () => {
    try {
      const response = await axios.get('http://localhost:8081/get-user-by-id', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        params: { userid: userid }
      });
      console.log("Get user by id = ", userid, ": ", response.data);
      if (response.data && response.data.length > 0) {
        setUser(response.data);
      }
    } catch (error) {
      console.log('Error fetching user by id:', error);
    } finally {
      setLoading(false);
    }
  };
  //get exam result by id
  const getExamResultById = async () => {
    try {
      const response = await axios.get('http://localhost:8081/get-exam-result-by-id', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        params: { userid: userid }
      });
      console.log('ket qua de thi:', response.data);
      if (response.data && response.data.length > 0) {
        setListExamResult(response.data);
      }
    } catch (error) {
      console.log('Error fetching exam result by userid:', error);
    }
  }
  //load image 
  const handleUploadAvatar = async (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('avatar', file);

      try {
        const response = await axios.post('http://localhost:8081/upload-avatar', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        setPreviewAvatar(URL.createObjectURL(file));
        setUserAvatarUrl(response.data.avatarUrl);
      } catch (error) {
        console.error('Error uploading avatar:', error);
        toast.error('Failed to upload avatar!');
      }
    }
  };

  //update user
  const handleUpdateUser = () => {
    console.log("update click")
    if (accessToken) {
      const changeUser = async () => {
        try {
          const info = {
            userid: userid,
            username: userName,
            userfullname: userFullName,
            userphone: userPhone,
            useravatarurl: userAvatarUrl
          }
          const respone = await axios.put('http://localhost:8081/update-user-info', info);
          console.log(respone.data);
          toast.success('Cập nhật thông tin người dùng thành công');
          setShowModal(false);
        } catch (error) {
          console.log("Can't update user:", error)
        }
      }
      changeUser();
      getUserById();
    }
  }
  //update user for modal
  useEffect(() => {
    if (user.length > 0) {
      setUserName(user[0].username);
      setUserFullName(user[0].userfullname);
      setUserPhone(user[0].userphone);
      setUserAvatarUrl(user[0].useravatarurl);
      setPreviewAvatar(user[0].useravatarurl);
    }
  }, [user]);

  //use axios to request get-user-by-id và get-exam-result-by-id
  useEffect(() => {
    setAccessToken(cookies.get("accessToken"))
    if (accessToken && userid) {
      const decodedAccessToken = jwtDecode(cookies.get("accessToken"))
      console.log('check decoded accessToken in user page: ', decodedAccessToken)
      console.log('===> check userid in decoded token: ', decodedAccessToken.userid)
      setUserid(decodedAccessToken.userid)
      if (accessToken) {
        getUserById();
        getExamResultById();
      }
    }
  }, [accessToken, userid]);

  return (
    <div className="user-profile">
      <Container className="my-4 container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Row>
            <Modal show={showModal}
              onHide={handleCloseModal}
              size='xl'
              backdrop='static'
            >
              <Modal.Header closeButton>
                <Modal.Title>Thay đổi thông tin người dùng</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Tên người dùng</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Họ và tên</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userFullName}
                      onChange={(e) => setUserFullName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                    />
                  </div>
                  <div className="avatar-container">
                    <label className='form-label label-upload' htmlFor='labelUpload'>
                      <FcPlus />
                      Upload ảnh đại diện</label>
                    <input
                      type="file"
                      hidden
                      id='labelUpload'
                      onChange={(e) => handleUploadAvatar(e)}
                    />
                  </div>
                  <div className='col-md-12 img-preview'>
                    {previewAvatar ?
                      <img
                        src={previewAvatar}
                        alt="avatar"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                      />
                      :
                      <span>Preview Avatar</span>
                    }
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Đóng
                </Button>
                <Button variant="primary" onClick={() => handleUpdateUser()}>
                  Thay đổi
                </Button>
              </Modal.Footer>
            </Modal>
            <Col md={4}>
              <Card>
                <Card.Body className="text-center">
                  <Image
                    src={user[0].useravatarurl || DefaultAvatar}
                    alt="User"
                    roundedCircle
                    width="150"
                    height="150"
                  />
                  <div className="mt-3">
                    <h4 className='user-name'>{user[0].username}</h4>
                  </div>
                </Card.Body>
              </Card>
              {/* <Card className="mt-3">
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Website</h6>
                  <span className="text-secondary">https://bootdey.com</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Github</h6>
                  <span className="text-secondary">bootdey</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Twitter</h6>
                  <span className="text-secondary">@bootdey</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Instagram</h6>
                  <span className="text-secondary">bootdey</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Facebook</h6>
                  <span className="text-secondary">bootdey</span>
                </ListGroup.Item>
              </ListGroup>
            </Card> */}
            </Col>

            <Col md={8}>
              {/* Thông tin cá nhân */}
              <Card className="mb-3">
                <Card.Body>
                  <Row className="mb-3">
                    <Col sm={3}>
                      <h6 className="mb-0">Tên người dùng</h6>
                    </Col>
                    <Col sm={9} className="text-secondary">
                      {user[0].username}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={3}>
                      <h6 className="mb-0">Họ và tên</h6>
                    </Col>
                    <Col sm={9} className="text-secondary">
                      {user[0].userfullname}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={3}>
                      <h6 className="mb-0">Email</h6>
                    </Col>
                    <Col sm={9} className="text-secondary">
                      {user[0].useremail}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={3}>
                      <h6 className="mb-0">Số điện thoại</h6>
                    </Col>
                    <Col sm={9} className="text-secondary">
                      {user[0].userphone}
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <Button
                        variant="success"
                        onClick={() => setShowModal(true)}
                      >
                        Thay đổi
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* Danh sách kết quả thi */}
              <Row>
                <Col sm={12} className="mb-3">
                  <Card className="h-100">
                    <Card.Body>
                      <h6 className="d-flex align-items-center mb-3">Kết quả thi</h6>
                      <Table striped bordered hover variant="light">
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Tên bài thi</th>
                            <th>Thời gian làm</th>
                            <th>Kết quả</th>
                            <th>Xem</th>
                          </tr>
                        </thead>
                        <tbody>
                          {listExamresult.length ? listExamresult.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.examname}</td>
                              <td>{item.duration}</td>
                              <td>{item.totalscore}</td>
                              <td><Button variant='primary' onClick={() => handleShowResultModal(item)}>Xem chi tiết</Button></td>
                            </tr>
                          ))
                            : <tr><td colSpan={5} align='center'>Bạn chưa thi bài nào</td></tr>
                          }
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            {/* Result Modal */}
            <Modal show={resultShowModal}
              onHide={handleCloseResultModal}
              size='xl'
              backdrop='static'
            >
              {selectedResult ?
                (<>
                  <Modal.Header closeButton>
                    <Modal.Title>{selectedResult.examname}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="result-user-content">
                      <Row className='g-2'>
                        <Col xs={12} sm={6} md={4} lg={2}>
                          <Card style={{ width: '100%' }}>
                            <Card.Body>
                              <Card.Title className='title-1'>Trả lời đúng</Card.Title>
                              <FaCheckCircle color='green' size={40} />
                              <Card.Text className='result'>{selectedResult.numscorrect}</Card.Text>
                              <Card.Text>Câu hỏi</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={2}>
                          <Card style={{ width: '100%' }}>
                            <Card.Body>
                              <Card.Title className='title-2'>Trả lời sai</Card.Title>
                              <GoXCircleFill color='red' size={40} />
                              <Card.Text className='result'>{selectedResult.numswrong}</Card.Text>
                              <Card.Text>Câu hỏi</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={2}>
                          <Card style={{ width: '100%' }}>
                            <Card.Body>
                              <Card.Title className='title-3'>Thời gian làm</Card.Title>
                              <FaClock color='purple' size={40} />
                              <Card.Text className='result'>{selectedResult.duration}</Card.Text>
                              <Card.Text>Hoàn thành</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={2}>
                          <Card style={{ width: '100%' }}>
                            <Card.Body>
                              <Card.Title className='title-4'>Bỏ qua</Card.Title>
                              <FaMinusCircle color='gray' size={40} />
                              <Card.Text className='result'>{selectedResult.numsskip}</Card.Text>
                              <Card.Text>Câu hỏi</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={2}>
                          <Card style={{ width: '100%' }}>
                            <Card.Body>
                              <Card.Title className='title-5'>Độ chính xác</Card.Title>
                              <GoGoal color='yellow' size={40} />
                              <Card.Text className='result'>{selectedResult.accuracy}</Card.Text>
                              <Card.Text>%</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={2}>
                          <Card style={{ width: '100%' }}>
                            <Card.Body>
                              <Card.Title className='title-6'>Điểm</Card.Title>
                              <LuGoal color='blue' size={40} />
                              <Card.Text className='result' style={{ color: 'blue' }}>{selectedResult.totalscore}</Card.Text>
                              <Card.Text>Chúc mừng bạn</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>

                      <Row className='g-5 mt-0'>
                        <Col xs={12} sm={6}>
                          <Card style={{ width: '100%' }}>
                            <Card.Body>
                              <div className="d-flex align-items-center justify-content-center">
                                <FaAssistiveListeningSystems size={40} />
                                <Card.Title className="title-7 ms-2">Listening</Card.Title>
                              </div>
                              <Card.Text className='result'>{selectedResult.listeningscore} / 495</Card.Text>
                              <Card.Text>Trả lời đúng {selectedResult.numslisteningcorrect} / 100 </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col xs={12} sm={6}>
                          <Card style={{ width: '100%' }}>
                            <Card.Body>
                              <div className="d-flex align-items-center justify-content-center">
                                <FaBookReader size={40} />
                                <Card.Title className="title-7 ms-2">Reading</Card.Title>
                              </div>
                              <Card.Text className='result'>{selectedResult.readingscore} / 495</Card.Text>
                              <Card.Text>Trả lời đúng {selectedResult.numsreadingcorrect} / 100</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>

                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseResultModal}>
                      Đóng
                    </Button>
                  </Modal.Footer>
                </>)
                : (<p>Nodata</p>)
              }
            </Modal>
          </Row>
        )}
      </Container>
    </div>
  );
}
