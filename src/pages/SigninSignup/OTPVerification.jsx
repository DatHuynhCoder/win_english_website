import React, { useState } from 'react'
import './OTPVerification.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [OTPInput, setOTPInput] = useState({
    one: '',
    two: '',
    three: '',
    four: ''
  })
  const OTPCode = location.state?.OTPCode // OTP code gửi từ trang login qua
  const resetEmail = location.state?.resetEmail // email gửi từ trang login qua
  const handleVerify = () => {
    const OTPUserInput = OTPInput.one + OTPInput.two + OTPInput.three + OTPInput.four
    if(OTPUserInput === OTPCode.toString()) {
      toast.success('Verify successfully')
      // navigate to reset password
      navigate('/resetpassword', {
        state: {
          resetEmail: resetEmail
        }
      })
    }
    else {
      toast.error('OTP not correct !')
    }
  }
  return (
    <div style={{
      height: '100vh',
      alignContent: 'center'
    }}>
      <form class="OTP-form">
        <div class="OTP-info">
          <span class="OTP-title">OTP Verification</span>
          <p class="OTP-description">Please enter the code we have sent you via email. </p>
        </div>
        <div class="OTP-inputs">
          <input placeholder="" type="tel" maxlength="1" class="OTP-inputs-child" onChange={(e) => setOTPInput({...OTPInput, one: e.target.value})}/>
          <input placeholder="" type="tel" maxlength="1" class="OTP-inputs-child" onChange={(e) => setOTPInput({...OTPInput, two: e.target.value})}/>
          <input placeholder="" type="tel" maxlength="1" class="OTP-inputs-child" onChange={(e) => setOTPInput({...OTPInput, three: e.target.value})}/>
          <input placeholder="" type="tel" maxlength="1" class="OTP-inputs-child" onChange={(e) => setOTPInput({...OTPInput, four: e.target.value})}/>
        </div>
        <p class="OTP-validate" onClick={() => handleVerify()}>Verify</p>
        <p class="OTP-resend">You don't receive the code ?<a class="OTP-resend-action">resend</a></p>
      </form>
    </div>
  )
}