import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AtndRsltForm = () => {
    const navigate = useNavigate();

    const [lctrSeq, setLctrSeq] = useState({
        seq: 0
    });

    const changeValue = (e) => {
        setLctrSeq({
            ...lctrSeq,
            [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/onlineStudy/AtndRslt/${lctrSeq.seq}`);  // ✅ 올바른 값 사용
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="seq" value={lctrSeq.seq} onChange={changeValue} placeholder="강의 번호 입력" />
            <button type="submit">출석결과 확인</button>
        </form>
    );
};

export default AtndRsltForm;
