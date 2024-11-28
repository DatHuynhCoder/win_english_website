import React, { useState, useEffect } from 'react';
import './Payment.css';
// import QR from './QRthanhtoan.png';
import QR from '../../assets/QRthanhtoan.png'
import bank from '../../assets/bank.png';

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
        <h2 className='payment-h2'>Quét mã QR để thanh toán</h2>
        <nav className='navclass'>
          <img src={QR} alt="logo" />
        </nav>
         <p className='payment-p'>Mở các ứng dụng có VietQR để thanh toán</p>
        <br />
        <img src={bank} alt="bank-img" />
        <br />
        <button id="payment-button" className='payment-button'>
          Hướng dẫn thanh toán
        </button>
      </div>

      <div className='thongtin'>
        <h2 className='payment-h2'>Thông tin đơn hàng</h2>
        <h1>Gói Premium nâng cấp</h1>
        <section className='payment-container'>
          <div className='smallblock1'>
             <p className='payment-p'>Giá trị đơn hàng: </p>
             <p className='payment-p'>Số tiền thanh toán: </p>
             <p className='payment-p'>Mã giao dịch</p>
            <br />
             <p className='payment-p'>Nội dung</p>
          </div>
          <div className='smallblock2'>
             <p className='payment-p'>3.999.999đ</p>
             <p className='payment-p'>3.999.999đ</p>
             <p className='payment-p'>39568845698826597028776</p>
          </div>
        </section>

        <input className='payment-input' type="text" placeholder="Nhập nội dung thanh toán" />

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