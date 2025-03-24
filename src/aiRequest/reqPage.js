import React, { useState } from "react";
import "./css/reqStyle.css";

// 컬럼명 바꾸기
const reqPage = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        date: "",
        notes: "",
        mediaUrl: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    // 컬럼명 바꾸기
    return (
        <div className="container">
            <h2 className="header">영상 분석 의뢰서</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label className="input-label">제목</label>
                    <input className="input-box" type="text" name="title" value={formData.title} onChange={handleChange} placeholder="제목 입력" />
                </div>
                <div className="input-group">
                    <label className="input-label">작성자</label>
                    <input className="input-box" type="text" name="author" value={formData.author} onChange={handleChange} placeholder="작성자 입력" />
                </div>
                <div className="input-group">
                    <label className="input-label">등록일</label>
                    <input className="input-box" type="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label className="input-label">참고 사항(요구사항)</label>
                    <textarea className="input-box" name="notes" value={formData.notes} onChange={handleChange} placeholder="요구사항 입력"></textarea>
                </div>
                <div className="input-group">
                    <label className="input-label">영상 URL 또는 이미지 등록</label>
                    <input className="input-box" type="text" name="mediaUrl" value={formData.mediaUrl} onChange={handleChange} placeholder="URL 입력" />
                </div>
                <div className="button-group">
                    <button type="submit" className="button">제출</button>
                </div>
            </form>
        </div>
    );
};

export default reqPage;
