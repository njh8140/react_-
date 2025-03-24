import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AtndRslt = () => {
    const { seq } = useParams(); // 경로 매개변수를 가져오기
    const [attendanceData, setAttendanceData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const [itemsPerPage, setItemsPerPage] = useState(1);
    useEffect(() => {
        fetch(`http://localhost:9192/api/atndRsltList`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ seq })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("data: " + JSON.stringify(data, null, 2));
                setAttendanceData(data);
            })
            .catch((error) => { console.error("데이터 조회 오류: ", error) });
    }, [seq]);

    const groupedData = attendanceData.reduce((accumulatedData, currentData) => {
        const key = currentData.emlAddr;
        if (!accumulatedData[key]) {
            accumulatedData[key] = {
                emlAddr: currentData.emlAddr,
                user: currentData.user,
                records: []
            };
        }
        accumulatedData[key].records.push({
            lctrObjt: currentData.lctrObjt,
            atndYmd: currentData.atndYmd
        });
        return accumulatedData;
    }, {});
    

    const groupedArray = Object.values(groupedData);

    //출력할 학생 수 핸들러
    const handleSelectedOption = (e) => {
        setItemsPerPage(Number(e.target.value));
        //옵션 선택하면 자동으로 첫 번째 페이지로 이동.
        setCurrentPage(1);
    };
    //  페이징 처리
    const totalItems = groupedArray.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const pagedData = groupedArray.slice(startIdx, endIdx);

    //  페이지 전환 핸들러
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="container">
            {pagedData.length > 0 ? (
                <>
                    <div className="header">
                        <h1>학생 출결 확인</h1>
                        <h2 className="course-title">강의제목: {attendanceData[0].lctrTtl}</h2>
                        <span className="institution-name">기관명: {attendanceData[0].instNm}</span>
                    </div>
                    {/* 페이지당 표시할 학생 수 정하기 */}
                    <span className="totalUsers">전체 수강생 수: {totalItems}</span>
                    <div>
                        <label htmlFor="itemsPerPage" >표시할 학생 수</label>
                        <select id="itemsPerPage" name="{itemsPerPage}" onChange={handleSelectedOption}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={100}>100</option>
                        </select>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>학생 이메일</th>
                                <th>학생 이름</th>
                                <th>회차 번호</th>
                                <th>출결 날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pagedData.map((student, index) => {
                                return student.records.map((record, recordIndex) => {
                                    const isFirstRecord = recordIndex === 0;
                                    const rowspan = student.records.length;
                                    return (
                                        <tr key={`${index}-${recordIndex}`}>
                                            {isFirstRecord && (
                                                <>
                                                    <td rowSpan={rowspan}>{student.emlAddr}</td>
                                                    <td rowSpan={rowspan}>{student.user}</td>
                                                </>
                                            )}
                                            <td>{record.lctrObjt}</td>
                                            <td>{record.atndYmd || '미시청'}</td>
                                        </tr>
                                    );
                                });
                            })}
                        </tbody>
                    </table>

                    {/* 페이지 네비게이션 */}
                    <div className="pagination">
                    <button onClick={()=>{handlePageChange(currentPage-1)}} disabled={currentPage===1}>이전</button>
                        {Array.from({ length: totalPages }, (_,idx) => (
                            
                            
                            <button
                                key={idx + 1}
                                onClick={() => handlePageChange(idx + 1)}
                                className={currentPage == idx + 1 ? 'active' : ''}
                            >
                                {idx + 1}
                            </button>
                            
                            
                        ))}
                        <button onClick={()=>{handlePageChange(currentPage+1)}} disabled={currentPage==totalPages}>다음</button>
                    </div>
                </>
            ) : (
                <div>출결 데이터가 없습니다.</div>
            )}
        </div>
    );
};

export default AtndRslt;
