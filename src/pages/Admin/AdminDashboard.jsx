import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminDashboard = () => {
  const [totalExams, setTotalExams] = useState(0)
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalTakeExam, setTotalTakeExam] = useState(0)
  const [totalListeningScore, setTotalListeningScore] = useState(0)
  const [totalReadingScore, setTotalReadingScore] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  useEffect(() => {
    axios.get('http://localhost:8081/get-exam').then(res => {
      setTotalExams(res.data.length)
    })
    axios.get('http://localhost:8081/get-all-user').then(res => {
      setTotalUsers(res.data.length)
    })
    axios.get('http://localhost:8081/count-exam-result').then(res => {
      console.log(res.data[0].numberofexamresult)
      setTotalTakeExam(res.data[0].numberofexamresult)
    })
    axios.get('http://localhost:8081/get-total-listening-reading-total-score').then(res => {
      setTotalListeningScore(res.data[0].listeningscore)
      setTotalReadingScore(res.data[0].readingscore)
      setTotalScore(res.data[0].totalscore)
    })
  }, [])
  return (
    <div style={{padding: '100px'}}>
      <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
        <div style={{
          width: '16rem', 
          height: '13rem', 
          border: '1px solid black', 
          borderRadius: 10,
          textAlign: 'center',
          margin: '20px'
        }}>
          <p style={{fontWeight: 'bold', lineHeight: 5}}>
            Tổng số đề thi <br></br>
            {totalExams}
          </p>
        </div>
        <div style={{
          width: '16rem', 
          height: '13rem', 
          border: '1px solid black', 
          borderRadius: 10,
          textAlign: 'center',
          margin: '20px'
        }}>
          <p style={{fontWeight: 'bold', lineHeight: 5}}>
            Tổng số người dùng <br></br>
            {totalUsers}
          </p>
        </div>
        <div style={{
          width: '16rem', 
          height: '13rem', 
          border: '1px solid black', 
          borderRadius: 10,
          textAlign: 'center',
          margin: '20px'
        }}>
          <p style={{fontWeight: 'bold', lineHeight: 5}}>
            Tổng số lượt thi <br></br>
            {totalTakeExam}
          </p>
        </div>
        <div style={{
          width: '16rem', 
          height: '13rem', 
          border: '1px solid black', 
          borderRadius: 10,
          textAlign: 'center',
          margin: '20px'
        }}>
          <p style={{fontWeight: 'bold', lineHeight: 5}}>
            Điểm listening trung bình <br></br>
            {Math.floor(totalListeningScore/totalTakeExam)}
          </p>
        </div>
        <div style={{
          width: '16rem', 
          height: '13rem', 
          border: '1px solid black', 
          borderRadius: 10,
          textAlign: 'center',
          margin: '20px'
        }}>
          <p style={{fontWeight: 'bold', lineHeight: 5}}>
            Điểm reading trung bình <br></br>
            {Math.floor(totalReadingScore/totalTakeExam)}
          </p>
        </div>
        <div style={{
          width: '16rem', 
          height: '13rem', 
          border: '1px solid black', 
          borderRadius: 10,
          textAlign: 'center',
          margin: '20px'
        }}>
          <p style={{fontWeight: 'bold', lineHeight: 5}}>
            Điểm tổng trung bình <br></br>
            {Math.floor(totalScore/totalTakeExam)}
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default AdminDashboard