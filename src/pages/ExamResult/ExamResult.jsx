/**
 * @author Tan Dat
 */

import OverviewResult from "./OverviewResult";
import Comment from "../../components/Comment/Comment";

import './ExamResult.scss'

const ExamResult = () => {

  const resultData = {
    nameExam: 'Practice Set 2023 TOEIC Test 8', 
    numCorrect: 161,
    numWrong: 39,
    duration: '1:54:32',
    numSkip: 0,
    accuracy: 80.5,
    totalScore: 815,
    listeningScore: 450,
    numUserListen: 87,
    readingScore: 365,
    numUserRead: 74, 
  }

  return (
    <div className="result-container">
      <div className="main-content">
        <OverviewResult resultData={resultData}/>
      </div>

      <div className="comment-contaner">
        <Comment/>
      </div>
    </div>
  )
}

export default ExamResult;
