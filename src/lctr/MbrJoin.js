import React, { useState } from "react";
import "./css/MbrJoin.css";

const MbrJoin = () => {
    const [Mbr, setMbr] = useState({
        emlAddr: '',
        user: '',
        pswd: '',
        telno: '',
        brthYmd: '',
        mbrNo: '',
        addr: '',
        joinYmd: ''
    });

    const changeValue = (e) => {
        setMbr({
            ...Mbr,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:9193/api/MbrJoin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(Mbr)
        })
            .then((response) => {
                if (response.status === 200) {
                    alert("일반회원가입성공");
                } else {
                    alert("일반회원 가입실패");
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="signup-container">
            <h1>일반 회원 가입</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <p>
                    <label>이메일:</label>
                    <input
                        type="text"
                        name="emlAddr"
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
                    <label>회원등급 번호:</label>
                    <input
                        type="text"
                        name="mbrNo"
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
                <button type="submit">저장</button>
            </form>
        </div>
    );
};

export default MbrJoin;