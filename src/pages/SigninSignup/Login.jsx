import React, { useState } from 'react';
import styles from './LoginSignupStyles.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.loginbody}> 
    <div className={`${styles.containerLogin} ${isActive ? styles.active : ''}`}>
      <div className={`${styles.formcontainer} ${styles.signup}`}>
        <form>
          <h1 className={styles.h1}>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className={`${styles.formcontainer} ${styles.signin}`}>
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
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
          <button onClick={handleLoginClick}>Sign In</button>
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
