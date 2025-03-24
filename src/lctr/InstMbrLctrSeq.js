import React from "react";
import "./css/InstMbrLctrSeq.css";

function InstMbrLctrSeq() {
  return (
    <div className="inst-lctr-container">
      {/* 사이드바 영역 */}
      <div className="sidebar"></div>
      <div className="sidebar-menu">
        회원 정보<br />
        강좌 목록
      </div>
      <div className="user-name">코딩마스터 님</div>
      <div className="role">기관 회원</div>
      {/* 프로필 박스 (이미지 자리) */}
      <div className="profile-box"></div>

      {/* 상단 텍스트 */}
      <div className="title-main">강의실</div>
      <div className="title-manage">강좌 관리</div>
      <div className="title-register">강좌 등록하기</div>

      {/* 강좌 테이블 */}
      <table className="lecture-table">
        <thead>
          <tr>
            <th>강좌번호</th>
            <th>강좌제목</th>
            <th>강사명</th>
            <th>분류</th>
            <th>필요기간</th>
            <th>등록일</th>
            <th>수정일</th>
            <th>정보수정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Java</td>
            <td>김자바</td>
            <td>IT</td>
            <td>1개월</td>
            <td>2025.03.03</td>
            <td>2025.06.04</td>
            <td><a href="#">상세보기</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Python</td>
            <td>박이선</td>
            <td>IT</td>
            <td>2개월</td>
            <td>2025.03.03</td>
            <td>2025.06.04</td>
            <td><a href="#">상세보기</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>MySQL</td>
            <td>홍길동</td>
            <td>IT</td>
            <td>3개월</td>
            <td>2025.03.03</td>
            <td>2025.06.04</td>
            <td><a href="#">상세보기</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InstMbrLctrSeq;
