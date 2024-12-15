/**
 * @author Tan Dat
 */

import AudioPlayer from './AudioPlayer';
import Tracking from './Tracking';
import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
//use axios
import axios from 'axios'

// import Examaudio from 'http://localhost:8081/audio/Test_8.mp3'
import './Exam.scss'

const Exam = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const examid = location.state?.examId;
  const examname = location.state?.examname;
  const examaudio = location.state?.examaudio;
  const examtotalparticipants = location.state?.examtotalparticipants;

  const questionsPerPage = 15; //Điều chỉnh số câu mỗi trang
  const offset = currentPage * questionsPerPage;

  //get question data from database
  const [qBank, setQBank] = useState([]);

  //Useref to navigate to what question you want
  const questionNav = useRef([]);

  useEffect(() => {
    setStartTime(Date.now());

    //axios
    const getQuestion = async () => {
      try {
        const response = await axios.get('http://localhost:8081/get-qbank-by-id', {
          params: { examid: examid }
        });
        const formattedData = response.data.map((item) => ({
          ...item,
          options: JSON.parse(item.options),
          // Xử lý kiểu dữ liệu JSON, đảm bảo đầu đầu ra luôn là chuỗi
          supportimgs: item.supportimgs
            ? Array.isArray(JSON.parse(item.supportimgs))
              ? JSON.parse(item.supportimgs)
              : [JSON.parse(item.supportimgs)]
            : []
        }));
        console.log('check exam question: ', formattedData);
        setQBank(formattedData);
        setUserAnswer(Array(response.data.length).fill(''));
      }
      catch (error) {
        console.log('Co loi trong qua trinh them data: ', error);
      }
    };
    if (examid) {
      getQuestion();
    }
  }, []);

  const handleSumnit = () => {
    const endTime = Date.now();
    const duration = Math.floor((endTime - startTime) / 1000); //duration: seconds
    navigate('/exam-result', {
      state: {
        userAnswer,
        qBank,
        duration,
        examid,
        examname,
        examtotalparticipants
      }
    });
  }

  const handleAnswerChange = (option, index) => {
    const updatedAnswers = [...userAnswer];
    updatedAnswers[index] = option;
    setUserAnswer(updatedAnswers);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  //Scroll to a specific question
  const scrollToQuestion = (questionIndex) => {
    const page = Math.floor(questionIndex / questionsPerPage);
    setCurrentPage(page); // Navigate to the correct page
    setTimeout(() => {
      const questionElement = questionNav.current[questionIndex % questionsPerPage];
      if (questionElement) {
        questionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  const currentQuestions = qBank.slice(offset, offset + questionsPerPage);

  return (
    <div className="exam-container">
      <div className="main-content">
        <AudioPlayer audioSrc={examaudio} />
        {currentQuestions.map((item, index) => (
          <div
            key={item.questionid}
            ref={(el) => (questionNav.current[index] = el)}
          >
            {(item.supportimgs || []).map((imgitem, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <img
                  src={imgitem}
                  alt={`supportimg-${index}`}
                  style={{ maxWidth: '70%' }}
                />
              </div>
            ))}

            <div className="question-box">
              <h3 className="question-number">{offset + index + 1}</h3>
              {item.isimage === 1
                ? <img src={item.question} alt="question-pic" style={{ maxWidth: '100%' }} />
                : <h3 className="question-title">. {item.question}</h3>}
              {item.options.map((option) => (
                <div key={option} className="radio-option">
                  <input
                    type="radio"
                    name={`question-${item.questionid}`}
                    value={option}
                    checked={userAnswer[offset + index] === option}
                    onChange={() => handleAnswerChange(option, offset + index)}
                  />
                  <label htmlFor={`${item.questionid}-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Button
          variant='primary'
          onClick={handleSumnit}
          style={{ margin: "20px 0" }}
          className='submit-btn'
        >Nộp bài</Button>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(qBank.length / questionsPerPage)}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          forcePage={currentPage}
        />
      </div>
      <div className="tracking-content">
        <Tracking userAnswer={userAnswer} scrollToQuestion={scrollToQuestion} />
      </div>

    </div>
  );
};

export default Exam;
