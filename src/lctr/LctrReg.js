import React, { useState, useEffect } from "react";
//import "./css/LctrReg.css";

const LctrReg = () => {
const[lctrRprs, setLctrRprs] = useState({
    //lctrSeq:'',
    lctrObjt:'',
    lctrTtl:'',
    instrNm:'',
    lctrCn:'',
    lctrKnd:'',
    //regYmd:'',
    mbrKnd:'',
    regId:''
});

const [error, setError] = useState("");
const [success, setSuccess] = useState("");

// sessionStorage에서 이메일 값 가져와서 설정
useEffect(() => {
  const storedEmail = sessionStorage.getItem("emlAddr") || "";
  setLctrRprs((prev) => ({ ...prev, regId: storedEmail }));
}, []);


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
    try{
    const response = await fetch('http://localhost:9193/api/lctrReg',{
        method:"POST",
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        },
        body: JSON.stringify(lctrRprs)
    });

    if (response.ok) {
        setSuccess("강좌 등록 성공!");
        setLctrRprs({
          //lctrSeq: "",
          lctrObjt: "",
          lctrTtl: "",
          instrNm: "",
          lctrCn: "",
          lctrKnd: "",
          //regYmd: "",
          mbrKnd: "",
          regId: sessionStorage.getItem("emlAddr") || "", // 초기 이메일 유지
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "강좌 등록 실패. 다시 시도해주세요.");
      }
    } catch (error) {
      setError("서버 오류 발생");
    }
  };


return(
    <div className="container">
    <h2 className="header">강좌 등록</h2>
    {error && <p className="error-message">{error}</p>}
    {success && <p className="success-message">{success}</p>}
    <form onSubmit={handleSubmit}>
    {/*
    <div className="input-group">
      <label className="input-label">강좌 SEQ</label>
      <input className="input-box" type="text" name="lctrSeq" value={lctrRprs.lctrSeq} onChange={changeValue} placeholder="강좌 SEQ 입력" />
    </div>
    */}
    <div className="input-group"> 
      <label className="input-label">강좌 회차</label>
      <input className="input-box" type="text" name="lctrObjt" value={lctrRprs.lctrObjt} onChange={changeValue} placeholder="강좌 회차 입력" />
    </div>
    <div className="input-group">  
      <label className="input-label">강좌 제목</label>
      <input className="input-box" type="text" name="lctrTtl" value={lctrRprs.lctrTtl} onChange={changeValue} placeholder="강좌 제목 입력" />
    </div>
    <div className="input-group"> 
      <label className="input-label">강사 이름</label>
      <input className="input-box" type="text" name="instrNm" value={lctrRprs.instrNm} onChange={changeValue} placeholder="강사 이름 입력" />
    </div>
    <div className="input-group">  
      <label className="input-label">강좌 내용</label>
      <textarea className="input-box" name="lctrCn" value={lctrRprs.lctrCn} onChange={changeValue} placeholder="강좌 내용을 입력하세요"></textarea>
    </div>
    <div className="input-group"> 
      <label className="input-label">강좌 분류</label>
      <input className="input-box" type="text" name="lctrKnd" value={lctrRprs.lctrKnd} onChange={changeValue} placeholder="강좌 분류 입력" />
    </div>
    {/*
    <div className="input-group">  
      <label className="input-label">등록일</label>
      <input className="input-box" type="date" name="regYmd" value={lctrRprs.regYmd} onChange={changeValue} />
    </div>
    */}
    <div className="input-group"> 
      <label className="input-label">회원 종류</label>
      <select className="input-box" name="mbrKnd" value={lctrRprs.mbrKnd} onChange={changeValue}>
        <option value="">선택</option>
        <option value="1">일반 회원</option>
        <option value="2">기관 회원</option>
      </select>
    </div> 
    <div className="input-group"> 
      <label className="input-label">등록이메일</label>
      <input className="input-box" type="text" name="regId" value={lctrRprs.regId} onChange={changeValue} placeholder="등록 이메일 입력" />
    </div>
    <div className="button-group"> 
      <button type="submit" className="button">강좌 등록</button>
    </div>
    </form>
  </div>
);
};

export default LctrReg;