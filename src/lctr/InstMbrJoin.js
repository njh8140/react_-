import React, { useState } from "react";
import "./css/InstMbrJoin.css";

const InstMbrJoin = () => {
    const [instMbr, setInstMbr] = useState({
        instEmlAddr: '',
        user: '',
        pswd: '',
        telno: '',
        brthYmd: '',
        mbrNo: '',
        instNm: '',
        ctrtrTelno: '',
        addr: '',
        joinYmd: ''
    });

    const changeValue = (e) => {
        setInstMbr({
            ...instMbr,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:9193/api/InstMbrJoin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(instMbr)
        })
            .then((response) => {
                if (response.status === 200) {
                    alert("기관회원가입성공");
                } else {
                    alert("가입 실패");
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="signup-container">
            <h1>기관 회원 가입</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <p>
                    <label>기관이메일:</label>
                    <input
                        type="text"
                        name="instEmlAddr"
                        onChange={(e) => changeValue(e)}
                    />
                </p>
                <p>
                    <label>이름:</label>
                    <input
                        type="text"
                        name="user"
                        onChange={(e) => changeValue(e)}
                    />
                </p>
                <p>
                    <label>비밀번호:</label>
                    <input
                        type="password"
                        name="pswd"
                        onChange={(e) => changeValue(e)}
                    />
                </p>
                <p>
                    <label>연락처:</label>
                    <input
                        type="text"
                        name="telno"
                        onChange={(e) => changeValue(e)}
                    />
                </p>
                <p>
                    <label>생년월일:</label>
                    <input
                        type="text"
                        name="brthYmd"
                        onChange={(e) => changeValue(e)}
                        placeholder="ex) 2025-01-01"
                    />
                </p>
                <p>
                    <label>회원 구분번호:</label>
                    <input
                        type="text"
                        name="mbrNo"
                        onChange={(e) => changeValue(e)}
                        value="2"
                    />
                </p>
                <p>
                    <label>기관 명칭:</label>
                    <input
                        type="text"
                        name="instNm"
                        onChange={(e) => changeValue(e)}
                    />
                </p>
                <p>
                    <label>관리담당자연락처:</label>
                    <input
                        type="text"
                        name="ctrtrTelno"
                        onChange={(e) => changeValue(e)}
                    />
                </p>
                <p>
                    <label>주소:</label>
                    <input
                        type="text"
                        name="addr"
                        onChange={(e) => changeValue(e)}
                    />
                </p>
                <p>
                    <label>가입일:</label>
                    <input
                        type="text"
                        name="joinYmd"
                        onChange={(e) => changeValue(e)}
                        placeholder="ex) 2025-01-01"
                    />
                </p>
                <button type="submit">저장</button>
            </form>
        </div>
    );
};

export default InstMbrJoin;