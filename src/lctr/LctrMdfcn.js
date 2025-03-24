import React, { useState, /*useEffect*/ } from "react";
import { useParams } from "react-router-dom"; // URL에서 seq 값을 가져오기 위해 필요

const LctrMdfcn = () => {
const { lctrSeq } = useParams(); // 경로 매개변수를 가져오기 // URL에서 lctrSeq 값을 가져옴
const[lctrRprs, setLctrRprs] = useState({
    lctrSeq:lctrSeq,
    lctrObjt:'',
    lctrTtl:'',
    instrNm:'',
    lctrCn:'',
    lctrKnd:'',
    regYmd:'',
    //mdfcnYmd:'',
    mbrKnd:''
});

const [error, setError] = useState("");
const [success, setSuccess] = useState("");

//  useEffect: lctrSeq 값이 있으면 API에서 데이터 가져오기
// useEffect(() => {
//   if (lctrSeq) {
//     fetch(`http://localhost:9193/api/lctrStatsSrch/lctrMdfcn`)
//       .then((res) => res.json())
//       .then((data) => {
//         setLctrRprs(data); // 불러온 강좌 데이터를 설정
//       })
//       .catch(() => {
//         setError("강좌 정보를 불러오는데 실패했습니다.");
//       });
//   }
// }, [lctrSeq]);



// const changeValue=(e)=>{
//   const { name, value } = e.target;
//   // lctrSeq, regYmd는 변경하지 않도록 예외 처리
//   if (name === "lctrSeq" || name === "regYmd") return;
//     setLctrRprs({
//         ...lctrRprs,
//         [name]: value
//     });
// };

const changeValue=(e)=>{
  setLctrRprs({
      ...lctrRprs,
      [e.target.name]:e.target.value
  });
};


const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
        const response = await fetch("http://localhost:9193/api/lctrStatsSrch/lctrMdfcn", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(lctrRprs),
        });
  
        if (response.ok) {
          setSuccess("강좌 수정 성공!");
        } else {
          setError("강좌 수정 실패. 다시 시도해주세요.");
        }
      } catch (error) {
        setError("서버 오류 발생");
      }
    };

// 강좌 삭제 처리 함수
const handleDelete = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  try {
    const response = await fetch(`http://localhost:9193/api/lctrStatsSrch/lctrMdfcn/${lctrRprs.lctrSeq}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    });

    if (response.ok) {
      setSuccess("강좌 삭제 성공!");
      // 삭제 후 필드 초기화
      setLctrRprs({
        lctrSeq: lctrSeq,
        lctrObjt: '',
        lctrTtl: '',
        instrNm: '',
        lctrCn: '',
        lctrKnd: '',
        regYmd: '',
        //mdfcnYmd: '',
        mbrKnd: ''
      });
    } else {
      setError("강좌 삭제 실패. 다시 시도해주세요.");
    }
  } catch (error) {
    setError("서버 오류 발생");
  }
};




return(
<div className="container">
      <h2 className="header">강좌 수정</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">강좌 SEQ</label>
          <input
            className="input-box"
            type="text"
            name="lctrSeq"
            value={lctrRprs.lctrSeq}
            onChange={changeValue}
            // placeholder="강좌 SEQ"
          />
        </div> 
        <div className="input-group">
          <label className="input-label">강좌 회차</label>
          <input
            className="input-box"
            type="text"
            name="lctrObjt"
            value={lctrRprs.lctrObjt}
            onChange={changeValue}
            placeholder="강좌 회차"
          />
        </div>
        <div className="input-group">
          <label className="input-label">강좌 제목</label>
          <input
            className="input-box"
            type="text"
            name="lctrTtl"
            value={lctrRprs.lctrTtl}
            onChange={changeValue}
            placeholder="강좌 제목 입력"
          />
        </div>

        <div className="input-group">
          <label className="input-label">강사 이름</label>
          <input
            className="input-box"
            type="text"
            name="instrNm"
            value={lctrRprs.instrNm}
            onChange={changeValue}
            placeholder="강사 이름 입력"
          />
        </div>

        <div className="input-group">
          <label className="input-label">강좌 내용</label>
          <textarea
            className="input-box"
            name="lctrCn"
            value={lctrRprs.lctrCn}
            onChange={changeValue}
            placeholder="강좌 내용을 입력하세요"
          ></textarea>
        </div>

        <div className="input-group">
          <label className="input-label">강좌 분류</label>
          <input
            className="input-box"
            type="text"
            name="lctrKnd"
            value={lctrRprs.lctrKnd}
            onChange={changeValue}
            placeholder="강좌 분류 입력"
          />
        </div>
        <div className="input-group">
          <label className="input-label">강좌 등록일</label>
          <input
            className="input-box"
            type="date"
            name="regYmd"
            value={lctrRprs.regYmd}
            //disabled // 수정 불가능하도록 설정
            onChange={changeValue}  
          />
        </div>
        
        <div className="input-group">
          <label className="input-label">회원 종류</label>
          <select
            className="input-box"
            name="mbrKnd"
            value={lctrRprs.mbrKnd}
            onChange={changeValue}
          >
            <option value="">선택</option>
            <option value="1">일반 회원</option>
            <option value="2">기관 회원</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit" className="button">
            강좌 수정
          </button>
          <button
            type="button"
            className="button delete-button"
            onClick={handleDelete}
          >
            강좌 삭제
          </button>
        </div>
      </form>
    </div>
  );
};

export default LctrMdfcn;