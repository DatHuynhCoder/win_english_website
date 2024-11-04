/**
 * @author Tan Dat
 */

import AudioPlayer from './AudioPlayer';
import Tracking from './Tracking';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Examaudio from '../../assets/audio/Test_8.mp3'
import './Exam.scss'

const qBank = [
  {
    id: 0,
    question: "Which word best fits in blank (1) to complete the sentence?",
    options: ["being concerned", "concerned", "having concerned", "concerning"],
    answer: "concerning"
  },
  {
    id: 1,
    question: "Which phrase best fits in blank (2) to complete the sentence?",
    options: ["like", "similar", "as well as", "such as"],
    answer: "as well as"
  },
  {
    id: 2,
    question: "Which preposition best fits in blank (3) to complete the sentence?",
    options: ["Under", "Among", "For", "Between"],
    answer: "Under"
  },
  {
    id: 3,
    question: "Which phrase best fits in blank (4) to complete the sentence?",
    options: ["only used", "to be used", "by using", "for using"],
    answer: "by using"
  },
  {
    id: 4,
    question: "Which verb tense best fits in blank (5) to complete the sentence?",
    options: ["has staged", "had been staged", "is staging", "was staged"],
    answer: "was staged"
  },
  {
    id: 5,
    question: "Which word best fits in blank (6) to complete the sentence?",
    options: ["wish", "retaliate", "suggest", "deceive"],
    answer: "suggest"
  },
  {
    id: 6,
    question: "Which word best fits in blank (7) to complete the sentence?",
    options: ["price", "rent", "fee", "income"],
    answer: "income"
  },
  {
    id: 7,
    question: "Which word or phrase best fits in blank (8) to complete the sentence?",
    options: ["Yet", "For", "On the ground that", "Whereas"],
    answer: "Yet"
  },
  {
    id: 8,
    question: "Which word best fits in blank (9) to complete the sentence?",
    options: ["little", "far", "many", "less"],
    answer: "far"
  },
  {
    id: 9,
    question: "Which pronoun best fits in blank (10) to complete the sentence?",
    options: ["where", "whose", "that", "who"],
    answer: "who"
  },
  {
    id: 10,
    question: "Which preposition best fits in blank (11) to complete the sentence?",
    options: ["with", "from", "along", "into"],
    answer: "into"
  },
  {
    id: 11,
    question: "Which verb tense best fits in blank (12) to complete the sentence?",
    options: ["will undergo", "undergoing", "had undergone", "to be undergone"],
    answer: "had undergone"
  },
  {
    id: 12,
    question: "Which phrase best fits in blank (13) to complete the sentence?",
    options: ["much as", "most", "like", "same as"],
    answer: "same as"
  },
  {
    id: 13,
    question: "Which word best fits in blank (14) to complete the sentence?",
    options: ["nothing", "everything", "something", "anything"],
    answer: "nothing"
  }
]


const Exam = () => {
  const [userAnswer, setUserAnswer] = useState(Array(qBank.length).fill(''));

  const handleAnswerChange = (option, index) => {
    const updatedAnswers = [...userAnswer];
    updatedAnswers[index] = option;
    setUserAnswer(updatedAnswers);
    console.log(updatedAnswers);
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
        <Button variant='primary'>Nộp bài</Button>
      </div>
      <div className="tracking-content">
        <Tracking userAnswer={userAnswer} />
      </div>

    </div>
  );
};

export default Exam;
