import React, { useState } from "react";
import "../lctr/css/InstMbrMdfcn.css";

const InstMbrMdfcn = () => {
    const [instMbrMdfcn, setInstMbrMdfcn] = useState({
        instEmlAddr: "",
        pswd: "",
        user: "",
        telno: "",
        addr: "",
        instNm: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태 추가

    const handleInputChange = (e) => {
        setInstMbrMdfcn({
            ...instMbrMdfcn,
            [e.target.name]: e.target.value,
        });
    };

    const handleSearch = async () => {
        setError("");
        setSuccess("");

        try {
            const response = await fetch("http://localhost:9193/api/instMbrMdfcn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({ instEmlAddr: instMbrMdfcn.instEmlAddr }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data) {
                    setInstMbrMdfcn(data);
                    setIsEditing(true); // 수정 모드 활성화
                } else {
                    setError("일치하는 기관 회원 정보를 찾을 수 없습니다.");
                }
            } else {
                setError("기관 회원 정보 조회에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error", error);
            setError("오류가 발생하였습니다.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await fetch("http://localhost:80/api/instMbrMdfcn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(instMbrMdfcn),
            });

            if (response.ok) {
                setSuccess("기관회원 정보가 성공적으로 수정되었습니다.");
            } else {
                const errorData = await response.json();
                setError(errorData.message || "기관회원 정보 수정에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error", error);
            setError("오류가 발생하였습니다.");
        }
    };

    return (
        <div className="inst-mbr-mdfcn-container">
            <h2>기관회원정보  수정</h2>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <div>
                <label htmlFor="instEmlAddr">이메일:</label>
                <input
                    type="email"
                    id="instEmlAddr"
                    name="instEmlAddr"
                    value={instMbrMdfcn.instEmlAddr}
                    onChange={handleInputChange}
                    placeholder="기관회원 이메일"
                />
                <button type="button" onClick={handleSearch}>조회</button>
            </div>
            {isEditing && (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="pswd">비밀번호:</label>
                        <input
                            type="password"
                            id="pswd"
                            name="pswd"
                            value={instMbrMdfcn.pswd}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user">이름:</label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            value={instMbrMdfcn.user}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telno">연락처:</label>
                        <input
                            type="tel"
                            id="telno"
                            name="telno"
                            value={instMbrMdfcn.telno}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addr">주소:</label>
                        <input
                            type="text"
                            id="addr"
                            name="addr"
                            value={instMbrMdfcn.addr}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="instNm">소속 기관명:</label>
                        <input
                            type="text"
                            id="instNm"
                            name="instNm"
                            value={instMbrMdfcn.instNm}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">수정</button>
                    <a href="/회원탈퇴" className="withdraw-link">회원탈퇴</a>
                </form>
            )}
        </div>
    );
};

export default InstMbrMdfcn;