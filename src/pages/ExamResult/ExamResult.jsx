/**
 * @author Tan Dat
 */

import OverviewResult from "./OverviewResult";

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
    numCorrectListen: 87,
    readingScore: 365,
    numCorrectRead: 74, 
  }

  return (
    <div className="result-container">
      <div className="main-content">
        <OverviewResult resultData={resultData}/>

      </div>
    </div>
  )
}

export default ExamResult;
