import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';

const UserManagement = () => {
  const [listUser, setListUser] = useState([])
  const [rerender, setRerender] = useState(false)
  // const [totalUsers, setTotalUsers] = useState(0)
  // const [totalTakeExam, setTotalTakeExam] = useState(0)
  // const [totalListeningScore, setTotalListeningScore] = useState(0)
  // const [totalReadingScore, setTotalReadingScore] = useState(0)
  // const [totalScore, setTotalScore] = useState(0)
  const handleDeleteUser = (userid) => {
    axios.post('http://localhost:8081/delete-user-by-id', {
      userid: userid
    }).then(res => {
      if(res.data.Status === 'Error')
        toast.error('Xóa người dùng không thành công');
      else 
        toast.success('Xóa người dùng thành công');
    }).finally(res => setRerender(!rerender))
  }
  useEffect(() => {
    axios.get('http://localhost:8081/get-all-user').then(res => {
      setListUser(res.data)
    })
  //   axios.get('http://localhost:8081/count-exam-result').then(res => {
  //     console.log(res.data[0].numberofexamresult)
  //     setTotalTakeExam(res.data[0].numberofexamresult)
  //   })
  //   axios.get('http://localhost:8081/get-total-listening-reading-total-score').then(res => {
  //     setTotalListeningScore(res.data[0].listeningscore)
  //     setTotalReadingScore(res.data[0].readingscore)
  //     setTotalScore(res.data[0].totalscore)
  //   })
  }, [rerender])
  return (
    <div style={{padding: '100px'}}>
      <h3 style={{color: 'black'}}>Danh sách người dùng</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ảnh đại diện</th>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Điện thoại</th>
            <th>Email</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user) => {
            return <tr>
              <td>
                {
                  user.useravatarurl === "" ? 
                  '' 
                  : 
                  <img src={user.useravatarurl} style={{width: '80px', height: '80px', borderRadius: 50}} alt='img'></img>
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
                <Button variant="outline-secondary" id="button-addon2" 
                  onClick={() => handleDeleteUser(user.userid)}>
                  <MdDelete size={25} />
                  Xóa
                </Button>
              </td>
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default UserManagement