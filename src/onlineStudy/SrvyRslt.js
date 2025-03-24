import React, { useEffect, useState } from "react";

const params = new URLSearchParams(window.location.search);
let lctrSeq = params.get("lctrSeq") == null ? '' : params.get("lctrSeq");
let seq = params.get("seq") == null ? '' : params.get("seq");

const SrvyRslt = () => {
    const [surveyResults, setSurveyResults] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:9192/api/SrvyRslt?lctrSeq=${lctrSeq}&seq=${seq}`)
            .then(response => response.json())
            .then(data => {
                console.log("📊 설문 통계 API 응답 데이터:", data);

                if (data.length > 0) {
                    // 같은 srvyCn(설문 질문)끼리 그룹화 및 totalCount 가져오기
                    const groupedResults = data.reduce((acc, item) => {
                        if (!acc[item.srvyCn]) {
                            acc[item.srvyCn] = {
                                totalCount: 0,
                                responses: []
                            };
                        }
                        acc[item.srvyCn].totalCount += item.count;
                        acc[item.srvyCn].responses.push(item);
                        return acc;
                    }, {});

                    setSurveyResults(groupedResults);
                } else {
                    console.warn("⚠️ 설문 데이터가 없습니다.");
                }
            })
            .catch(error => {
                console.error("❌ Error fetching survey results:", error);
            });
    }, [lctrSeq, seq]);

    return (
        <div className="survey-container">
            <h1>📊 강의 만족도 통계</h1>
            {Object.keys(surveyResults).length === 0 ? (
                <p>⚠️ 설문 데이터가 없습니다.</p>
            ) : (
                <form>
                    {Object.entries(surveyResults)
                        .reverse() // ✅ 문항 순서 반대로 정렬
                        .map(([question, { responses, totalCount }], qIndex) => (
                            <div className="question" key={qIndex}>
                                <label>{question}</label>
                                <div className="satisfaction-options">
                                    {responses.map((result, index) => {
                                        // ✅ 올바른 퍼센트 계산 (100% 초과 방지)
                                        const correctedPercentage = ((result.count / totalCount) * 100).toFixed(2);
                                        
                                        return (
                                            <div key={index}>
                                                <input 
                                                    type="radio" 
                                                    id={`satisfaction-${qIndex}-${index}`} 
                                                    name={`satisfaction-${qIndex}`} 
                                                    value={result.chcRslt}
                                                    disabled 
                                                    checked={false} 
                                                />
                                                <label htmlFor={`satisfaction-${qIndex}-${index}`}>
                                                    {result.chcRslt}
                                                </label>
                                                <span className="result">{correctedPercentage}%</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    <div className="submit-section">
                        <button type="button" onClick={() => window.history.back()}>뒤로가기</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default SrvyRslt;
