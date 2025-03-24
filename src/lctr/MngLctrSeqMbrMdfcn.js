import React from "react";
import "./css/MngLctrSeqMbrMdfcn.css";

function MngLctrSeqMbrMdfcn() {
  return (
    <div className="mbr-mdfcn-container">
      {/* 사이드바 영역 */}
      <div className="sidebar"></div>
      <div className="sidebar-menu">
        회원 정보<br />
        강좌 목록<br />
        회원 관리
      </div>
      <div className="user-name">절대자 님</div>
      <div className="role">관리자</div>
      {/* 프로필 박스 (이미지 자리) */}
      <div className="profile-box"></div>

      {/* 상단 텍스트 */}
      <div className="title-main">강의실</div>
      <div className="title-member">회원 관리</div>
      <div className="title-register">강좌 등록하기</div>

      {/* 첫 번째 테이블 (위쪽) */}
      <table className="member-table table1">
        <thead>
          <tr>
            <th>회원등급</th>
            <th>회원번호</th>
            <th>회원이름</th>
            <th>이메일</th>
            <th>연락처</th>
            <th>가입일</th>
            <th>종료일</th>
            <th>정보수정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>일반회원</td>
            <td>1</td>
            <td>홍길동</td>
            <td>hong@naver.com</td>
            <td>010-1234-5678</td>
            <td>2025.03.03</td>
            <td>2025.06.03</td>
            <td><a href="#">상세보기</a></td>
          </tr>
          <tr>
            <td>일반회원</td>
            <td>2</td>
            <td>고길동</td>
            <td>go@naver.com</td>
            <td>010-1234-5678</td>
            <td>2025.03.03</td>
            <td>2025.06.04</td>
            <td><a href="#">상세보기</a></td>
          </tr>
          <tr>
            <td>일반회원</td>
            <td>3</td>
            <td>박길동</td>
            <td>park@naver.com</td>
            <td>010-1234-5678</td>
            <td>2025.03.03</td>
            <td>2025.06.02</td>
            <td><a href="#">상세보기</a></td>
          </tr>
        </tbody>
      </table>

      {/* 두 번째 테이블 (아래쪽) */}
      <table className="member-table table2">
        <thead>
          <tr>
            <th>회원등급</th>
            <th>회원번호</th>
            <th>회원이름</th>
            <th>이메일</th>
            <th>연락처</th>
            <th>가입일</th>
            <th>종료일</th>
            <th>정보수정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>일반회원</td>
            <td>1</td>
            <td>홍길동</td>
            <td>hong@naver.com</td>
            <td>010-1234-5678</td>
            <td>2025.03.03</td>
            <td>2025.06.03</td>
            <td><a href="#">상세보기</a></td>
          </tr>
          <tr>
            <td>일반회원</td>
            <td>2</td>
            <td>고길동</td>
            <td>go@naver.com</td>
            <td>010-1234-5678</td>
            <td>2025.03.03</td>
            <td>2025.06.04</td>
            <td><a href="#">상세보기</a></td>
          </tr>
          <tr>
            <td>일반회원</td>
            <td>3</td>
            <td>박길동</td>
            <td>park@naver.com</td>
            <td>010-1234-5678</td>
            <td>2025.03.03</td>
            <td>2025.06.02</td>
            <td><a href="#">상세보기</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MngLctrSeqMbrMdfcn;
