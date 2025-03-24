import React from "react";
import "./css/EndLctrSeq.css";  // 종료된 강좌용 CSS

function EndLctrSeq() {
  return (
    <div className="endlctr-container">
      {/* 상단 헤더 */}
      <header className="endlctr-header">
        <h1 className="endlctr-header-title">나의 강의실</h1>
        <a href="#apply" className="endlctr-apply-btn">수강 신청하기</a>
      </header>

      {/* 콘텐츠 영역: 좌측 사이드바 + 우측 메인 영역 */}
      <div className="endlctr-content">
        {/* 좌측 사이드바 */}
        <aside className="endlctr-sidebar">
          <div className="endlctr-member-type">일반회원</div>
          <br />
          <br />
          <div className="endlctr-profile">
            <img
              src="/img/default-profile.png"
              alt="프로필"
              className="endlctr-profile-img"
            />
            <br />
            <br />
            <div className="endlctr-member-name">김코딩님</div>
          </div>
          <nav className="endlctr-nav">
            <ul>
              <li><a href="#member-info">회원정보</a></li>
              <li><a href="#ongoing-courses">진행중 강좌</a></li>
              <li><a href="#end-lctr">종료된 강좌</a></li>
            </ul>
          </nav>
        </aside>

        {/* 우측 메인 영역 */}
        <main className="endlctr-main">
          {/* 종료된 강좌 섹션 */}
          <section className="endlctr-section">
            <h2 className="endlctr-section-title">종료된 강좌</h2>
            <table className="endlctr-table">
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
                  <td>3</td>
                  <td>MySQL</td>
                  <td>박코딩</td>
                  <td>IT</td>
                  <td>2025.03.03</td>
                  <td>2025.06.04</td>
                  <td>
                    <button className="endlctr-detail-btn">상세보기</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 학습 진도율 섹션 (PrgrsLctrSeq와 동일한 스타일 적용) */}
          <section className="endlctr-progress-section">
            <h2 className="endlctr-section-title">학습 진도율</h2>
            <table className="endlctr-progress-table">
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
                  <td>100%</td>
                  <td>20 / 20 강의</td>
                  <td>10 / 10 개</td>
                  <td>5 / 5 회</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 하단 영역: 페이지네이션 및 강의 목록 보기 */}
          <footer className="endlctr-footer">
            <div className="endlctr-pagination">
              {/* <span className="endlctr-page active">1</span>
              <span className="endlctr-page">2</span>
              <span className="endlctr-page">3</span>
              <span className="endlctr-page">다음</span> */}
            </div>
            <a href="#all-courses" className="endlctr-all-courses-link">
              강의 목록 보기
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default EndLctrSeq;
