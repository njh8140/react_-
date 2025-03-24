import React, { useState } from "react";
import "./css/MbrMdfcn.css";

const MbrMdfcn = () => {
    // 초기 회원 정보 상태 설정
    const [MbrMdfcn, setMbrMdfcn] = useState({
        emlAddr: '',
        pswd: '',
        user: '',
        telno: '',
        mbrNo: '',
        addr: ''
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태 추가

    // 입력 필드 변경 핸들러
    const handleInputChange = (e) => {
        setMbrMdfcn({
            ...MbrMdfcn,
            [e.target.name]: e.target.value,
        });

    };
    //조회 검색 핸들러 

  const handleSearch = async () => {
        setError("");
        setSuccess("");

        try {
            const response = await fetch("http://localhost:9193/api/MbrMdfcn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({ emlAddr: MbrMdfcn.emlAddr }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data) {
                    setMbrMdfcn(data);
                    setIsEditing(true); // 수정 모드 활성화
                } else {
                    setError("일치하는 일반회원 정보를 찾을 수 없습니다.");
                }
            } else {
                setError("일반회원 정보 조회에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error", error);
            setError("오류가 발생하였습니다.");
        }
    };
    // 수정 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await fetch("http://localhost:9193/api/MbrMdfcn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(MbrMdfcn),
            });

            if (response.ok) {
                setSuccess("일반회원정보가 성공적으로 수정되었습니다.");
            } else {
                const errorData = await response.json();
                setError(errorData.message || "일반반회원 정보 수정에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error", error);
            setError("오류가 발생하였습니다.");
        }
    };


    return (
            <div className="mbr-mdfcn-container">
                <h2>일반회원정보 수정</h2>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                <div className="input-group">
                    <label htmlFor="emlAddr">이메일:</label>
                    <input
                        type="email"
                        id="emlAddr"
                        name="emlAddr"
                        value={MbrMdfcn.emlAddr}
                        onChange={handleInputChange}
                        placeholder="일반회원 이메일"
                    />
                    <button type="button" onClick={handleSearch}>대상선텍</button>
                </div>
                {isEditing && (
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="pswd">비밀번호:</label>
                            <input
                                type="password"
                                id="pswd"
                                name="pswd"
                                value={MbrMdfcn.pswd}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="user">이름:</label>
                            <input
                                type="text"
                                id="user"
                                name="user"
                                value={MbrMdfcn.user}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="telno">연락처:</label>
                            <input
                                type="tel"
                                id="telno"
                                name="telno"
                                value={MbrMdfcn.telno}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="mbrno">회원구분:</label>
                            <input
                                type="text"
                                id="mbrNo"
                                name="mbrNo"
                                value={MbrMdfcn.mbrNo}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="addr">주소:</label>
                            <input
                                type="text"
                                id="addr"
                                name="addr"
                                value={MbrMdfcn.addr}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="button-group">
                            <button type="submit">수정</button>
                            <a href="/회원탈퇴" className="withdraw-link">회원탈퇴</a>
                        </div>
                    </form>
                )}
            </div>
        );
};

export default MbrMdfcn;