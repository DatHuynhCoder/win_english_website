import React, {useState} from 'react'
import './ResetPassword.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ResetPassword = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const resetEmail = location.state?.resetEmail
  
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const handleClickOK = (e) => {
    e.preventDefault()
    console.log('hello')
    if(password)
    if(password === '' || confirmedPassword === '') {
      alert('Vui lòng nhập đầy đủ các trường')
    }
    else if(password !== confirmedPassword) {
      alert('Mật khẩu và xác nhận mật khẩu phải giống nhau')
    }
    else {
      axios.post('http://localhost:8081/update-password-by-email', {
        resetEmail: resetEmail,
        password: password
      }).then(res => {
        if(res.data.Status === 'Error') {
          alert('Lỗi')
          console.log(res.data.Message)
        }
        else {
          alert('Cập nhật mật khẩu thành công')
          navigate('/login')
        }
      })
    }
  }

  return (
    <div style={{
      height: '100vh',
      alignContent: 'center'
    }}>
      <form className="resetpass-form">
        <span className="resetpass-signup">RESET PASSWORD</span>
        <input type="password" placeholder="Password" className="resetpass-form--input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="password" placeholder="Confirm password" className="resetpass-form--input"
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
        
        {/* <div className="resetpass-form--marketing">
          <input id="okayToEmail" type="checkbox" className='resetpass-input-checkbox'/>
          <label for="okayToEmail" className="resetpass-label-checkbox">
            I agree with policy and privacy
          </label>
        </div> */}
        <button className="resetpass-form--submit" onClick={(e) => {
          handleClickOK(e)
        }}>
            OK
        </button>
      </form>
    </div>
  )
}

export default ResetPassword