import React, { useEffect, useState } from "react";
//import "./css/LctrDtlStats.css";
import { useParams } from "react-router-dom"; // useParams를 사용하여 URL 파라미터를 받음

const LctrDtlStats = () => {
    const { lctrSeq } = useParams(); // URL에서 lctrSeq 값을 추출
    const [lctrDetails, setLctrDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      console.log("현재 lctrSeq:", lctrSeq); // URL에서 가져온 강좌 번호 확인
        //fetch(`http://localhost:9193/api/LctrDtlStats/${lctrSeq}`)
        fetch(`http://localhost:9193/api/lctrStatsSrch/lctrDtlStats/${lctrSeq}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("데이터를 불러오는 데 실패했습니다.");
            }
            return response.json();
          })
          .then((data) => {
            console.log("API 응답 데이터:", data); // 응답 데이터 확인
            setLctrDetails(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("데이터 로딩 에러:", error); // 오류 로그 출력
            setError(error.message);
            setLoading(false);
          });
      }, [lctrSeq]);
    
      if (loading) return <p className="loading">로딩 중...</p>;
      if (error) return <p className="error-message">{error}</p>;
      if (!lctrDetails || lctrDetails.length === 0) return <p className="no-data">강좌 정보가 없습니다.</p>;

      // 선택한 강좌 정보 찾기
    //const selectedLctr = lctrDetails[0];
    const selectedLctr = lctrDetails.find((item) => Number(item.lctrSeq) === Number(lctrSeq));

    if (!selectedLctr) return <p className="no-data">해당 강좌 정보를 찾을 수 없습니다.</p>;



return(
<div className=".header-container">
      <h2>강좌 상세 정보</h2>
      <table className=".header-container">
        <thead>
          <tr>
            <th>강좌 SEQ</th>
            <th>강좌 제목</th>
            <th>강사 이름</th>
            <th>강좌 종류</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedLctr.lctrSeq || "정보 없음"}</td>
            <td>{selectedLctr.lctrTtl || "정보 없음"}</td>
            <td>{selectedLctr.instrNm || "정보 없음"}</td>
            <td>{selectedLctr.lctrKnd || "정보 없음"}</td>
            <td>{selectedLctr.regYmd || "정보 없음"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LctrDtlStats;