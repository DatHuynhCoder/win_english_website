import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  ListGroup,
  ProgressBar,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../../context/Context';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { toast } from 'react-toastify';

import { FcPlus } from "react-icons/fc";

import UserImg from '../../assets/galaxy_slayer_Zed.jpg'

import { jwtDecode } from "jwt-decode";

import './User.scss';

const columns = [
  { field: 'examName', headerName: 'Tên bài thi', width: 150 },
  { field: 'grade', headerName: 'Điểm số', width: 70 },
  { field: 'duration', headerName: 'Thời gian làm', width: 150 },
  { field: 'detailResult', headerName: 'Chi tiết', width: 130 }
];

const rows = [
  { id: 1, examName: 'Toiec test 1', duration: '1:53:20', grade: 730, detailResult: 'Xem chi tiết' },
  { id: 2, examName: 'Toiec test 2', duration: '2:00:00', grade: 300, detailResult: 'Xem chi tiết' },
  { id: 3, examName: 'Toiec test 3', duration: '1:40:21', grade: 990, detailResult: 'Xem chi tiết' },
  { id: 4, examName: 'Toiec test 4', duration: '1:52:11', grade: 5, detailResult: 'Xem chi tiết' },
  { id: 5, examName: 'Toiec test 5', duration: '1:45:56', grade: 135, detailResult: 'Xem chi tiết' },
  { id: 6, examName: 'Toiec test 6', duration: '1:30:23', grade: 450, detailResult: 'Xem chi tiết' },
  { id: 7, examName: 'Toiec test 7', duration: '1:58:59', grade: 655, detailResult: 'Xem chi tiết' },
  { id: 8, examName: 'Toiec test 8', duration: '1:54:45', grade: 850, detailResult: 'Xem chi tiết' },
  { id: 9, examName: 'Toiec test 9', duration: '1:45:45', grade: 910, detailResult: 'Xem chi tiết' },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function User() {
  const cookies = new Cookies()
  const { accessToken, setAccessToken, userid, setUserid } = useContext(ContextStore);

  const [userName, setUserName] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [userPhone, setUserPhone] = useState();
  const [showModal, setShowModal] = useState(false);
  const [userAvatarUrl, setUserAvatarUrl] = useState('');
  const [previewAvatar, setPreviewAvatar] = useState('');
  //get user data
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //close modal
  const handleCloseModal = () => setShowModal(false);
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
  //load image 
  const handleUploadAvatar = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewAvatar(URL.createObjectURL(e.target.files[0]));
      setUserAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

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
    }
  }, [user]);

  //use axios to request get-user-by-id
  useEffect(() => {
    setAccessToken(cookies.get("accessToken"))
    const decodedAccessToken = jwtDecode(cookies.get("accessToken"))
    console.log('check decoded accessToken in user page: ', decodedAccessToken)
    console.log('===> check userid in decoded token: ', decodedAccessToken.userid)
    setUserid(decodedAccessToken.userid)
    if (accessToken) {
      getUserById();
    }
  }, [accessToken]);

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
                      <img src={previewAvatar} alt="avatar" />
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
                    src={user[0].useravatarurl === '' ? UserImg : userAvatarUrl}
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
                      <h6 className="mb-0">Phone</h6>
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
                      <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          initialState={{ pagination: { paginationModel } }}
                          pageSizeOptions={[5, 10]}
                          sx={{ border: 0 }}
                          getRowId={(row) => row.id}
                        />
                      </Paper>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
