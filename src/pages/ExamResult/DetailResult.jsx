/**
 * @author Tan Dat
 */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

import { CgSearchLoading } from "react-icons/cg";

import './DetailResult.scss';

const DetailResult = ({ userAnswer = [], qBank = [] }) => {
  return (
    <div>
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
                  <div className="answer-container">
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
    </div>
  );
};

export default DetailResult;
