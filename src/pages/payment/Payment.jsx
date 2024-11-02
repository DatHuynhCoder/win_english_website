import React from 'react';
import './style.css';

const Payment = () => {

    // Mở modal
    const dangki = () => { 
        alert('Tiến hành đăng kí');
        document.getElementById("modal").style.display = "flex";
    }

    // Đóng modal
    const closeModal = () => {
        document.getElementById("modal").style.display = "none";
    }

    const hocthu = () => {
        alert('Thử gói trong 3 ngày!');
    }
    return (
        <div>
            <section>
                <div className="payment-card">
                    <h1>Gói đặc biệt theo tháng</h1>
                    <p>Ưu đãi nhiều hơn</p>
                    <div className="price">
                        <span className="discounted-price">999.000đ</span>
                        <span className="original-price">Giá gốc: 2.000.000đ</span>
                        <span className="savings">Tiết kiệm hơn 1 triệu đồng</span>
                    </div>

                    <button className="register-button" onClick={dangki}>ĐĂNG KÝ HỌC NGAY</button>
                    <button className="trial-button" onClick={hocthu}>Thử gói trong 3 ngày</button>

                    <ul className="course-info">
                        <li>98,671 học viên đã đăng ký</li>
                        <li>95 chủ đề và hơn 1,028 bài học</li>
                        <li>2,416 bài tập thực hành</li>
                        <li>Có thể học trên nhiều nền tảng</li>
                    </ul>

                    <p className="consultation">
                        Nếu chưa chắc chắn khóa học này dành cho bạn có thể <a href="#">Liên hệ để nhận tư vấn miễn phí!</a>
                    </p>
                </div>

                <div className="payment-card">
                    <h1>Gói đặc biệt theo năm</h1>
                    <p>Ưu đãi nhiều hơn</p>
                    <div className="price">
                        <span className="discounted-price">999.000đ</span>
                        <span className="original-price">Giá gốc: 2.000.000đ</span>
                        <span className="savings">Tiết kiệm hơn 1 triệu đồng</span>
                    </div>

                    <button className="register-button" onClick={dangki}>ĐĂNG KÝ GÓI NGAY</button>
                    <button className="trial-button" onClick={hocthu}>Thử gói trong 3 ngày</button>

                    <ul className="course-info">
                        <li>98,671 học viên đã đăng ký</li>
                        <li>95 chủ đề và hơn 1,028 bài học</li>
                        <li>2,416 bài tập thực hành</li>
                        <li>Có thể học trên nhiều nền tảng</li>
                    </ul>

                    <p className="consultation">
                        Nếu chưa chắc chắn khóa học này dành cho bạn có thể <a href="#">Liên hệ để nhận tư vấn miễn phí!</a>
                    </p>
                </div>
            </section>

            <div id="modal" className="modal">
                <div className="modal-content">
                    <button className="close-button" onClick={closeModal}>&times;</button>
                    <h2>Đăng ký khóa học</h2>
                    <p>Nhập thông tin của bạn để đăng ký.</p>
                    <form>
                        <label htmlFor="name">Họ tên</label><br />
                        <input type="text" id="name" placeholder="Nguyễn Văn A" /><br /><br />

                        <label htmlFor="phone">Số điện thoại</label><br />
                        <input type="text" id="phone" placeholder="0987654321" /><br /><br />

                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" placeholder="example@gmail.com" /><br /><br />

                        <label htmlFor="address">Địa chỉ</label><br />
                        <input type="text" id="address" placeholder="Địa chỉ nhà" /><br /><br />

                        <button type="submit" className="BuyButton">Đặt mua ngay</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Payment;
