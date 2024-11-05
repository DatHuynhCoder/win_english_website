import React, { useState, useEffect } from 'react';
import './Payment.css';
import QR from'./QRthanhtoan.png'
import bank from './bank.png'
function Payment() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [countdownTime, setCountdownTime] = useState(15 * 60); // 15 minutes

    useEffect(() => {
        let countdownInterval;

        if (isModalOpen) {
            countdownInterval = setInterval(() => {
                setCountdownTime((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(countdownInterval);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(countdownInterval);
    }, [isModalOpen]);

    const handleOpenModal = () => {
        console.log("Opening modal"); // Check if this is printed when the button is clicked
        setIsModalOpen(true);
        setCountdownTime(15 * 60); // Reset countdown each time modal is opened
    };

    const handleCloseModal = () => {
        console.log("Closing modal"); // Check if this is printed when modal is closed
        setIsModalOpen(false);
    };

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="App">
            <section>
                <div className="payment-card">
                    <h2>Quét mã QR để thanh toán</h2>
                    <nav>
                    <img src={QR}  alt="logo" />
                    </nav>
                    <p>Mở các ứng dụng có VietQR để thanh toán</p>
                    <br />
                    <img src={bank} alt="bank-img" />
                    <br />
                    <button id="payment-button" onClick={handleOpenModal}>
                        Hướng dẫn thanh toán ?
                    </button>
                </div>
            </section>

            {/* Conditionally add "show" class based on isModalOpen */}
            <div className={`overlay ${isModalOpen ? 'show' : ''}`} onClick={handleCloseModal}></div>
            <div className={`modal ${isModalOpen ? 'show' : ''}`}>
                <div className='thongtin'>
                    
                <h2>Thông tin đơn hàng</h2>
                <h1>Gói Premium nâng cấp</h1>
                <section className='container' >
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
                
                <input type="text" />
                </div>
                <div className="timer" id="countdown-timer">
                    {countdownTime > 0
                        ? `Giao dịch kết thúc sau ${formatTime(countdownTime)}`
                        : "Giao dịch đã hết hạn"}
                </div>
            </div>
        </div>
    );
}

export default Payment;
