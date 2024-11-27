import React, { useState, useContext } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { ContextStore } from '../../context/Context';
import styles from './LoginSignupStyles.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const {accessToken, setAccessToken, refreshToken, setRefreshToken, setUserid} = useContext(ContextStore)
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
    axios.post('http://localhost:8081/login', info)
    .then(res => {
      console.log(res)
      if(res.data.Status === 'Success'){
        alert(res.data.Status)
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
        setUserid(res.data.userid);
        navigate('/')
      }
      else {
        alert(res.data.Error)
        setAccessToken(null)
      }
    })
    .then(err => console.log(err))
  }

  const handleSignup = (e) => {
    e.preventDefault()
    console.log('signup clicked')
    if(password !== confirmPassword) {
      alert('different between password and password confirmed')
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
        if(res.data.Status === 'Success'){
          alert(res.data.Status)
          navigate('/login')
        }
        else {
          alert('Error !!!')
        }
      })
      .then(err => console.log(err))
    }
  }

  return (
    <div className={styles.loginbody}> 
    <div className={`${styles.containerLogin} ${isActive ? styles.active : ''}`}>
      <div className={`${styles.formcontainer} ${styles.signup}`}>
        <form>
          <h1 className={styles.h1}>Create Account</h1>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
          <input type="text" placeholder="Phone number" onChange={(e) => setPhonenumber(e.target.value)}/>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
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
            <a href="#">Forget Your Password?</a>
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
