/**
 * @author Tan Dat
 */

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import { FaCheckCircle, FaMinusCircle, FaClock, FaAssistiveListeningSystems, FaBookReader } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { GoGoal } from "react-icons/go";
import { LuGoal } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";

import './OverviewResult.scss'

const OverviewResult = ({ resultData }) => {
    const navigate = useNavigate();
    return (
        <div className="overview-container">
            <h2 className='result-title'>Kết quả thi: {resultData.nameExam}</h2>
            <div className="result-content">
                <Row className='g-2'>
                    <Col xs={12} sm={6} md={4} lg={2}>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title className='title-1'>Trả lời đúng</Card.Title>
                                <FaCheckCircle color='green' size={40} />
                                <Card.Text className='result'>{resultData.numCorrect}</Card.Text>
                                <Card.Text>Câu hỏi</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={2}>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title className='title-2'>Trả lời sai</Card.Title>
                                <GoXCircleFill color='red' size={40} />
                                <Card.Text className='result'>{resultData.numWrong}</Card.Text>
                                <Card.Text>Câu hỏi</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={2}>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title className='title-3'>Thời gian làm</Card.Title>
                                <FaClock color='purple' size={40} />
                                <Card.Text className='result'>{resultData.duration}</Card.Text>
                                <Card.Text>Hoàn thành kịp thời !</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={2}>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title className='title-4'>Bỏ qua</Card.Title>
                                <FaMinusCircle color='gray' size={40} />
                                <Card.Text className='result'>{resultData.numSkip}</Card.Text>
                                <Card.Text>Câu hỏi</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={2}>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title className='title-5'>Độ chính xác</Card.Title>
                                <GoGoal color='yellow' size={40} />
                                <Card.Text className='result'>{resultData.accuracy}</Card.Text>
                                <Card.Text>%</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={2}>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title className='title-6'>Điểm</Card.Title>
                                <LuGoal color='blue' size={40} />
                                <Card.Text className='result' style={{ color: 'blue' }}>{resultData.totalScore}</Card.Text>
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
                                <Card.Text className='result'>{resultData.listeningScore} / 495</Card.Text>
                                <Card.Text>Trả lời đúng {resultData.numUserListen} / 100 </Card.Text>
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
                                <Card.Text className='result'>{resultData.readingScore} / 495</Card.Text>
                                <Card.Text>Trả lời đúng {resultData.numUserRead} / 100</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Button 
            className='back-btn fw-bold'
            onClick={() => navigate('/exam-library')}
            ><IoArrowBack size={24} color='white'/>  Quay về đề thi</Button>
        </div>
    )
}

export default OverviewResult;
