import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserAtndRsltForm = () => {
    const navigate = useNavigate();

    const [lctrSeq, setLctrSeq] = useState({
        seq: 0,       // 숫자로 저장할 경우, 초기값은 ""이 아닌 0으로 설정 가능
        emlAddr: "",
        instEmlAddr:""
    });

    const changeValue = (e) => {
        setLctrSeq({
            ...lctrSeq,
            [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/onlineStudy/UserAtndRslt/${lctrSeq.seq}/${lctrSeq.emlAddr}/${lctrSeq.instEmlAddr}`);  // ✅ 올바른 값 사용
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="seq" value={lctrSeq.seq} onChange={changeValue} placeholder="강의 번호 입력" />
            <input type="email" name="emlAddr" value={lctrSeq.emlAddr} onChange={changeValue} placeholder="이메일 입력" />
            <input type="email" name="instEmlAddr" value={lctrSeq.instEmlAddr} onChange={changeValue} placeholder="기관 이메일 입력" />
            <button type="submit">출석결과 확인</button>
        </form>
    );
};

export default UserAtndRsltForm;