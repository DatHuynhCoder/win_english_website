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
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import UserImg from '../../assets/galaxy_slayer_Zed.jpg'

import './User.scss';

const columns = [
  { field: 'examName', headerName: 'Tên bài thi', width: 130 },
  { field: 'grade', headerName: 'Điểm số', width: 70 },
  { field: 'duration', headerName: 'Thời gian làm', width: 130 },
  { field: 'detailResult', headerName: 'Chi tiết', width: 90 }
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
  return (
    <div className="user-profile">
      <Container className="my-4 container">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body className="text-center">
                <Image
                  src={UserImg}
                  alt="User"
                  roundedCircle
                  width="150"
                  height="150"
                />
                <div className="mt-3">
                  <h4 className='user-name'>DatDaDat</h4>
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
                    DatDaDat
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={3}>
                    <h6 className="mb-0">Họ và tên</h6>
                  </Col>
                  <Col sm={9} className="text-secondary">
                    Huỳnh Tấn Đạt
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={3}>
                    <h6 className="mb-0">Email</h6>
                  </Col>
                  <Col sm={9} className="text-secondary">
                    htdat@gmail.com
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={3}>
                    <h6 className="mb-0">Phone</h6>
                  </Col>
                  <Col sm={9} className="text-secondary">
                    0836759122
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Button variant="success">
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
      </Container>
    </div>
  );
}
