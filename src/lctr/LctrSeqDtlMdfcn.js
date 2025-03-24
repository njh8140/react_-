import React from "react";
// CSS 폴더 경로
import "./css/LctrSeqDtlMdfcn.css";

function LctrSeqDtlMdfcn() {
  return (
    <div className="lecture-edit-container">
      {/* 상단 제목 */}
      <h2 className="page-title">강의 수정하기</h2>

      <div className="main-content">
        {/* 왼쪽: 검정색 박스 (영상/이미지 자리) */}
        <div className="video-preview"></div>

        {/* 오른쪽: 강의 제목/설명 폼 */}
        <div className="form-area">
          <div className="form-group">
            <label>강의제목</label>
            <input type="text" placeholder="java의 기초" />
          </div>

          <div className="form-group">
            <label>강의 설명</label>
            <textarea
              rows="8"
              placeholder="본 강의는 java의 기초를 초점으로 내용을 다루며..."
            />
          </div>
        </div>
      </div>

      {/* 하단: 강의 업로드 */}
      <div className="upload-group">
        <label>강의 업로드</label>
        <input type="text" placeholder="강의 링크" />
      </div>
    </div>
  );
}

export default LctrSeqDtlMdfcn;
