import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // React Router Link 추가

//import "./css/LctrStatsSrch.css";
const LctrStatsSrch = () => {
const[lctrRprs, setLctrRprs] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
    fetch("http://localhost:9193/api/lctrStatsSrch")
      .then((response) => {
        if (!response.ok) {
          throw new Error("강좌 목록을 불러오는 데 실패했습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setLctrRprs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

return(
<div className="container">
      <h2 className=".header-container">강좌 목록</h2>
      {/* 새 강좌 등록 버튼 */}
      {sessionStorage.getItem('mbrNo') > 1 &&
      <Link to="/lctr/lctrReg">
          <button className="button button-add">강좌등록</button>
      </Link>
      }
      {loading && <p className="loading-message">강좌 목록을 불러오는 중...</p>}
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
              {sessionStorage.getItem('mbrNo') > 1 && (
              <>
              <th>수정</th>
              <th>강의등록</th>
              <th>시험등록</th>
              <th>만족도 등록</th>
              <th>만족도 수정</th>
              </>
             )}
             {sessionStorage.getItem('mbrNo') === "1" && (
               <>
                 <th>시험</th>
                 <th>만족도 참여</th>
               </>
             )} 
            </tr>
          </thead>
          <tbody>
            {lctrRprs.length > 0 ? (
              lctrRprs.map((lctr, index) => (
                <tr key={`${lctr.lctrSeq}-${index}`}>
                  {/* <td>{lctr.lctrSeq}</td> */}
                  <td>
                    {/* 강좌 제목을 클릭하면 상세보기 페이지로 이동 */}
                    <Link to={`/lctrStatsSrch/lctrDtlStats/${lctr.lctrSeq}`}>
                      {lctr.lctrTtl}
                    </Link>
                  </td>
                  <td>{lctr.instrNm}</td>
                  <td>{lctr.lctrKnd}</td>
                  <td>{lctr.regYmd}</td>
                  
                 
                  {/* 수정 버튼 */}
                  {sessionStorage.getItem('mbrNo') > 1 && (
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                      <Link to={`/lctrStatsSrch/lctrMdfcn/${lctr.lctrSeq}`}>
                        <button className="button button-register">수정</button>
                      </Link>
                    </td>
                  )}

                  {/* 강의 등록 버튼 */}
                  {sessionStorage.getItem('mbrNo') > 1 && (
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                      <Link to={`/lctrStatsSrch/lctrSeqReg/${lctr.lctrSeq}`}>
                        <button className="button button-register">새 강의 등록</button>
                      </Link>
                    </td>
                  )}

                  {/* ✅ 시험 등록 버튼 추가 */}
                  {sessionStorage.getItem('mbrNo') > 1 && (
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                      <Link to={`/onlineStudy/InstTestReg/${lctr.lctrSeq}/1/${lctr.regId}`}>
                        <button className="button button-register">시험 등록</button>
                      </Link>
                    </td>
                  )}

                  {/* ✅ 시험 보기 버튼 추가 */}
                  {sessionStorage.getItem('mbrNo') === "1" && (
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                      <Link to={`/onlineStudy/UserTest/${lctr.lctrSeq}/1/${lctr.regId}/${sessionStorage.getItem('emlAddr')}`}>
                        <button className="button button-register">시험 보기</button>
                      </Link>
                    </td>
                  )}

                  {/* ✅ 만족도 등록 버튼 추가 */}
                  {sessionStorage.getItem('mbrNo') > 1 && (
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                      <Link to={`/onlineStudy/SrvyReg/${lctr.lctrSeq}/1/${sessionStorage.getItem('emlAddr')}`}>
                        <button className="button button-register">만족도 등록</button>
                      </Link>
                    </td>
                  )}

                  {/* ✅ 만족도 수정 버튼 추가 */}
                  {sessionStorage.getItem('mbrNo') > 1 && (
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                      <Link to={`/onlineStudy/SrvyUpdate/${lctr.lctrSeq}/1/${sessionStorage.getItem('emlAddr')}`}>
                        <button className="button button-register">만족도 수정</button>
                      </Link>
                    </td>
                  )}

                  {/* ✅ 만족도 보기 버튼 추가 */}
                  {sessionStorage.getItem('mbrNo')  === "1" && (
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                      <Link to={`/onlineStudy/UserGetSrvy/${lctr.lctrSeq}/1/${lctr.regId}`}>
                        <button className="button button-register">만족도 참여</button>
                      </Link>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td className="no-data" colSpan={sessionStorage.getItem('mbrNo') > 1 ? 8 : 4}>
                  강좌가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LctrStatsSrch;
