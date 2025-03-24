import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // URL 파라미터 가져오기

const LctrSeqReg = () => { 
  const { lctrSeq } = useParams(); // URL에서 lctrSeq 값을 가져옵니다.
  const navigate = useNavigate(); // navigate 객체를 사용하여 페이지 이동
  const[lctrSeqData, setLctrSeqData] = useState({
      lctrSeq:'',
      emlAddr:'',
      lctrObjt:'',
      prgrsRt:'',
      vdoUrlAddr:''
  });

  // 강좌 수정 시, 기존 데이터를 불러오기
  useEffect(() => {
    if (lctrSeq) {
      fetch(`http://localhost:80/api/lctrStatsSrch/lctrSeqReg/${lctrSeq}`)  // GET 요청으로 강좌 정보 불러오기
        .then((response) => response.json())
        .then((data) => {
          setLctrSeqData(data || { // 만약 data가 null이면 기본값 설정
          lctrSeq: '',
          emlAddr: '',
          lctrObjt: '',
          prgrsRt: '',
          vdoUrlAddr: ''
        });
      })
        .catch((error) => {
          console.error("강좌 정보 불러오기 오류:", error);
        });
    }
  }, [lctrSeq]);

  const [lctrList, setLctrList] = useState([]);  // 강좌 목록

  // 강좌 목록을 가져오는 함수
  useEffect(() => {
    fetch('http://localhost:80/api/lctrStatsSrch') // 강좌 목록(강의 수정하기에서)을 가져오는 API
      .then((response) => response.json())
      .then((data) => setLctrList(data)) // 받은 데이터로 강좌 목록 설정
      .catch((error) => console.error("강좌 목록을 가져오는 중 오류 발생:", error));
  }, []);

  const changeValue=(e)=>{
    setLctrSeqData({
        ...lctrSeqData,
        [e.target.name]:e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // 필수 항목 체크
    if (!lctrSeqData.emlAddr || !lctrSeqData.lctrObjt) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }

    // POST 요청으로 데이터 전송 ${lctrSeq}
    fetch(lctrSeq ? `http://localhost:80/api/lctrSeqReg` : `http://localhost:80/api/lctrSeqReg`, {
      method: lctrSeq ? "PUT" : "POST", // 수정이면 PUT, 등록이면 POST
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(lctrSeqData), // 요청 본문에 데이터 포함
    })
      .then((response) => {
        if (response.status === 200) {
          alert("강의 등록/수정 성공");
          navigate('/lctrStatsSrch'); // 강좌 목록 페이지로 이동
        } else {
          response.json().then((data) => alert(data.message || "강의 등록/수정 실패"));
        }
      })
      .catch((error) => {
        alert("서버 오류가 발생했습니다.");
        console.error(error);
      });
  };

return(
<div className="header-container">
<h1>{lctrSeq ? "강의 등록" : "강의 등록"}</h1>
<form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>이메일</label>
          <input
            type="text"
            name="emlAddr"
            placeholder="이메일"
            value={lctrSeqData.emlAddr || ""}
            onChange={changeValue}
            className="input-field"
          />
        </div>
        
        <div className="form-group">
          <label>강의회차</label>
          <input
            type="text"
            name="lctrObjt"
            placeholder="강의회차"
            value={lctrSeqData.lctrObjt || ""}
            onChange={changeValue}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>진도율</label>
          <input
            type="text"
            name="prgrsRt"
            placeholder="진도율"
            value={lctrSeqData.prgrsRt || ""}
            onChange={changeValue}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>영상 URL</label>
          <input
            type="text"
            name="vdoUrlAddr"
            placeholder="영상 URL"
            value={lctrSeqData.vdoUrlAddr || ""}
            onChange={changeValue}
            className="input-field"
          />
        </div>
        

        <button type="submit" className="button button-register">
          저장
        </button>
      </form>
    </div>
  );
};
export default LctrSeqReg;