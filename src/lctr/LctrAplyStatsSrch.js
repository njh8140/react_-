import React, { useEffect, useState } from "react";
//import "./css/LctrAplyStatsSrch.css";

const LctrAplyStatsSrch = () => {
const[instLctrSeqRprs, setLctrRprs] = useState([]);
const [loading, setLoading] = useState(true); // 로딩 상태 추가
const [error, setError] = useState(null); // 에러 상태 추가
const emlAddr = sessionStorage.getItem('emlAddr');
console.log(emlAddr);
useEffect(() => {
    fetch("http://localhost:9193/api/lctrAplyStatsSrch", {
      method : "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: emlAddr
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setLctrRprs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);


return(
    <div className="container">
    <h2>수강 신청 목록 조회</h2>

    {loading && <p className="loading-message">로딩 중...</p>}
    {error && <p className="error-message">{error}</p>}

    {!loading && !error && (
      <table className=".header-container">
        <thead>
          <tr>
            {/* <th>강좌 SEQ</th> */}
            <th>강좌 제목</th>
            <th>강사 이름</th>
            <th>강좌 종류</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {instLctrSeqRprs.length > 0 ? (
            instLctrSeqRprs.map((lctr) => (
              <tr key={lctr.lctrSeq}>
                {/* <td>{lctr.lctrSeq}</td> */}
                <td>{lctr.lctrTtl}</td>
                <td>{lctr.instrNm}</td>
                <td>{lctr.lctrKnd}</td>
                <td>{lctr.regYmd}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">강좌가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    )}
  </div>
);
};     

export default LctrAplyStatsSrch;