<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './Payment.css';
import QR from './QRthanhtoan.png';
import bank from './bank.png';

function Payment() {
    const [countdownTime, setCountdownTime] = useState(15 * 60); // 15 minutes

    useEffect(() => {
        // Thiết lập bộ đếm ngược khi component được render
        const countdownInterval = setInterval(() => {
            setCountdownTime((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(countdownInterval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        // Xóa interval khi component unmount
        return () => clearInterval(countdownInterval);
    }, []);

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="paymentclass">
            <div className="payment-card">
                <h2>Quét mã QR để thanh toán</h2>
                <nav className='navclass'>
                    <img src={QR} alt="logo" />
                </nav>
                <p>Mở các ứng dụng có VietQR để thanh toán</p>
                <br />
                <img src={bank} alt="bank-img" />
                <br />
                <button id="payment-button" className='payment-button'>
                    Hướng dẫn thanh toán
                </button>
            </div>

            <div className='thongtin'>
                <h2>Thông tin đơn hàng</h2>
                <h1>Gói Premium nâng cấp</h1>
                <section className='payment-container'>
                    <div className='smallblock1'>
                        <p>Giá trị đơn hàng: </p>
                        <p>Số tiền thanh toán: </p>
                        <p>Mã giao dịch</p>
                        <br />
                        <p>Nội dung</p>
                    </div>
                    <div className='smallblock2'>
                        <p>3.999.999đ</p>
                        <p>3.999.999đ</p>
                        <p>39568845698826597028776</p>
                    </div>
                </section>

                <input type="text" placeholder="Nhập nội dung thanh toán" />

                <div className="payment-timer" id="countdown-timer">
                    {countdownTime > 0
                        ? `Giao dịch kết thúc sau ${formatTime(countdownTime)}`
                        : "Giao dịch đã hết hạn"}
                </div>
            </div>
        </div>
    );
}

export default Payment;
=======
/**  =>>>> Dùng để test thanh toán
 * 
 * Số thẻ	4111111111111111
 * Tên	NGUYEN VAN A
 * Ngày hết hạn	01/25
 * Mã CVV	123
 */
import React, { useState, useEffect, useContext } from 'react';
import './Payment.css';
// import QR from './QRthanhtoan.png';
import axios from 'axios';
import Cookies from 'universal-cookie';
import QR from '../../assets/QRthanhtoan.png'
import bank from '../../assets/bank.png';
import { CgCheck } from 'react-icons/cg';
import { ContextStore } from '../../context/Context';
import { jwtDecode } from 'jwt-decode';

function Payment() {
  const cookies = new Cookies()
  const {accessToken, setAccessToken} = useContext(ContextStore)
  const [payURL, setPayURL] = useState(null)
  const [isOk, setIsOk] = useState(false)
  const [countdownTime, setCountdownTime] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    setAccessToken(cookies.get("accessToken"))
    async function getPayURL() {
      try {
        const res = await axios.post('http://localhost:8081/payment')
        setPayURL(res.data.order_url)
        try {
          if(res.data.return_code === 1) {
            await axios.post('http://localhost:8081/set-premium', {
              headers: {
                Authorization: `Bearer ${accessToken}`
              },
              userid: jwtDecode(cookies.get("accessToken")).userid
            })
          }
        } catch (err) {
          console.log('Error when trying to call set-premium api')
        }
      }
      catch(error) {
        console.log(error)
      }
      finally {
        console.log("done")
        setIsOk(true)
      }
    }
    getPayURL()
    // window.location.href = payURL;
    // Thiết lập bộ đếm ngược khi component được render
    // const countdownInterval = setInterval(() => {
    //   setCountdownTime((prevTime) => {
    //     if (prevTime <= 0) {
    //       clearInterval(countdownInterval);
    //       return 0;
    //     }
    //     return prevTime - 1;  
    //   });
    // }, 1000);

    // Xóa interval khi component unmount
    // return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if(isOk === true) {
      window.location.href = payURL;
    }
  }, [isOk])

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    // <div className="paymentclass">
    //   <div className="payment-card">
    //     <h2 className='payment-h2'>Quét mã QR để thanh toán</h2>
    //     <nav className='navclass'>
    //       <img src={QR} alt="logo" />
    //     </nav>
    //      <p className='payment-p'>Mở các ứng dụng có VietQR để thanh toán</p>
    //     <br />
    //     <img src={bank} alt="bank-img" />
    //     <br />
    //     <button id="payment-button" className='payment-button'>
    //       Hướng dẫn thanh toán
    //     </button>
    //   </div>

    //   <div className='thongtin'>
    //     <h2 className='payment-h2'>Thông tin đơn hàng</h2>
    //     <h1>Gói Premium nâng cấp</h1>
    //     <section className='payment-container'>
    //       <div className='smallblock1'>
    //          <p className='payment-p'>Giá trị đơn hàng: </p>
    //          <p className='payment-p'>Số tiền thanh toán: </p>
    //          <p className='payment-p'>Mã giao dịch</p>
    //         <br />
    //          <p className='payment-p'>Nội dung</p>
    //       </div>
    //       <div className='smallblock2'>
    //          <p className='payment-p'>3.999.999đ</p>
    //          <p className='payment-p'>3.999.999đ</p>
    //          <p className='payment-p'>39568845698826597028776</p>
    //       </div>
    //     </section>

    //     <input className='payment-input' type="text" placeholder="Nhập nội dung thanh toán" />

    //     <div className="payment-timer" id="countdown-timer">
    //       {countdownTime > 0
    //         ? `Giao dịch kết thúc sau ${formatTime(countdownTime)}`
    //         : "Giao dịch đã hết hạn"}
    //     </div>
    //     <button onClick={() => {
    //       console.log(payURL)
    //       window.location.href = payURL;
    //     }}>Thanh toán</button>
    //   </div>
    // </div>
    <div style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '300px'}}>
      <p style={{textAlign: 'center'}}>Vui lòng chờ trong giây lát ...</p>
    </div>
  );
}

export default Payment;
>>>>>>> ac729d5ca2f8eb6cc2bf2265ac9316effc18ae82
