import React, { useState } from 'react';

const SrvyReg = () => {
    const [questions, setQuestions] = useState([{ 
        svyType: '', 
        srvyCn: '', 
        cHc: '' 
    }]);

    const [instEmlAddr, setInstEmlAddr] = useState('');
    const [lctrSeq, setLctrSeq] = useState('');
    const [seq, setSeq] = useState('');

    const handleInputChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index][event.target.name] = event.target.value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, event) => {
        const newQuestions = [...questions];
        const value = event.target.value;
    
        const options = newQuestions[questionIndex].cHc ? newQuestions[questionIndex].cHc.split(',') : [];
    
        options[optionIndex] = value;
    
        newQuestions[questionIndex].cHc = options.join(',');
    
        setQuestions(newQuestions);
    };
    
    

    const addQuestion = () => {
        if (questions.length < 15) {
            setQuestions([...questions, { 
                svyType: '', 
                srvyCn: '', 
                cHc: '' 
            }]);
        } else {
            alert("질문은 최대 15개까지 추가할 수 있습니다.");
        }
    };

    const deleteQuestion = (index) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            instEmlAddr: instEmlAddr,
            lctrSeq: lctrSeq,
            seq: seq,
            submittedSrvys: questions.map(q => {
                let cHcValue = q.cHc;
    
                return {
                    svyType: q.svyType,
                    srvyCn: q.srvyCn,
                    cHc: cHcValue
                };
            })
        };
    
        console.log('Form Data:', formData);
    
        fetch(`http://localhost:9192/api/SrvyReg`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(formData) 
        })
        .then(response => {
            if (response.ok) {
                alert("설문지가 성공적으로 등록되었습니다.");
                setQuestions([{ 
                    svyType: '', 
                    srvyCn: '', 
                    cHc: '' 
                }]);
                setInstEmlAddr('');
                setLctrSeq('');
                setSeq('');
            } else {
                alert("설문지 등록 실패: " + response.status);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("오류 발생: 설문지 등록 중 문제가 발생했습니다.");
        });
    };
    
    return (
        <div className="form-container">
            <h1>설문지 작성</h1>
            <form id="survey-form" onSubmit={handleSubmit}>
                <label htmlFor="instEmlAddr">회원 이메일</label>
                <input
                    type="email"
                    value={instEmlAddr}
                    onChange={(e) => setInstEmlAddr(e.target.value)}
                    required
                />
                <label htmlFor="lctrSeq">강좌 고유 키</label>
                <input
                    type="text"
                    value={lctrSeq}
                    onChange={(e) => setLctrSeq(e.target.value)}
                    required
                />
                <label htmlFor="seq">seq 키</label>
                <input
                    type="text"
                    value={seq}
                    onChange={(e) => setSeq(e.target.value)}
                    required
                />
                {questions.map((question, index) => (
                    <div key={index} className="form-group">
                        <label htmlFor={`svyType-${index}`}>설문 유형</label>
                        <select
                            name="svyType"
                            value={question.svyType}
                            onChange={(event) => handleInputChange(index, event)}
                            required
                        >
                            <option value="">-- 선택하세요 --</option>
                            <option value="객관식">객관식</option>
                            <option value="단답형">단답형</option>
                        </select>
                        <label htmlFor={`srvyCn-${index}`}>설문지 문항</label>
                        <input
                            type="text"
                            name="srvyCn"
                            placeholder="설문지 문항 입력"
                            value={question.srvyCn}
                            onChange={(event) => handleInputChange(index, event)}
                            required
                        />
                        {question.svyType === '객관식' && (
                            <div>
                                <h4>보기를 입력하세요:</h4>
                                {Array(5).fill(0).map((_, optionIndex) => (
                                    <input
                                        key={`option-${index}-${optionIndex}`}
                                        type="text"
                                        name={`option-${index}-${optionIndex}`} // 고유한 name 추가
                                        placeholder={`보기 ${optionIndex + 1}`}
                                        onChange={(event) => handleOptionChange(index, optionIndex, event)}
                                        required
                                    />
                                ))}
                            </div>
                        )}
                        <button type="button" className="delete-button" onClick={() => deleteQuestion(index)}>
                            삭제
                        </button>
                    </div>
                ))}
                <div className="button-container">
                    <button type="button" id="add-button" onClick={addQuestion}>
                        추가
                    </button>
                </div>
                <div className="button-container">
                    <button type="submit">등록</button>
                    <button type="button" onClick={() => window.history.back()}>취소</button>
                </div>
            </form>
        </div>
    );
};

export default SrvyReg;
