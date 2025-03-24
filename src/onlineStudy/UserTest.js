import React, { useEffect, useState } from 'react';

const UserTest = ({ lctrSeq, seq, instEmlAddr, emlAddr }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`http://localhost:9192/api/UserTest?lctrSeq=${lctrSeq}&instEmlAddr=${instEmlAddr}&seq=${seq}`);
                
                if (!response.ok) {
                    throw new Error(`네트워크 오류: ${response.status}`);
                }
        
                const data = await response.json();
                console.log('받은 데이터:', data);
        
                if (Array.isArray(data)) {
                    setQuestions(data);
                } else {
                    throw new Error('받은 데이터가 배열이 아닙니다.');
                }
            } catch (error) {
                console.error('질문 불러오기 오류:', error);
                setError(error.message);
            }
        };

        fetchQuestions();
    }, [lctrSeq, seq, instEmlAddr]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        const index = parseInt(name.split('-')[1]);
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

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
        
        // 서버에 제출할 데이터 설정
        const user = {
            lctrSeq: lctrSeq,
            seq: seq,
            instEmlAddr: instEmlAddr,
            emlAddr: emlAddr,
            submittedAnswers: answers
        };
    
        fetch(`http://localhost:9192/api/SubmitTest`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user)
        })
        .then((response) => {
            if (response.ok) {
                alert("저장되었습니다.");
            } else {
                alert("저장 실패: " + response.status);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("저장 중 오류 발생.");
        });
        
        setAnswers([]);
    };

    return (
        <div className="container">
            <h1>시험 문제</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                {questions.length > 0 ? (
                    questions.map((question, questionIndex) => (
                        <div className="question" key={question.lctrSeq}>
                            <h2>{question.qitemCn}</h2>
                            {question.qitemType === '객관식' ? (
                                <ul className="options">
                                    {question.chc && question.chc.split(',').map((option, index) => {
                                        const optionId = `q${question.lctrSeq}-option-${questionIndex}-${index}`; // 고유한 id 생성
                                        return (
                                            <li key={optionId}>
                                                <input 
                                                    type="radio" 
                                                    name={`q${question.lctrSeq}-${questionIndex}`} // 이름을 배열 형태로 설정
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
                            ) : question.qitemType === '주관식' ? (
                                <div>
                                    <input 
                                        type="text" 
                                        name={`q${question.lctrSeq}-${questionIndex}`} // 이름을 배열 형태로 설정
                                        id={`q${question.lctrSeq}-text-${questionIndex}`} // 고유한 id 추가
                                        value={answers[questionIndex] || ''} 
                                        onChange={handleChange} 
                                        placeholder="답변을 입력하세요" 
                                    />
                                </div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <p>질문이 없습니다.</p>
                )}
                <button type="submit">제출</button>
            </form>
        </div>
    );
};

export default UserTest;
