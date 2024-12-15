/**
 * @author Tan Dat
 */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { CgSearchLoading } from "react-icons/cg";

import './DetailResult.scss';
import { useState } from 'react';

const DetailResult = ({ userAnswer = [], qBank = [], ispremium }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState({});

  const handleCloseModal = () => {
    setSelectedQuestion({});
    setShowModal(false);
  }
  const handleShowModal = (question_item) => {
    setSelectedQuestion(question_item);
    setShowModal(true);
    console.log("Co phai vip ko", ispremium)
  }

  const handleNotPremium = () => {
    toast.error('Xin hãy đăng ký gói VIP để mở khóa chức năng xem chi tiết đáp án');
  }

  return (
    <div className='container'>
      <h2 className="detail-result-title">Đáp án</h2>
      <div className="fact-container">
        <CgSearchLoading size={30} color="#fff" />
        <div className="fact-text">Nhấn vào câu mà bạn muốn xem lời giải</div>
      </div>
      <div className="detail-result-content">
        <Row>
          {qBank && qBank.length > 0 ? (
            qBank.map((item, index) => {
              const isCorrect = userAnswer[index] === item.answer;
              const answerColor = isCorrect ? 'green' : 'red';

              return (
                <Col xs={12} sm={6} md={3} key={index}>
                  <div className="answer-container" onClick={ispremium === 0 ? handleNotPremium : () => handleShowModal(item)}>
                    <Button variant="primary" className="answer-btn">{index + 1}</Button>
                    <div className="answer-text">
                      {item.answer[0]} : <span style={{ color: answerColor }}>{userAnswer[index]?.[0]}</span>
                    </div>
                  </div>
                </Col>
              );
            })
          ) : (
            <p>Loading answers...</p>
          )}
        </Row>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Chi tiết đáp án
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedQuestion?.question?.includes('http://localhost:8081/')
            ? <img src={selectedQuestion.question} alt="questionpic" style={{ maxWidth: '100%' }} />
            : <h4>{selectedQuestion?.question}</h4>
          }
          <p>Câu trả lời đúng: <span style={{ color: 'green' }}>{selectedQuestion?.answer}</span></p>
          <p>Giải thích: {selectedQuestion?.detailanswer}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailResult;
