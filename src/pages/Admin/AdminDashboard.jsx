import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BarChart } from '@mui/x-charts/BarChart';

const AdminDashboard = () => {
  const [totalExams, setTotalExams] = useState(0)
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalTakeExam, setTotalTakeExam] = useState(0)
  const [totalListeningScore, setTotalListeningScore] = useState(0)
  const [totalReadingScore, setTotalReadingScore] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [examTakeOnDate, setExamTakeOnDate] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8081/get-exam').then(res => {
      setTotalExams(res.data.length)
    })
    axios.get('http://localhost:8081/get-all-user').then(res => {
      setTotalUsers(res.data.length)
    })
    axios.get('http://localhost:8081/count-exam-result').then(res => {
      setTotalTakeExam(res.data[0].numberofexamresult)
    })
    axios.get('http://localhost:8081/get-total-listening-reading-total-score').then(res => {
      setTotalListeningScore(res.data[0].listeningscore)
      setTotalReadingScore(res.data[0].readingscore)
      setTotalScore(res.data[0].totalscore)
    })
    axios.get('http://localhost:8081/get-exam-result-with-date').then(res => {
      console.log('check data for chart: ', res.data)
      setExamTakeOnDate(res.data)
    })
  }, [])
  return (
    <div style={{padding: '20px 50px'}}>
      <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', width: '20rem'}}>
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
      <div style={{display: 'flex'}}>
        <div style={{
          width: '16rem', 
          height: '13rem', 
          border: '1px solid black', 
          borderRadius: 10,
          textAlign: 'center',
          margin: '50px 20px'
        }}>
          <p style={{fontWeight: 'bold', lineHeight: 5}}>
            Tổng số lượt thi <br></br>
            {totalTakeExam}
          </p>
        </div>
        <BarChart
          xAxis={[
            {
              id: 'barCategories',
              data: examTakeOnDate.map(item => item.datetakeexam),
              scaleType: 'band',
              label: 'Ngày'
            },
          ]}
          yAxis={[
            {
              label: 'Lượt thi',
            },
          ]}
          series={[
            {
              data: examTakeOnDate.map(item => item.takeexamtimes),
              label: 'Lượt thi'
            },
          ]}
          width={1000}
          height={300}
        />
      </div>
    </div>
    
  )
}

export default AdminDashboard