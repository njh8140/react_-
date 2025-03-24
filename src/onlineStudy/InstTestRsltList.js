import React, { useEffect, useState } from 'react';

const InstTestRsltList = ({ lctrSeq, seq, instEmlAddr }) => {
    const [scores, setScores] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await fetch(`http://localhost:9192/api/InstTestRsltList?lctrSeq=${lctrSeq}&seq=${seq}&instEmlAddr=${instEmlAddr}`);
                
                if (!response.ok) {
                    throw new Error(`네트워크 오류: ${response.status}`);
                }

                const data = await response.json();
                setScores(data);
            } catch (error) {
                console.error('시험 점수 가져오기 오류:', error);
                setError(error.message);
            }
        };

        fetchScores();
    }, [lctrSeq, seq, instEmlAddr]);

    return (
        <div className="course-list">
            <h1>학생 시험 점수 목록</h1>
            {error && <p className="error">{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>학생 이메일</th>
                        <th>학생 이름</th>
                        <th>시험 점수</th>
                        <th>시험 날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.length > 0 ? (
                        scores.map((student, index) => (
                            <tr key={index}>
                                <td className="student-name">{student.emlAddr}</td>
                                <td>{student.user}</td>
                                <td>{student.score}</td>
                                <td>{student.ansdocSbmsnYmd}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">점수가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default InstTestRsltList;
