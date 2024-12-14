import React, { useState, useContext } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie'
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom';
import { ContextStore } from '../../context/Context';
import styles from './LoginSignupStyles.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { toast } from 'react-toastify';

const Login = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const { accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken,
    setUserid,
    setIspremium
  } = useContext(ContextStore)
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [signinEmail, setSigninEmail] = useState('')
  const [signinPassword, setSigninPassword] = useState('')

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleSignin = (e) => {
    e.preventDefault()
    console.log('signin clicked')
    const info = {
      email: signinEmail,
      password: signinPassword,
    }
    if(signinEmail === '' || signinPassword === '') {
      toast.error('Các trường không được để trống')
    }
    else
    axios.post('http://localhost:8081/login', info)
      .then(res => {
        console.log(res)
        if (res.data.Status === 'Success') {
          toast.success('Đăng nhập thành công, chúc bạn đạt kết quả tốt !')
          setAccessToken(res.data.accessToken) // set accessToken
          const decodedAccessToken = jwtDecode(res.data.accessToken)
          console.log('decodedAccessToken: ', decodedAccessToken)
          cookies.set("accessToken", res.data.accessToken, {

          })
          setRefreshToken(res.data.refreshToken) // set refreshToken
          const decodedRefreshToken = jwtDecode(res.data.refreshToken)
          console.log('decodedRefreshToken: ', decodedRefreshToken)
          cookies.set("refreshToken", res.data.refreshToken, {

          })
          setUserid(decodedAccessToken.userid);
          setIspremium(decodedAccessToken.ispremium);
          navigate('/')
        }
        else {
          toast.error(res.data.Error)
          setAccessToken(null)
        }
      })
      .catch(err => console.log(err))
  }
  const isAllNumbers = (str) => {
    if (!str) return false;
    return /^\d+$/.test(str);
  }
  const handleSignup = (e) => {
    e.preventDefault()
    console.log('signup clicked')
    if(username === '' || phonenumber === '' || email === '' || password === '' || confirmPassword === '') {
      toast.error('Các trường không được để trống')
    }
    else if(!isAllNumbers(phonenumber)) {
      toast.error('Số điện thoại không được chứa ký tự khác số')
    }
    else if (password !== confirmPassword) {
      toast.error('Mật khẩu và mật khẩu xác nhận phải giống nhau')
    }
    else {
      const info = {
        username: username,
        phonenumber: phonenumber,
        email: email,
        password: password,
      }
      axios.post('http://localhost:8081/register', info)
        .then(res => {
          console.log(res)
          if (res.data.Status === 'Success') {
            toast.success('Đăng ký tài khoản thành công, xin hãy đăng nhập !')
            navigate('/login')
          }
          else {
            toast.error(res.data.Error)
          }
        })
        .then(err => console.log(err))
    }
  }

  const handleForgetPass = () => {
    if(signinEmail === '') toast.warning('Vui lòng nhập email !')
    else {
      axios.get('http://localhost:8081/get-user-by-email?email=' + signinEmail).then(res => {
        console.log('check res when get-user-by-email: ', res.data.length)
        if(res.data.length) { // exist an user with that email
          const OTPCode = Math.floor(Math.random() * 9000 + 1000) // gửi mã OTP này đến mail của user
          axios.post("http://localhost:8081/send-recovery-email", { // gửi mã otp đến mail
            OTP: OTPCode,
            recipient_email: signinEmail
          }).then(res => {
            if(res.data.Status === 'Success') {
              console.log('Send email successfully !')
              navigate('/otp', {
                state: {
                  OTPCode: OTPCode,
                  resetEmail: signinEmail
                }
              })
            }
          })
        }
        else {
          toast.error('Không tồn tại người dùng')
        }
      })
    }
  }

  return (
    <div className={styles.loginbody}>
      <div className={`${styles.containerLogin} ${isActive ? styles.active : ''}`}>
        <div className={`${styles.formcontainer} ${styles.signup}`}>
          <form>
            <h1 className={styles.h1}>Create Account</h1>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Phone number" onChange={(e) => setPhonenumber(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={(e) => handleSignup(e)}>Sign Up</button>
          </form>
        </div>
        <div className={`${styles.formcontainer} ${styles.signin}`}>
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email" onChange={(e) => setSigninEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setSigninPassword(e.target.value)} />
            <div className={styles.forgetpassword}>
              {/* <Link to={'/otp'}>Forget Your Password?</Link> */}
              <p style={{cursor: 'pointer'}} onClick={() => handleForgetPass()}>Forget Your Password?</p>
            </div>
            <span>or using</span>
            <div className={styles.socialicons}>
              <a href="#" className={styles.icon}><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
              <a href="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <button onClick={(e) => handleSignin(e)}>Sign In</button>
          </form>
        </div>
        <div className={styles.togglecontainer}>
          <div className={styles.toggle}>
            <div className={`${styles.togglepanel} ${styles.toggleleft}`}>
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of the site’s features</p>
              <button className={styles.hidden} onClick={handleLoginClick}>Sign In</button>
            </div>
            <div className={`${styles.togglepanel} ${styles.toggleright}`}>
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of the site’s features</p>
              <button className={styles.hidden} onClick={handleRegisterClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
