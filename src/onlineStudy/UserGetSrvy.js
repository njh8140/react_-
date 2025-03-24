import React, { useEffect, useState } from 'react';

const params = new URLSearchParams(window.location.search);
let lctrSeq = params.get("lctrSeq") == null ? '' : params.get("lctrSeq");
let seq = params.get("seq") == null ? '' : params.get("seq");
let instEmlAddr = params.get("instEmlAddr") == null ? '' : params.get("instEmlAddr");

const UserGetSrvy = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState(null);

    // 질문을 불러오는 함수
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`http://localhost:9192/api/UserGetSrvy?lctrSeq=${lctrSeq}&instEmlAddr=${instEmlAddr}&seq=${seq}`);
                
                if (!response.ok) {
                    throw new Error(`네트워크 오류: ${response.status}`);
                }
        
                const data = await response.json();
                console.log('받은 데이터:', data);
        
                if (Array.isArray(data)) {
                    setQuestions(data);
                    setAnswers(new Array(data.length).fill(''));
                } else {
                    throw new Error('받은 데이터가 배열이 아닙니다.');
                }
            } catch (error) {
                console.error('질문 불러오기 오류:', error);
                setError(error.message);
            }
        };

        fetchQuestions();
    }, [lctrSeq, instEmlAddr, seq]);

    // 답변 변경 처리
    const handleChange = (event) => {
        const { name, value } = event.target;
        const index = parseInt(name.split('-')[1]); // 인덱스 추출
        const newAnswers = [...answers];
        newAnswers[index] = value; // 선택한 값을 저장
        setAnswers(newAnswers);
    };

    // 답변 제출 처리
    const handleSubmit = (event) => {
        event.preventDefault(); 
    
        // 답안 유효성 검사
        const unansweredQuestions = questions.filter((_, index) => !answers[index]);
        if (unansweredQuestions.length > 0) {
            alert("모든 질문에 답변을 입력해 주세요.");
            return;
        }
    
        console.log('제출된 답변:', answers);
        alert('답변이 제출되었습니다!');
        
        // 서버에 제출할 데이터 설정 (SURVEY_NO 추가)
        const user = {
            lctrSeq: lctrSeq,
            seq: seq,
            emlAddr: sessionStorage.getItem('emlAddr'),
            submittedSrvys: questions.map((question, index) => ({
                surveyNo: question.surveyNo,  // 🔹 SURVEY_NO 추가
                userEmlAddr: sessionStorage.getItem('emlAddr'),
                chcRslt: answers[index]
            })) 
        };
    
        fetch(`http://localhost:9192/api/SubmitSrvy`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user)
        })
        .then((response) => {
            if (response.ok) {
                alert("저장되었습니다.");
                setAnswers(new Array(questions.length).fill(''));
            } else {
                alert("저장 실패: " + response.status);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("저장 중 오류 발생.");
        });
    };
    

    return (
        <div className="form-container">
            <h1>만족도 설문 조사</h1>
            {error && <p className="error">{error}</p>}
            <form id="survey-form" onSubmit={handleSubmit}>
                {questions.length > 0 ? (
                    questions.map((question, questionIndex) => (
                        <div className="question" key={question.surveyNo}>
                            <h2>{question.srvyCn}</h2>
                            {question.srvyType === '객관식' ? (
                                <ul className="options">
                                    {question.cHc && question.cHc.split(',').map((option, index) => {
                                        const optionId = `q${question.surveyNo}-option-${index}`; // 고유한 id 생성
                                        return (
                                            <li key={optionId}>
                                                <input 
                                                    type="radio" 
                                                    name={`q${question.surveyNo || 'default'}-${questionIndex}`} // 기본값 'default' 제공
                                                    id={optionId}
                                                    value={option.trim()} 
                                                    checked={answers[questionIndex] === option.trim()} 
                                                    onChange={handleChange} 
                                                />
                                                <label htmlFor={optionId}>{option.trim()}</label>
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : question.srvyType === '단답형' ? (
                                <input 
                                    type="text" 
                                    name={`q${question.surveyNo || 'default'}-${questionIndex}`} // 고유한 이름 설정
                                    id={`q${question.surveyNo}-text`} // 고유한 id 추가
                                    value={answers[questionIndex] || ''} 
                                    onChange={handleChange} 
                                    placeholder="답변을 입력하세요" 
                                />
                            ) : null}
                        </div>
                    ))
                ) : (
                    <p>질문이 없습니다.</p>
                )}
                <div className="button-container">
                    <button type="submit">등록</button>
                    <button type="button" onClick={() => window.history.back()}>취소</button>
                </div>
            </form>
        </div>
    );
};

export default UserGetSrvy;
