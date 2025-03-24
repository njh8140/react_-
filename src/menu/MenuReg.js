import React, {useState,useEffect} from 'react'
import {Link,useParams } from 'react-router-dom'
import '../css/menureg.css';

const MenuReg = () => {
     const params = new URLSearchParams(window.location.search);
    let paramNo = params.get("no");

    const[menureg,setMenureg] = useState({
        no: '',
        rfrncNo: '',
        rfrncGroup: '',
        menuNm: '',
        menuLnkg: '',
        rlsMbrAuthrt: '',
        mngrPageRlsYn: '',
        userPageRlsYn: '',
        useYn: '',
        regId: '',
        uptId: '',
        regDt: '',
        uptDt: '',
        layer: ''

        });

    useEffect(() => {
        fetch('http://localhost:9191/api/getmenu',{
            method:"POST",
            headers:{
                "Content-Type":"application/json; charset=utf-8"
            },
            body: JSON.stringify({no:paramNo})
        })
        .then((response)=>{
            if(response.status==200){
                if(paramNo){
                    response.json().then(data => {
                        setMenureg(prevState => ({
                            ...prevState,
                            no: data.no,
                            rfrncNo: data.rfrncNo,
                            rfrncGroup: data.rfrncGroup,
                            menuNm: data.menuNm,
                            menuLnkg: data.menuLnkg,
                            rlsMbrAuthrt: data.rlsMbrAuthrt,
                            mngrPageRlsYn: data.mngrPageRlsYn,
                            user_page_rls_yn: data.userPageRlsYn,
                            useYn: data.useYn,
                            regId: data.regId,
                            uptId: data.uptId,
                            regDt: data.regDt,
                            uptDt: data.uptDt,
                            layer: data.layer
                        }));
                    })
                }
            }
        });
    },[]);
     
    
        const changeValue=(e)=>{
            setMenureg({
                ...menureg,
                [e.target.name]:e.target.value
            })
        }

        const changeChkValue=(e)=>{
            const { name, checked } = e.target;
            setMenureg((menureg)=>({
                ...menureg,
                [e.target.name]: checked ? "Y":"",
            }))
        }

        
        
       
        const handleSubmit = (e) => {
            e.preventDefault();
            let apiPath="";
            if(paramNo){
                apiPath = "http://localhost:9191/api/menuupdate";
            }else{
                apiPath = "http://localhost:9191/api/menuform";
            }
           
            fetch(apiPath,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json; charset=utf-8"
                },
                body: JSON.stringify(menureg)
            })
            .then((response)=>{
                if(response.status==200){
                    window.location.href = "./MenuIndex";
                    alert("저장되었습니다.");
                }
            });
        };

         
        

    return (
        <div>
            <div id="content_center" style={{ textAlign: 'center', width: '1800px' }}>
                <h1 class="title" >메뉴 등록(수정)</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="form-container">
                    <div class="form-group">
                        <label for="menu-name">메뉴명</label>
                        <input type="text" id="menu-name" name="menuNm" value={menureg.menuNm} onChange={(e) => changeValue(e)} placeholder="메뉴명을 입력하세요" />
                    </div>
                    <div class="form-group">
                        <label for="link">링크</label>
                        <input type="text" id="link" name="menuLnkg" value={menureg.menuLnkg} onChange={(e) => changeValue(e)} placeholder="링크를 입력하세요" />
                    </div>
                    <div class="form-group">
                        <label>회원 권한</label>
                        <div class="radio-group">
                            <input type="radio" id="auth1" name="rlsMbrAuthrt" value="1" checked={menureg.rlsMbrAuthrt == 1}  onChange={changeValue}/><label for="auth1"> 일반</label>
                            <input type="radio" id="auth2" name="rlsMbrAuthrt" value="2" checked={menureg.rlsMbrAuthrt == 2} onChange={changeValue}/> <label for="auth2">기관</label>
                            <input type="radio" id="auth3" name="rlsMbrAuthrt" value="3" checked={menureg.rlsMbrAuthrt == 3} onChange={changeValue}/><label for="auth3"> 관리자</label>
                        </div>
                    </div>
                    {/* <div class="form-group">
                        <label for="category">분류</label>
                        <select id="category" width="50px;" name="category">
                            <option value="">선택하세요</option>
                            <option value="페이지">페이지</option>
                            <option value="공개여부">공개 여부</option>
                        </select>

                    </div> */}

                    <div class="form-group">
                        <label>페이지 공개 여부</label>
                        <div class="checkbox-group">
                            <input type="checkbox" name="mngrPageRlsYn" id="visibility1" value="Y" checked={menureg.mngrPageRlsYn == 'Y'} onChange={changeChkValue}/><label for="visibility1"> 관리자</label>
                            <input type="checkbox" name="userPageRlsYn" id="visibility2" value="Y" checked={menureg.userPageRlsYn == 'Y'} onChange={changeChkValue}/><label for="visibility2"> 사용자</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>사용 여부</label>
                        <div class="checkbox-group">
                            <input type="checkbox" name="useYn" id="use" value="Y" checked={menureg.useYn == 'Y'} onChange={changeChkValue}/><label for="use"> 사용</label>
                        </div>
                    </div>
                    <div class="button-group">
                        <button type="button"><Link to="/menu/MenuIndex">목록</Link></button>
                        <button type="submit">등록(수정)</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MenuReg;