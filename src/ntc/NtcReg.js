import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import '../css/Ntc.css';

const NtcReg = () => {
    const params = new URLSearchParams(window.location.search);
    let no = params.get("no");
    let mode = "";
    if(no != null) {
        mode = "update";
    } else {
        mode = "insert";
    }
    const[ntc, setNtc] = useState({
        no : '',
        ntcYn : '',
        title : '',
        content : '',
        regId : '',
        regDt : '',
        uptId : '',
        uptDt : '',
        useYn : ''
    });
    
    useEffect(() => {
        fetch(`http://localhost:9191/api/ntc/get?no=${no}`)
        .then((res) => res.json())
        .then((res) => {
            setNtc(res);
        });
    }, {no});



    const changeValue = (e) => {
        setNtc({
            ...ntc,
            [e.target.name] : e.target.value
        })
    }

    const changeChkValue = (e) => {
        const { name, checked } = e.target;
        setNtc((ntc) => ({
            ...ntc,
            [e.target.name] : checked ? "Y" : ""
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(mode == "insert") {
            fetch('http://localhost:9191/api/ntc/reg', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(ntc)
            })
            .then((response) => {
                if(response.status == 200) {
                    alert("저장 되었습니다.");
                    window.location.href = "/ntc/NtcIndex";
                }
            });
        } else {
            fetch(`http://localhost:9191/api/ntc/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(ntc)
            })
            .then((response) => {
                if(response.status == 200) {
                    alert("수정 되었습니다.");
                    window.location.href = "/ntc/NtcIndex";
                }
            });
        }
    };

    return (
        <div class="ntc-container">
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="no" value={no} />
                <input type="hidden" name="mode" value={mode} />
                <div class="ntc-title">공지사항 등록(수정)</div>
                <table class="ntc-form-table">
                    <tr>
                        <th>*제목</th>
                        <td><input type="text" name="title" placeholder="제목을 입력하세요." value={ntc.title} onChange={(e) => changeValue(e)} /></td>
                    </tr>
                    <tr>
                        <th>*내용</th>
                        <td><textarea placeholder="내용을 입력하세요." name="content" rows="4" onChange={(e) => changeValue(e)} value={ntc.content}></textarea></td>
                    </tr>
                    <tr>
                        <th>공지여부</th>
                        <td><input type="checkbox" id="ntc" name="ntcYn" checked={ntc.ntcYn === "Y"} value="Y" onChange={changeChkValue} /> <label for="ntc">공지</label></td>
                    </tr>
                    <tr>
                        <th>사용여부</th>
                        <td><input type="checkbox" id="use" name="useYn" value="Y" checked={ntc.useYn === "Y"} onChange={changeChkValue} /> <label for="use">사용여부</label></td>
                    </tr>
                </table>
                <div class="ntc-buttons">
                    <button type="button" class="text-register"><Link to="/ntc/NtcIndex">목록</Link></button>
                    <button type="submit">등록(수정)</button>
                </div>
            </form>
        </div>
    );
};

export default NtcReg;