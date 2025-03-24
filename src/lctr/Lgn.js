import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"; //리다이렉트 사용

const Lgn = () => {
    const [loginCredentials, setLoginCredentials] = useState({
        emlAddr: "",
        pswd: "",
        mbrNo:''
        
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsloading] = useState(false);
    const navigate = useNavigate(); //리다이렉션 훅훅

    const changeValue = (e) => {
        setLoginCredentials({
            ...loginCredentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // 에러 메시지 초기화
        setIsloading(true); // 로딩 시작 

        try {
            const response = await fetch("http://localhost:80/api/lgn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(loginCredentials),
            });

            if (response.ok) {
                alert("정상 로그온 되었습니다. 연결");
                navigate("/mbrjoin"); // 로그인 성공 후 리다이렉션

            } else {
                const errorData = await response.text();
                setErrorMessage(errorData || "없는 전자메일 및 비밀번호입니다. 재 확인바람");
                console.error("로그인 실패:", errorData); 
            }
        } catch (error) {
            setErrorMessage("로그인 요청 중 오류가 발생했습니다.");
            console.error("로그인 오류:", error);
        } finally{
            setIsloading(false); //로딩 종료 
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                <div className="role-selection">
                    <button className="active">일반 회원</button>
                    <button>기관 회원</button>
                    <button>관리자</button>
                </div>
                </p>
                <br></br>
                <p>  이메일:
                <input
                    type="text"
                    name="emlAddr"
                    onChange={changeValue}
                /></p>
                <br></br>
                <p>비밀번호:
                <input
                    type="password"
                    name="pswd"
                    onChange={changeValue}
                /></p>
                <br></br>  <br></br>
                <div className="button-group">
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "로그인 중..." : "로그인"}  </button>
                </div>  <br></br>
                <div className="links">
                    <a href="./MbrJoin">일반회원가입</a> |
                    <a href="./InstMbrJoin">기관회원가입</a> | 
                    <a href="./findPswd">비밀번호 찾기</a> | 
                   
                </div>

             </form>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
    );
};

export default Lgn;