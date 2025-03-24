import React, { useState } from "react";
import "./css/LctrAply.css";
const LctrAply = () => {
    return(
        <div>
        <h2>수강 신청</h2>

<table>
    <thead>
        <tr>
            <th>강좌번호</th>
            <th>강좌제목</th>
            <th>강사명</th>
            <th>분류</th>
            <th>기간</th>
            <th>신청</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="text" value="1" readOnly/></td>
            <td><input type="text" value="Python 프로그래밍" readOnly/></td>
            <td><input type="text" value="최모" readOnly/></td>
            <td><input type="text" value="IT" readOnly/></td>
            <td><input type="text" value="1개월" readOnly/></td>
            <td><button className="btn-apply">신청하기</button></td>
        </tr>
        <tr>
            <td><input type="text" value="2" readOnly/></td>
            <td><input type="text" value="문학 강좌" readOnly/></td>
            <td><input type="text" value="한모" readOnly/></td>
            <td><input type="text" value="문학" readOnly/></td>
            <td><input type="text" value="2개월" readOnly/></td>
            <td><button className="btn-apply">신청하기</button></td>
        </tr>
        <tr>
            <td><input type="text" value="3" readOnly/></td>
            <td><input type="text" value="MySQL 기본" readOnly/></td>
            <td><input type="text" value="강모" readOnly/></td>
            <td><input type="text" value="IT" readOnly/></td>
            <td><input type="text" value="3개월" readOnly/></td>
            <td><button className="btn-apply">신청하기</button></td>
        </tr>
    </tbody>
</table>
</div>
    );
};
export default LctrAply;