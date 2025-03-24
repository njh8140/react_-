import React, { useState } from "react";
import "./css/reqStyle.css";

// 컬럼명 바꾸기
const reqResult = () => {
    const [formData, setFormData] = useState({
        requestNumber: "",
        author: "",
        completionDate: "",
        title: "",
        notes: "",
        result: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Report Submitted:", formData);
    };

    // 컬럼명 바꾸기
    return (
        <div className="container">
            <h2 className="header">영상 분석 결과서</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label className="input-label">요청 번호</label>
                    <input className="input-box" type="text" name="requestNumber" value={formData.requestNumber} onChange={handleChange} placeholder="요청 번호 입력" />
                </div>
                <div className="input-group">
                    <label className="input-label">작성자</label>
                    <input className="input-box" type="text" name="author" value={formData.author} onChange={handleChange} placeholder="작성자 입력" />
                </div>
                <div className="input-group">
                    <label className="input-label">완료 날짜</label>
                    <input className="input-box" type="date" name="completionDate" value={formData.completionDate} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label className="input-label">제목</label>
                    <input className="input-box" type="text" name="title" value={formData.title} onChange={handleChange} placeholder="제목 입력" />
                </div>
                <div className="input-group">
                    <label className="input-label">참고 사항</label>
                    <textarea className="input-box" name="notes" value={formData.notes} onChange={handleChange} placeholder="참고 사항 입력"></textarea>
                </div>
                <div className="input-group">
                    <label className="input-label">결과</label>
                    <textarea className="input-box" name="result" value={formData.result} onChange={handleChange} placeholder="결과 입력"></textarea>
                </div>
                <div className="button-group">
                    <button type="submit" className="button">제출</button>
                </div>
            </form>
        </div>
    );
};

export default reqResult;
