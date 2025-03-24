import React, { useState } from "react";

const InstLctrSeqReg = () => {
const[instLctrSeqRprs, setInstLctrSeqRprs] = useState({
    lctrSeq:'',
    instEmlAddr:'',
    seq:'',
    lctrObjt:'',
    vdoUrlAddr:'',
    testUrlAddr:'',  
    testCransUrlAddr:'',  
    scr:'' 
});

const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const changeValue=(e)=>{
    setInstLctrSeqRprs({
        ...instLctrSeqRprs,
        [e.target.name]:e.target.value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try{
    const response = await fetch('http://localhost:9193/api/InstLctrSeqReg',{
        method:"POST",
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        },
        body: JSON.stringify(instLctrSeqRprs)
    });

    if (response.ok) {
        setSuccess("강좌 등록 성공!");
        setInstLctrSeqRprs({
        lctrSeq:"",
        instEmlAddr:"",
        seq:"",
        lctrObjt:"",
        vdoUrlAddr:"",
        testUrlAddr:"",  
        testCransUrlAddr:"",  
        scr:"" 
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
    <h2 className="header">기관 강좌 등록</h2>
    {error && <p className="error-message">{error}</p>}
    {success && <p className="success-message">{success}</p>}
    <form onSubmit={handleSubmit}>
    <div className="input-group">
      <label className="input-label">강좌 SEQ</label>
      <input className="input-box" type="text" name="lctrSeq" value={instLctrSeqRprs.lctrSeq} onChange={changeValue} placeholder="강좌 SEQ 입력" />
    </div>
    <div className="input-group"> 
      <label className="input-label">기관 이메일</label>
      <input className="input-box" type="text" name="instEmlAddr" value={instLctrSeqRprs.instEmlAddr} onChange={changeValue} placeholder="기관 이메일 입력" />
    </div>
    <div className="input-group">  
      <label className="input-label">seq</label>
      <input className="input-box" type="text" name="seq" value={instLctrSeqRprs.seq} onChange={changeValue} placeholder="seq 입력" />
    </div>
    <div className="input-group"> 
      <label className="input-label">강좌 회차</label>
      <input className="input-box" type="text" name="lctrObjt" value={instLctrSeqRprs.lctrObjt} onChange={changeValue} placeholder="강좌 회차 입력" />
    </div>
    <div className="input-group">  
      <label className="input-label">비디오링크</label>
      <textarea className="input-box" type="text" name="vdoUrlAddr" value={instLctrSeqRprs.vdoUrlAddr} onChange={changeValue} placeholder="비디오링크 입력"></textarea>
    </div>
    <div className="input-group"> 
      <label className="input-label">시험링크</label>
      <input className="input-box" type="text" name="testUrlAddr" value={instLctrSeqRprs.testUrlAddr} onChange={changeValue} placeholder="시험링크 입력" />
    </div>
    <div className="input-group">  
      <label className="input-label">시험정답링크</label>
      <input className="input-box" type="text" name="testCransUrlAddr" value={instLctrSeqRprs.testCransUrlAddr} onChange={changeValue} placeholder="시험정답링크 입력" />
    </div>
    <div className="input-group"> 
      <label className="input-label">점수</label>
      <input className="input-box" type="text" name="scr" value={instLctrSeqRprs.scr} onChange={changeValue} placeholder="점수 입력" />
    </div> 
    <div className="button-group"> 
      <button type="submit" className="button">기관 강좌 등록</button>
    </div>
    </form>
  </div>
);
};

export default InstLctrSeqReg;