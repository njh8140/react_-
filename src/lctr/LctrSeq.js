import React from "react";
import "./css/LctrSeq.css";

function LctrSeq() {
  return (
    <div className="lecture-seq-container">
      {/* 상단: 왼쪽 "java의 기초", 오른쪽 "강사 : 김자바" */}
      <div className="top-row">
        <h2 className="title-left">java의 기초</h2>
        <span className="teacher-right">강사 : 김자바</span>
      </div>

      {/* 검정색 박스 (영상 자리) */}
      <div className="video-preview"></div>

      {/* 강의 설명 */}
      <div className="form-group">
        <label>강의 설명</label>
        <textarea
          placeholder="본 강의는 java의 기초를 초점으로 내용을 다루며..."
        />
      </div>

      {/* 퀴즈 제출 */}
      <div className="form-group">
        <label>퀴즈 제출</label>
        <input type="text" placeholder="퀴즈 파일 링크" />
      </div>
    </div>
  );
}

export default LctrSeq;
