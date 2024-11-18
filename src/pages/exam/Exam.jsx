/**
 * @author Tan Dat
 */

import AudioPlayer from './AudioPlayer';
import Tracking from './Tracking';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import Examaudio from '../../assets/audio/Test_8.mp3'
import './Exam.scss'

const qBank = [
  {
    id: 0,
    question: "Which word best fits in blank (1) to complete the sentence?",
    options: ["A. being concerned", "B. concerned", "C. having concerned", "D. concerning"],
    answer: "D. concerning" 
  },
  {
    id: 1,
    question: "Which phrase best fits in blank (2) to complete the sentence?",
    options: ["A. like", "B. similar", "C. as well as", "D. such as"],
    answer: "C. as well as"
  },
  {
    id: 2,
    question: "Which preposition best fits in blank (3) to complete the sentence?",
    options: ["A. Under", "B. Among", "C. For", "D. Between"],
    answer: "A. Under"
  },
  {
    id: 3,
    question: "Which phrase best fits in blank (4) to complete the sentence?",
    options: ["A. only used", "B. to be used", "C. by using", "D. for using"],
    answer: "C. by using"
  },
  {
    id: 4,
    question: "Which verb tense best fits in blank (5) to complete the sentence?",
    options: ["A. has staged", "B. had been staged", "C. is staging", "D. was staged"],
    answer: "D. was staged"
  },
  {
    id: 5,
    question: "Which word best fits in blank (6) to complete the sentence?",
    options: ["A. wish", "B. retaliate", "C. suggest", "D. deceive"],
    answer: "C. suggest"
  },
  {
    id: 6,
    question: "Which word best fits in blank (7) to complete the sentence?",
    options: ["A. price", "B. rent", "C. fee", "D. income"],
    answer: "D. income"
  },
  {
    id: 7,
    question: "Which word or phrase best fits in blank (8) to complete the sentence?",
    options: ["A. Yet", "B. For", "C. On the ground that", "D. Whereas"],
    answer: "A. Yet"
  },
  {
    id: 8,
    question: "Which word best fits in blank (9) to complete the sentence?",
    options: ["A. little", "B. far", "C. many", "D. less"],
    answer: "B. far"
  },
  {
    id: 9,
    question: "Which pronoun best fits in blank (10) to complete the sentence?",
    options: ["A. where", "B. whose", "C. that", "D. who"],
    answer: "D. who"
  },
  {
    id: 10,
    question: "Which preposition best fits in blank (11) to complete the sentence?",
    options: ["A. with", "B. from", "C. along", "D. into"],
    answer: "D. into"
  },
  {
    id: 11,
    question: "Which verb tense best fits in blank (12) to complete the sentence?",
    options: ["A. will undergo", "B. undergoing", "C. had undergone", "D. to be undergone"],
    answer: "C. had undergone"
  },
  {
    id: 12,
    question: "Which phrase best fits in blank (13) to complete the sentence?",
    options: ["A. much as", "B. most", "C. like", "D. same as"],
    answer: "D. same as"
  },
  {
    id: 13,
    question: "Which word best fits in blank (14) to complete the sentence?",
    options: ["A. nothing", "B. everything", "C. something", "D. anything"],
    answer: "A. nothing"
  }
];




const Exam = () => {
  const [userAnswer, setUserAnswer] = useState(Array(qBank.length).fill(''));
  const [startTime, setStartTime] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    setStartTime(Date.now());
  }, []);

  const handleSumnit = () => {
    const endTime = Date.now();
    const duration = Math.floor((endTime - startTime) / 1000); //duration: seconds
    navigate('/exam-result', {state: {userAnswer, qBank, duration}});
  }

  const handleAnswerChange = (option, index) => {
    const updatedAnswers = [...userAnswer];
    updatedAnswers[index] = option;
    setUserAnswer(updatedAnswers);
  };

  return (
    <div className="exam-container">
      <div className="main-content">
        <AudioPlayer audioSrc={Examaudio} />
        {qBank.map((item, index) => (
          <div key={item.id} >
            <h3 className='question-number'>{index + 1}</h3>
            <h3 className='question-title'>. {item.question}</h3>
            {item.options.map((option) => (
              <div key={option} className='radio-option'>
                <input
                  type="radio"
                  className={`${item.id}-${option}`}
                  name={`question-${item.id}`}
                  value={option}
                  checked={userAnswer[index] === option}
                  onChange={() => handleAnswerChange(option, index)}
                />
                <label htmlFor={`${item.id}-${option}`}>{option}</label>
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
