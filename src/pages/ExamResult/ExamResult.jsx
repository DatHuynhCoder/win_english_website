/**
 * @author Tan Dat
 */
import { useLocation } from "react-router-dom";

import OverviewResult from "./OverviewResult";
import Comment from "../../components/Comment/Comment";
import DetailResult from "./DetailResult";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Cookies from 'universal-cookie';
import { ContextStore } from '../../context/Context';
import { useState, useEffect, useContext } from "react";

import './ExamResult.scss'

const ExamResult = () => {
  const cookies = new Cookies()
  const { accessToken, setAccessToken, userid, setUserid, ispremium } = useContext(ContextStore);

  const location = useLocation();
  const userAnswer = location.state?.userAnswer;
  const qBank = location.state?.qBank;
  const duration = location.state?.duration;
  const examid = location.state?.examid;
  const examname = location.state?.examname;

  let numCorrect = 0;
  let numWrong = 0;
  let numSkip = 0;

  if (userAnswer && qBank) {
    qBank.forEach((item, index) => {
      if (userAnswer[index] === '') {
        numSkip++;
      } else if (userAnswer[index] === item.answer) {
        numCorrect++;
      } else {
        numWrong++;
      }
    });
  }

  const calTotalScore = (numCorrect) => {
    if (numCorrect === 0 || numCorrect === 1 || numCorrect === 2) {
      return 5;
    }
    return numCorrect * 5 - 5;
  }

  const accuracy = qBank && qBank.length > 0
    ? parseFloat(((numCorrect / qBank.length) * 100).toFixed(2))
    : 0;

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600); // 1 hour = 3600 seconds
    const minutes = Math.floor((timeInSeconds % 3600) / 60); // Remaining minutes
    const seconds = timeInSeconds % 60; // Remaining seconds

    return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
  };

  const resultData = {
    nameExam: examname,
    numCorrect,
    numWrong,
    duration: formatTime(duration),
    numSkip,
    accuracy,
    totalScore: calTotalScore(numCorrect),
    listeningScore: 450,
    numUserListen: 87,
    readingScore: 365,
    numUserRead: 74,
  }

  //xac thuc voi accesstoken va cookies va store examresult
  useEffect(() => {
    setAccessToken(cookies.get("accessToken"))
    const decodedAccessToken = jwtDecode(cookies.get("accessToken"))
    console.log('check decoded accessToken in user page: ', decodedAccessToken)
    console.log('===> check userid in decoded token: ', decodedAccessToken.userid)
    setUserid(decodedAccessToken.userid)
    console.log(resultData);
    if (accessToken) {
      //create date take exam
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const datetakeexam = `${day} / ${month} / ${year}`;

      const storeExamResult = async () => {
        try {
          const response = await axios.post('http://localhost:8081/store-exam-result', {
            examname: resultData.nameExam,
            numscorrect: resultData.numCorrect,
            numswrong: resultData.numWrong,
            numsskip: resultData.numSkip,
            duration: resultData.duration,
            accuracy: resultData.accuracy,
            totalscore: resultData.totalScore,
            listeningscore: resultData.listeningScore,
            numslisteningcorrect: resultData.numUserListen,
            readingscore: resultData.readingScore,
            numsreadingcorrect: resultData.numUserRead,
            examid: examid,
            userid: userid,
            datetakeexam,
          }, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          console.log(response.data);
        } catch (error) {
          console.log('Error saving exam result:', error);
        }
      };

      storeExamResult();
    }
  }, [accessToken]);

  return (
    <div className="result-container">
      <div className="main-content">
        <OverviewResult resultData={resultData} />
        <hr />
        <DetailResult userAnswer={userAnswer} qBank={qBank} ispremium={ispremium}/>
      </div>

      <div className="comment-contaner">
        <Comment />
      </div>
    </div>
  )
}

export default ExamResult;
