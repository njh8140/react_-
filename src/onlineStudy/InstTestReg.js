import React, { useState } from "react";

const InstTestReg = () => {
    const [files, setFiles] = useState([]);
    const [lctrSeq, setLctrSeq] = useState(''); // 강좌 번호를 위한 상태 추가
    const [seq, setSeq] = useState(''); // lctrSeq를 위한 상태 추가

    const handleFileChange = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    };

    const handleRemoveFile = (fileToRemove) => {
        setFiles((prevFiles) => prevFiles.filter(file => file !== fileToRemove));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        // 모든 파일을 FormData에 추가
        files.forEach(file => {
            formData.append('file', file);
        });
        formData.append('lctrSeq', lctrSeq);
        formData.append('seq', seq); // lctrSeq 추가

        fetch(`http://localhost:9192/api/insertTest?lctrSeq=${lctrSeq}&seq=${seq}`, { 
            method: "POST",
            body: formData
        })
        .then((response) => {
            if (response.ok) {
                alert("파일이 성공적으로 업로드되었습니다.");
                setFiles([]);
                setLctrSeq('');
                setSeq(''); // lctrSeq 초기화
            } else {
                alert("파일 업로드에 실패하였습니다.");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="container">
            <h2>파일 업로드</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="강좌 번호 입력"
                    value={lctrSeq}
                    onChange={(e) => setLctrSeq(e.target.value)} // 강좌 번호 입력 처리
                />
                <input
                    type="text"
                    placeholder="lctrSeq 입력" // lctrSeq 입력 필드 추가
                    value={seq}
                    onChange={(e) => setSeq(e.target.value)} // lctrSeq 입력 처리
                />
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange} // 파일 변경 처리
                />
                <button type="submit">업로드</button>
            </form>
        </div>
    );
};

export default InstTestReg;
