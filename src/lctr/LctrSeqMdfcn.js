import React, { useState } from "react";
import "./css/LctrSeqMdfcn.css";
const LctrSeqMdfcn = () => {
    return(
        <div>
         <div>강의 정보 관리</div>

<div>
    <button>강의 등록하기</button>
</div>


<table>
    <thead>
        <tr>
            <th>회차</th>
            <th>강좌 제목</th>
            <th>강의 길이</th>
            <th>분류</th>
            <th>등록일</th>
            <th>수정일</th>
            <th>정보 수정</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Java 기초</td>
            <td>30분</td>
            <td>IT</td>
            <td>2025.02.03</td>
            <td>2025.02.09</td>
            <td><button className="button">수정하기</button></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Java 기본</td>
            <td>40분</td>
            <td>IT</td>
            <td>2025.02.03</td>
            <td>2025.02.09</td>
            <td><button className="button">수정하기</button></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Java 활용</td>
            <td>50분</td>
            <td>IT</td>
            <td>2025.02.03</td>
            <td>2025.02.09</td>
            <td><button className="button">수정하기</button></td>
        </tr>
    </tbody>
</table>

<div className="button-group">
    <button className="button">저장</button> <button className="button">취소</button>
</div>
</div>

    );
};
export default LctrSeqMdfcn;