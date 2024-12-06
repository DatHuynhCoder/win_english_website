import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminDashboard = () => {
  const [totalExams, setTotalExams] = useState(0)
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalTakeExam, setTotalTakeExam] = useState(0)
  useEffect(() => {
    axios.get('http://localhost:8081/get-exam').then(res => {
      setTotalExams(res.data.length)
    })
    axios.get('http://localhost:8081/get-all-user').then(res => {
      setTotalUsers(res.data.length)
    })
    axios.get('http://localhost:8081/get-all-exam-result').then(res => {
      setTotalTakeExam(res.data.length)
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
      </div>
    </div>
    
  )
}

export default AdminDashboard