import React from 'react';
import './Payment.css'; 

const Payment= () => {
    // Dữ liệu giả định (có thể thay bằng API hoặc props nếu muốn lấy từ bên ngoài)
    const discountedPrice = "999.000đ";
    const originalPrice = "2.000.000đ";
    const savings = "Tiết kiệm hơn 1 triệu đồng";
    const registeredStudents = "98,671";
    const topics = "95 chủ đề và hơn 1,028 bài học";
    const exercises = "2,416 bài tập thực hành";
    const dangki = () => {
        alert('Đăng ký học ngay!');
    };

    const hocthu = () => {
        alert('Thử gói trong 3 ngày!');
    };
    return (
        <section>
        <div className="payment-card">
            <h1>Gói đặc biệt theo tháng</h1>
            <p>Ưu đãi nhiều hơn</p>
            <div className="price">
                <span className="discounted-price">999.000đ</span>
                <span className="original-price">Giá gốc: {originalPrice}</span>
                <span className="savings">{savings}</span>
            </div>
            
            <button className="register-button" id="register">ĐĂNG KÝ HỌC NGAY</button>
            <button className="trial-button" id="Trying">Thử gói trong 3 ngày</button>
            
            <ul className="course-info">
                <li>{registeredStudents} học viên đã đăng ký</li>
                <li>{topics}</li>
                <li>{exercises}</li>
                <li>Có thể học trên nhiều nền tảng</li>
            </ul>
            
            <p className="consultation">
                Nếu chưa chắc chắn khóa học này dành cho bạn có thể<a href="#">Liên hệ để nhận tư vấn miễn phí!</a>
            </p>
        </div>
        <div className="payment-card">
        <h1>Gói đặc biệt theo năm</h1>
        <p>Ưu đãi nhiều hơn</p>
        <div className="price">
            <span className="discounted-price">{discountedPrice}</span>
            <span className="original-price">Giá gốc: {originalPrice}</span>
            <span className="savings">{savings}</span>
        </div>
        
        <button className="register-button" id="register"  onClick={dangki}>ĐĂNG KÝ GÓI NGAY</button>
        <button className="trial-button" id="Trying"  onClick={hocthu}>Thử gói trong 3 ngày</button>
        
        <ul className="course-info">
            <li>{registeredStudents} học viên đã đăng ký</li>
            <li>{topics}</li>
            <li>{exercises}</li>
            <li>Có thể học trên nhiều nền tảng</li>
        </ul>
        
        <p className="consultation">
            Nếu chưa chắc chắn khóa học này dành cho bạn có thể<a href="#">Liên hệ để nhận tư vấn miễn phí!</a>
        </p>
    </div>
        </section>
        
    );
};

export default Payment;
