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

    return (
        <div className="payment-card">
            <h1>Gói đặc biệt</h1>
            <p>Ưu đãi nhiều hơn</p>
            <div className="price">
                <span className="discounted-price">{discountedPrice}</span>
                <span className="original-price">Giá gốc: {originalPrice}</span>
                <span className="savings">{savings}</span>
            </div>
            
            <button className="register-button" id="register">ĐĂNG KÝ HỌC NGAY</button>
            <button className="trial-button" id="Trying">Học thử miễn phí</button>
            
            <ul className="course-info">
                <li>{registeredStudents} học viên đã đăng ký</li>
                <li>{topics}</li>
                <li>{exercises}</li>
                <li>Có thể học trên nhiều nền tản</li>
            </ul>
            
            <p className="consultation">
                Nếu chưa chắc chắn khóa học này dành cho bạn có thể<a href="#">Liên hệ để nhận tư vấn miễn phí!</a>
            </p>
        </div>
    );
};

export default Payment;
