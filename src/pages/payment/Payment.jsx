import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [countdownTime, setCountdownTime] = useState(15 * 60); // 15 phút

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
        setIsModalOpen(true);
        setCountdownTime(15 * 60); // Đặt lại thời gian đếm ngược mỗi khi mở modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes} : ${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="App">
            <section>
                <div className="payment-card">
                    <h2>Quét mã QR để thanh toán</h2>
                    <nav>
                        <img src="./QRthanhtoan.png" alt="QR Code" />
                    </nav>
                    <p>Mở các ứng dụng có VietQR để thanh toán</p>
                    <br />
                    <img src="./bank.png" alt="Bank Icons" />
                    <br />
                    <button id="payment-button" onClick={handleOpenModal}>
                        Hướng dẫn thanh toán
                    </button>
                </div>
            </section>

            {isModalOpen && (
                <>
                    <div className="overlay" onClick={handleCloseModal}></div>
                    <div className="modal">
                        <h2>Thông tin đơn hàng</h2>
                        <h1>Gói Premium nâng cấp</h1>
                        <p>Giá trị đơn hàng: 3.999.999đ</p>
                        <p>Số tiền thanh toán: 3.999.999đ</p>
                        <br />
                        <p>Mã giao dịch</p>
                        <p>39568845698826597028776</p>
                        <br />
                        <p>Nội dung</p>
                        <input type="text" />
                        <div className="timer" id="countdown-timer">
                            {countdownTime > 0
                                ? `Giao dịch kết thúc sau ${formatTime(countdownTime)}`
                                : "Giao dịch đã hết hạn"}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
