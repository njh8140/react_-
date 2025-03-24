import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Mbr.css';


const MbrIndex = () => {
    return (
        <div class="mbr-container">
            <div class="title">회원 관리</div>
            <div class="buttons-top">
                <div>
                    <a href="#" class="active">일반</a>
                    <a href="#" class="">기관</a>
                    <a href="#" class="">관리자</a>
                </div>
                <div>
                    <button class="approve-btn">선택 승인</button>
                    <button class="approve-btn">전체 승인</button>
                </div>
            </div>
            <table class="member-table">
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>번호</th>
                    <th>이메일(ID)</th>
                    <th>이름</th>
                    <th>등급</th>
                    <th>승인여부</th>
                    <th>관리</th>
                </tr>
                <tr>
                    <td></td>
                    <td>1</td>
                    <td>test@naver.com</td>
                    <td>홍길동</td>
                    <td>관리자</td>
                    <td>Y</td>
                    <td>
                        <div class="buttons">
                            <button class="edit-btn">수정</button>
                            <button class="edit-btn">삭제</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>2</td>
                    <td>example@domain.com</td>
                    <td>기관</td>
                    <td>기관</td>
                    <td>N</td>
                    <td>
                        <div class="buttons">
                            <button class="edit-btn">승인</button>
                            <button class="edit-btn">수정</button>
                            <button class="edit-btn">삭제</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>3</td>
                    <td>user@email.com</td>
                    <td>일반</td>
                    <td>일반</td>
                    <td>Y</td>
                    <td>
                        <div class="buttons">
                            <button class="edit-btn">수정</button>
                            <button class="edit-btn">삭제</button>
                        </div>
                    </td>
                </tr>
            </table>
            <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#" class="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    );
};

export default MbrIndex;