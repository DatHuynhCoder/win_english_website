/**
 * @author Tan Dat
 */
import { useLocation } from "react-router-dom";

import OverviewResult from "./OverviewResult";
import Comment from "../../components/Comment/Comment";
import DetailResult from "./DetailResult";

import './ExamResult.scss'

const ExamResult = () => {

  const location = useLocation();
  const userAnswer = location.state?.userAnswer;
  const qBank = location.state?.qBank;

  let numCorrect = 0;
  let numWrong = 0;
  let numSkip = 0;

  if(userAnswer && qBank){
    qBank.forEach((item,index) => {
      if(userAnswer[index] === ''){
        numSkip++;
      } else if(userAnswer[index] === item.answer){
        numCorrect++;
      } else {
        numWrong++;
      }
    });
  }

  const calTotalScore = (numCorrect) => {
    if(numCorrect === 0 || numCorrect === 1 || numCorrect === 2){
      return 5;
    }
    return numCorrect*5 - 5;
  }

  const accuracy = qBank && qBank.length > 0 
    ? parseFloat(((numCorrect / qBank.length) * 100).toFixed(2)) 
    : 0;
    
  const resultData = {
    nameExam: 'Practice Set 2023 TOEIC Test 8', 
    numCorrect,
    numWrong,
    duration: '1:54:32',
    numSkip,
    accuracy,
    totalScore: calTotalScore(numCorrect),
    listeningScore: 450,
    numUserListen: 87,
    readingScore: 365,
    numUserRead: 74, 
  }

  return (
    <div className="result-container">
      <div className="main-content">
        <OverviewResult resultData={resultData}/>
        <hr />
        <DetailResult userAnswer={userAnswer} qBank={qBank} />
      </div>

      <div className="comment-contaner">
        <Comment/>
      </div>
    </div>
  )
}

export default ExamResult;
