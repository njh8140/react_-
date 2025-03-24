import React from "react";
import "./css/PrgrsLctrSeq.css";

function PrgrsLctrSeq() {
  return (
    <div className="pc-container">
      {/* 상단 헤더 */}
      <header className="pc-header">
        <h1 className="pc-header-title">나의 강의실</h1>
        <a href="#apply" className="pc-apply-btn">수강 신청하기</a>
      </header>

      {/* 콘텐츠 영역: 좌측 사이드바 + 우측 메인 영역 */}
      <div className="pc-content">
        {/* 좌측 사이드바 */}
        <aside className="pc-sidebar">
          <div className="pc-member-type">일반회원</div> 
          <br />
          <br />
          <div className="pc-profile">
            <img 
              src="/img/default-profile.png" 
              alt="프로필" 
              className="pc-profile-img" 
            />
            <br />
            <br />
            <div className="pc-member-name">김코딩님</div>
          </div>
          <nav className="pc-nav">
            <ul>
              <li><a href="#member-info">회원정보</a></li>
              <li><a href="#ongoing-courses">진행중 강좌</a></li>
              <li><a href="#completed-courses">종료된 강좌</a></li>
            </ul>
          </nav>
        </aside>

        {/* 우측 메인 영역 */}
        <main className="pc-main">
          {/* 진행중 강좌 섹션 */}
          <section className="pc-course-section">
            <h2 className="pc-section-title">진행중 강좌</h2>
            <table className="pc-course-table">
              <thead>
                <tr>
                  <th>강좌번호</th>
                  <th>강좌제목</th>
                  <th>강사명</th>
                  <th>분류</th>
                  <th>신청일</th>
                  <th>종료일</th>
                  <th>상세보기</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Java</td>
                  <td>김자바</td>
                  <td>IT</td>
                  <td>2025.03.03</td>
                  <td>2025.06.03</td>
                  <td>
                    <button className="pc-detail-btn">상세보기</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Python</td>
                  <td>박파이썬</td>
                  <td>IT</td>
                  <td>2025.04.01</td>
                  <td>2025.07.01</td>
                  <td>
                    <button className="pc-detail-btn">상세보기</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 학습 진도율 섹션 */}
          <section className="pc-progress-section">
            <h2 className="pc-section-title">학습 진도율</h2>
            <table className="pc-progress-table">
              <thead>
                <tr>
                  <th>진행율</th>
                  <th>수강한 강의</th>
                  <th>퀴즈</th>
                  <th>시험</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>45%</td>
                  <td>10 / 20 강의</td>
                  <td>5 / 10 개</td>
                  <td>3 / 5 회</td>
                </tr>
                <tr>
                  <td>70%</td>
                  <td>14 / 20 강의</td>
                  <td>7 / 10 개</td>
                  <td>4 / 5 회</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 강의 시청하기 섹션 */}
          <section className="pc-watch-section">
            <h2 className="pc-section-title">강의 시청하기</h2>
            <div className="pc-watch-grid">
              <div className="pc-watch-item">1. Java의 기초</div>
              <div className="pc-watch-item">2. Java의 심화</div>
              <div className="pc-watch-item">3. Java의 응용</div>
              <div className="pc-watch-item">4. Java 실전</div>
            </div>
          </section>

          {/* 하단 영역: 페이지네이션 및 강의 목록 보기 */}
          <footer className="pc-footer">
            <div className="pc-pagination">
              {/* <span className="pc-page active">1</span>
              <span className="pc-page">2</span>
              <span className="pc-page">3</span>
              <span className="pc-page">다음</span> */}
            </div>
            <a href="#all-courses" className="pc-all-courses-link">
              강의 목록 보기
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default PrgrsLctrSeq;
