import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserAtndRslt = () => { 
    const { seq, emlAddr, instEmlAddr } = useParams(); // 경로 매개변수 가져오기
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9192/api/userAtndRsltList`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({seq, emlAddr,instEmlAddr})
        })
            .then((res) => res.json())  
            .then((data) => {
                console.log("data: "+data);
                console.log("data: " + JSON.stringify(data, null, 2));
                setAttendanceData(data);

            })
            .catch((error) => console.error("데이터 조회 오류:", error)); // 에러 처리 추가
    }, [seq, emlAddr]);

    return (
        <div className="container">
            <h1>출결 조회</h1>
            {/* response 데이터가 렌더링된 후에 jsx를 return하도록 만들었다. */}
            {attendanceData.length > 0 ? (
                <>
                    <div className="course-title">학생이름: {attendanceData[0].user}</div>
                    <div className="course-title">강의이름: {attendanceData[0].lctrTtl}</div>
                    <table>
                        <thead>
                            <tr>
                                <th>회차 번호</th>
                                <th>출결 시간</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceData.map((userAtndList) => (
                                <tr key={userAtndList.atndNo}>
                                    <td>{userAtndList.lctrObjt}</td>
                                    <td>{userAtndList.atndYmd || "미시청"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </>
            ) : (
                <div>출결 데이터가 없습니다.</div>
            )}
        </div>
    );
};
export default UserAtndRslt;