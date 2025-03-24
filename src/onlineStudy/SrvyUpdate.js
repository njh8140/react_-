import React, { useState, useEffect } from 'react';

const params = new URLSearchParams(window.location.search);
let lctrSeq = params.get("lctrSeq") == null ? '' : params.get("lctrSeq");
let seq = params.get("seq") == null ? '' : params.get("seq");
let instEmlAddr = params.get("instEmlAddr") == null ? '' : params.get("instEmlAddr");

const SrvyUpdate = () => {
    const [formData, setFormData] = useState([]);

    // 설문 데이터 불러오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:9192/api/GetSurveyData?lctrSeq=${lctrSeq}&seq=${seq}&instEmlAddr=${instEmlAddr}`, {
                        method: "GET"
                    }
                );
                const result = await response.json();
                setFormData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [lctrSeq, seq, instEmlAddr]);

    // 입력값 변경 핸들러 (설문 유형, 설문 내용 변경)
    const handleChange = (index, e) => {
        const { name, value } = e.target;
        setFormData((prevData) =>
            prevData.map((item, i) => (i === index ? { ...item, [name]: value } : item))
        );
    };

    // 객관식 보기 변경 핸들러
    const handleOptionChange = (index, optionIndex, e) => {
        const { value } = e.target;
        setFormData((prevData) =>
            prevData.map((item, i) => {
                if (i === index) {
                    const options = item.cHc ? item.cHc.split(',') : [];
                    options[optionIndex] = value;
                    return { ...item, cHc: options.join(',') };
                }
                return item;
            })
        );
    };

    // 질문 추가 핸들러
    const handleAddQuestion = () => {
        setFormData((prevData) => [
            ...prevData,
            {
                srvyType: '',
                srvyCn: '',
                cHc: Array(5).fill('').join(','), // 보기 5개 추가
            },
        ]);
    };

    // 질문 삭제 핸들러
    const handleDeleteQuestion = (index) => {
        setFormData((prevData) => prevData.filter((_, i) => i !== index));
    };

    // 설문 수정 요청 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = {
            instEmlAddr: instEmlAddr,
            lctrSeq: lctrSeq,
            seq: seq,
            submittedSrvys: formData.map((q) => ({
                svyType: q.srvyType,
                srvyCn: q.srvyCn,
                cHc: q.cHc || '',
            })),
        };

        console.log('전송할 데이터:', updatedData);

        try {
            const response = await fetch(`http://localhost:9192/api/SrvyUpdate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                alert('설문이 성공적으로 수정되었습니다.');
            } else {
                alert('설문 수정 실패: ' + response.status);
            }
        } catch (error) {
            console.error('Error updating survey:', error);
            alert('오류 발생: 설문 수정 중 문제가 발생했습니다.');
        }
    };

    if (formData.length === 0) return <div>Loading...</div>;

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {formData.map((item, index) => (
                    <div key={index}>
                        <h3>설문 {index + 1}</h3>
                        <div>
                            <label>
                                설문 유형:
                                <select name="srvyType" value={item.srvyType} onChange={(e) => handleChange(index, e)}>
                                    <option value="">선택하세요</option>
                                    <option value="객관식">객관식</option>
                                    <option value="단답형">단답형</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>
                                설문 내용:
                                <textarea name="srvyCn" value={item.srvyCn} onChange={(e) => handleChange(index, e)} />
                            </label>
                        </div>
                        {item.srvyType === '객관식' && (
                            <div>
                                <h4>보기 입력:</h4>
                                {item.cHc.split(',').map((option, optionIndex) => (
                                    <div key={optionIndex}>
                                        <label>
                                            보기 {optionIndex + 1}:
                                            <input
                                                type="text"
                                                value={option}
                                                onChange={(e) => handleOptionChange(index, optionIndex, e)}
                                            />
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button type="button" onClick={() => handleDeleteQuestion(index)}>
                            삭제
                        </button>
                    </div>
                ))}
                <button type="button" onClick={handleAddQuestion}>
                    질문 추가
                </button>
                <button type="submit">수정하기</button>
            </form>
        </div>
    );
};

export default SrvyUpdate;
