import React from 'react';
import './User.css';

function User() {
    // Dữ liệu mẫu cho phần từ vựng, ngữ pháp, khóa học, và đề thi
    const userData = {
        username: "Tên người dùng",
        vocabLessons: [
            { title: "Bài học 1", progress: "90%", dateCompleted: "2024-10-01" },
            { title: "Bài học 2", progress: "80%", dateCompleted: "2024-10-05" },
            { title: "Bài học 3", progress: "70%", dateCompleted: "2024-10-07" },
        ],
        grammarLessons: [
            { title: "Ngữ pháp 1", progress: "85%", dateCompleted: "2024-10-12" },
            { title: "Ngữ pháp 2", progress: "75%", dateCompleted: "2024-10-15" },
        ],
        registeredCourses: [
            { title: "Khóa học 1", progress: "Hoàn thành 50%", dateCompleted: "Chưa hoàn thành" },
            { title: "Khóa học 2", progress: "Hoàn thành 20%", dateCompleted: "Chưa hoàn thành" },
        ],
        examsTaken: [
            { title: "Đề thi 1", score: "8.5", dateCompleted: "2024-10-20" },
            { title: "Đề thi 2", score: "9.0", dateCompleted: "2024-10-22" },
        ]
    };

    return (
        <div className="profile-container">
            <div className="header">
                <div className="avatar"></div>
                <h1 className="username">{userData.username}</h1>
            </div>

            <section className="section">
                <h2>Từ Vựng Đã Học</h2>
                <div className="card-container">
                    {userData.vocabLessons.map((lesson, index) => (
                        <div key={index} className="card">
                            <p>Tiêu đề: {lesson.title}</p>
                            <p>Đã đạt được: {lesson.progress}</p>
                            <p>Ngày hoàn thành: {lesson.dateCompleted}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <h2>Ngữ Pháp Đã Học</h2>
                <div className="card-container">
                    {userData.grammarLessons.map((lesson, index) => (
                        <div key={index} className="card">
                            <p>Tiêu đề: {lesson.title}</p>
                            <p>Đã đạt được: {lesson.progress}</p>
                            <p>Ngày hoàn thành: {lesson.dateCompleted}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="section">
                <h2>Đề Thi Đã Làm</h2>
                <div className="card-container">
                    {userData.examsTaken.map((exam, index) => (
                        <div key={index} className="card">
                            <p>Tiêu đề: {exam.title}</p>
                            <p>Điểm: {exam.score}</p>
                            <p>Ngày hoàn thành: {exam.dateCompleted}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default User;
