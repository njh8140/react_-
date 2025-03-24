import React from "react";
import { Link } from "react-router-dom";
import "./css/LctrSeqStatsSrch.css";

function Example() {
  // 임시 데이터 예시
  const groupedLectures = [
    {
      lctrSeq: 1,
      mainTitle: "Java",
      instrNm: "김자바",
      lctrKnd: "IT",
      details: [
        {
          lctrObjt: 1,
          lctrTtl: "Java의 기초",
          lctrDura: "30분",
          regYmd: "2025-02-09",
          vdoUrlAddr: "https://example.com/java_basic",
          testUrlAddr: "https://example.com/java_quiz"
        },
        {
          lctrObjt: 2,
          lctrTtl: "Java의 심화",
          lctrDura: "40분",
          regYmd: "2025-02-09",
          vdoUrlAddr: "https://example.com/java_advanced",
          testUrlAddr: "https://example.com/java_quiz2"
        },
        {
          lctrObjt: 3,
          lctrTtl: "java의 응용",
          lctrDura: "45분",
          regYmd: "2025-02-09",
          vdoUrlAddr: "https://example.com/java_pro",
          testUrlAddr: "https://example.com/java_quiz3"
        },
        {
          lctrObjt: 4,
          lctrTtl: "java의 실전",
          lctrDura: "45분",
          regYmd: "2025-02-09",
          vdoUrlAddr: "https://example.com/java_pro",
          testUrlAddr: "https://example.com/java_quiz3"
        }
      ]
    }
  ];

  return (
    <div className="lecture-list-container">
      {/* 헤더 영역: 회색 배경이 전체 너비에 걸쳐서 적용됨 */}
      <div
        className="header-container"
        style={{
          position: "relative",
          width: "100%",
          padding: "10px 0", // 좌우 패딩 제거
          borderBottom: "1px solid #ccc",
          background: "#f0f0f0",
          boxSizing: "border-box",
          height: "70px"
        }}
      >
        <h2
          className="page-title"
          style={{
            margin: 0,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "1.2em"
          }}
        >
          강의 목록
        </h2>
        {sessionStorage.getItem("mbrNo") >= 2 && (
          <Link
            to="/lecture/edit"
            style={{
              position: "absolute",
              right: "2%",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "0.7em",
              padding: "3px 8px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "4px",
              textDecoration: "none"
            }}
          >
            강의 수정하기
          </Link>
        )}
      </div>

      {/* 강의 블록 목록 */}
      {groupedLectures.map((lectureGroup) => (
        <div key={lectureGroup.lctrSeq} className="lecture-block" style={{ marginTop: "20px" }}>
          {/* 상단 테이블 */}
          <table className="info-table">
            <thead>
              <tr>
                <th>강좌번호</th>
                <th>강좌제목</th>
                <th>강사명</th>
                <th>분류</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{lectureGroup.lctrSeq}</td>
                <td>{lectureGroup.mainTitle}</td>
                <td>{lectureGroup.instrNm}</td>
                <td>{lectureGroup.lctrKnd}</td>
              </tr>
            </tbody>
          </table>
          <br />
          {/* 하단 테이블 */}
          <table className="info-table">
            <thead>
              <tr>
                <th>회차</th>
                <th>강의제목</th>
                <th>강의길이</th>
                <th>등록일</th>
                <th>시청하기</th>
                <th>시험치기</th>
              </tr>
            </thead>
            <tbody>
              {lectureGroup.details.map((detail, idx) => (
                <tr key={`${lectureGroup.lctrSeq}-${detail.lctrObjt}-${idx}`}>
                  <td>{detail.lctrObjt}</td>
                  <td>{detail.lctrTtl}</td>
                  <td>{detail.lctrDura}</td>
                  <td>{new Date(detail.regYmd).toLocaleDateString()}</td>
                  <td>
                    {detail.vdoUrlAddr ? (
                      <a
                        href={detail.vdoUrlAddr}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="watch-btn">시청하기</button>
                      </a>
                    ) : (
                      "없음"
                    )}
                  </td>
                  <td>
                    {detail.testUrlAddr ? (
                      <a
                        href={detail.testUrlAddr}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="test-btn">시험치기</button>
                      </a>
                    ) : (
                      "없음"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Example;
