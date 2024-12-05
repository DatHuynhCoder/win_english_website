/**
 * @author Tan Dat
 */

import AudioPlayer from './AudioPlayer';
import Tracking from './Tracking';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
//use axios
import axios from 'axios'

// import Examaudio from 'http://localhost:8081/audio/Test_8.mp3'
import './Exam.scss'

const Exam = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const examid = location.state?.examId;
  const examname = location.state?.examname;
  const examaudio = location.state?.examaudio;

  //get question data from database
  const [qBank,setQBank] = useState([]);

  useEffect(()=>{
    setStartTime(Date.now());

    //axios
    const getQuestion = async () => {
      try {
        const response = await axios.get('http://localhost:8081/get-qbank-by-id', {
          params: { examid: examid}
        });
        const formattedData = response.data.map((item) => ({
          ...item,
          options: JSON.parse(item.options), // Xử lý kiểu dữ liệu JSON
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
    navigate('/exam-result', {state: {userAnswer, qBank, duration, examid, examname}});
  }

  const handleAnswerChange = (option, index) => {
    const updatedAnswers = [...userAnswer];
    updatedAnswers[index] = option;
    setUserAnswer(updatedAnswers);
  };

  return (
    <div className="exam-container">
      <div className="main-content">
        <AudioPlayer audioSrc={examaudio} />
        {qBank.map((item, index) => (
          <div key={item.questionid} >
            <h3 className='question-number'>{index + 1}</h3>
            <h3 className='question-title'>. {item.question}</h3>
            {item.options.map((option) => (
              <div key={option} className='radio-option'>
                <input
                  type="radio"
                  className={`${item.questionid}-${option}`}
                  name={`question-${item.questionid}`}
                  value={option}
                  checked={userAnswer[index] === option}
                  onChange={() => handleAnswerChange(option, index)}
                />
                <label htmlFor={`${item.questionid}-${option}`}>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <Button variant='primary' onClick={handleSumnit}>Nộp bài</Button>
      </div>
      <div className="tracking-content">
        <Tracking userAnswer={userAnswer} />
      </div>

    </div>
  );
};

export default Exam;
