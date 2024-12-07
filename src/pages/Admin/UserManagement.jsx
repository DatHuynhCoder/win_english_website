import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { IoSearch } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const UserManagement = () => {
  const [listUser, setListUser] = useState([])
  // const [totalUsers, setTotalUsers] = useState(0)
  // const [totalTakeExam, setTotalTakeExam] = useState(0)
  // const [totalListeningScore, setTotalListeningScore] = useState(0)
  // const [totalReadingScore, setTotalReadingScore] = useState(0)
  // const [totalScore, setTotalScore] = useState(0)
  useEffect(() => {
    axios.get('http://localhost:8081/get-all-user').then(res => {
      setListUser(res.data)
    })
  //   axios.get('http://localhost:8081/get-all-user').then(res => {
  //     setTotalUsers(res.data.length)
  //   })
  //   axios.get('http://localhost:8081/count-exam-result').then(res => {
  //     console.log(res.data[0].numberofexamresult)
  //     setTotalTakeExam(res.data[0].numberofexamresult)
  //   })
  //   axios.get('http://localhost:8081/get-total-listening-reading-total-score').then(res => {
  //     setTotalListeningScore(res.data[0].listeningscore)
  //     setTotalReadingScore(res.data[0].readingscore)
  //     setTotalScore(res.data[0].totalscore)
  //   })
  }, [])
  return (
    <div style={{padding: '100px'}}>
      <h3 style={{color: 'black'}}>Danh sách người dùng</h3>
      <table border='1' style={{padding: '30px', borderCollapse: 'collapse'}}>
        <thead>
          <th></th>
          <th>ID</th>
          <th>Tên</th>
          <th>Điện thoại</th>
          <th>Email</th>
          <th>Thao tác</th>
        </thead>
        <tbody>
          {listUser.map((user) => {
            return <tr>
              <td>
                {
                  user.useravatarurl === "" ? 
                  '' 
                  : 
                  <img src={user.useravatarurl} style={{width: '100px', borderRadius: 50}}></img>
                }
              </td>
              <td>
                {user.userid}
              </td>
              <td>
                {user.userfullname}
              </td>
              <td>
                {user.userphone}
              </td>
              <td>
                {user.useremail}
              </td>
              <td>
                <Button variant="outline-secondary" id="button-addon2" onClick={() => alert("Dont't delete me T_T")}>
                  <MdDelete size={25} />
                  Xóa
                </Button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserManagement