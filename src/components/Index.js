import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../css/index.css';


const Home = () => {
    const[ntcs,setNtc] = useState([]);
    let i = 1;

    useEffect(() => {
        fetch('http://localhost:9191/api/ntc/main')
        .then((res) => res.json())
        .then((res) => {
            setNtc(res);
        });
    }, []);

    return(
        <div style={{ width: '100%' }}>
            <div class="container2" >
                <div class="title-container2" >
                    <div class="title-main2">Title</div>
                    <div class="subtitle-main">Subtitle</div>
                </div>
            </div>
            <div class="container3">
                <div class="title-container-list">
                    <div class="title">강좌리스트(개인)</div>
                </div>
                <div class="card-container">
                    <div class="card">
                        <img src="" class="card-image" />
                        <div class="card-content">
                            <div class="card-title">Title</div>
                            <div class="card-body">Body text for whatever you’d like to say.</div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="" class="card-image" />
                        <div class="card-content">
                            <div class="card-title">Title</div>
                            <div class="card-body">Body text for whatever you’d like to say.</div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="" class="card-image" />
                        <div class="card-content">
                            <div class="card-title">Title</div>
                            <div class="card-body">Body text for whatever you’d like to say.</div>
                        </div>
                    </div>
                </div>
                <div class="title-container-list">
                    <div class="title">강좌리스트(기관)</div>
                </div>
                <div class="card-container">
                    <div class="card">
                        <img src="" class="card-image" />
                        <div class="card-content">
                            <div class="card-title">Title</div>
                            <div class="card-body">Body text for whatever you’d like to say.</div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="" class="card-image" />
                        <div class="card-content">
                            <div class="card-title">Title</div>
                            <div class="card-body">Body text for whatever you’d like to say.</div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="" class="card-image" />
                        <div class="card-content">
                            <div class="card-title">Title</div>
                            <div class="card-body">Body text for whatever you’d like to say.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container3">
                
                    <div class="title-container">
                        <div class="title">공지사항</div>
                    </div>
                    <table class="board">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>등록일</th>
                                <th>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ntcs.map((item) => (
                                <tr key={item.no}>
                                    <td>
                                        {
                                            item.ntcYn == 'Y' ? '공지' : i++
                                        }
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.regDt}</td>
                                    <td>{item.mbrVo.user}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
            </div>
            
        </div>
            
            
            
            
        
    );
};

export default Home;