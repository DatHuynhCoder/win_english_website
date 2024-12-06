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

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import './ExamResult.scss'

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const ExamResult = () => {
  const cookies = new Cookies()
  const { accessToken, setAccessToken, userid, setUserid, ispremium } = useContext(ContextStore);
  const [comment, setComment] = useState('')
  const [rate, setRate] = useState(2);
  const [hover, setHover] = useState(-1);
  const location = useLocation();
  const userAnswer = location.state?.userAnswer;
  const qBank = location.state?.qBank;
  const duration = location.state?.duration;
  const examid = location.state?.examid;
  const examname = location.state?.examname;
  const examtotalparticipants = location.state?.examtotalparticipants;

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
    // setAccessToken(cookies.get("accessToken"))
    // const decodedAccessToken = jwtDecode(cookies.get("accessToken"))
    // console.log('check decoded accessToken in user page: ', decodedAccessToken)
    // console.log('===> check userid in decoded token: ', decodedAccessToken.userid)
    // setUserid(decodedAccessToken.userid)
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
            examtotalparticipants
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

      <div className="comment-container">
        {/* <Comment /> */}
        <div class="comment-input-container">
          <input 
            placeholder="Nhập đánh giá của bạn tại đây" 
            class="comment-input-field" type="text"
            style={{border: '1px solid black'}}
            onChange={(e) => setComment(e.target.value)}
            />
          <label 
            for="comment-input-field" 
            class="comment-input-label"
          >
            Nhập đánh giá của bạn tại đây
          </label>
          <span class="comment-input-highlight"></span>
        </div>
        <div style={{display:'flex', width: '600px', padding: '20px'}}>
          <span>Đánh giá: &nbsp;</span>
          <div style={{width: '200px', height: '25px'}}>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center', height :30 }}>
              <Rating
                name="hover-feedback"
                value={rate}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setRate(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              {rate !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rate]}</Box>
              )}
            </Box>
          </div>
        </div>
        <div style={{padding: 20}}>
          <button 
            style={{paddingLeft: 10, paddingRight: 10, borderRadius: 10}}
            onClick={() => {
              if(!accessToken) {
                alert('Đăng nhập để để lại đánh giá !')
              }
              else {
                if(comment === '') {
                  alert('Phần comment không được để trống')
                }
                else {
                  const date = new Date();
                  const day = date.getDate();
                  const month = date.getMonth() + 1;
                  const year = date.getFullYear();
                  const commentdate = `${day} / ${month} / ${year}`;
                  axios.post('http://localhost:8081/add-comment', {
                    userid,
                    examid,
                    comment,
                    rate,
                    commentdate
                  }).then(res => {
                    if(res.data.Status === 'Success') {
                      alert('Đánh giá thành công')
                      console.log('insert comment successfully !')
                    }
                    else {
                      console.log('error when trying to insert comment')
                    }
                  })
                }
              }
            }}
          >Gửi</button>
        </div>
        
      </div>
    </div>
  )
}

export default ExamResult;
