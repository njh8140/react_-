import React, {useEffect, useState, useContext} from "react";
import {Link} from 'react-router-dom'
import "../css/Header.css"


const Header = () => {
    const[menus,setMenu] = useState([]);
    let i = 1;

    useEffect(() => {
        fetch('http://localhost:9191/api/menu/header',{
          method:"GET",
          credentials: 'include', // 쿠키를 포함하도록 설정
        })
        .then((res) => res.json())
        .then((res) => {
          setMenu(res);
        });
    }, []);

    const logout = () => {
        
      sessionStorage.removeItem('emlAddr');
      sessionStorage.removeItem('mbrNo');
      fetch('http://localhost:9191/api/mbr/logout',{
          method:"POST",
          credentials: 'include', // 쿠키를 포함하도록 설정
          headers:{
              "Content-Type":"application/json; charset=utf-8"
          }
      })
      .then((res)=>{
        console.log(res);
        document.cookie = "JSESSIONID=; Path=/; Max-Age=0";
        window.location.href = "/";
      });
     
  };

    return (
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 1.00)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0' }}>
        <div class="header-container">
          <div class="icon-container">
            <Link to="/">
              <div class="icon">
                <img src="/img/logo.png" style={{ width: '90px', height: '90px', padding: '5' }} alt="icon" />
              </div>
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', columnGap: '8px', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'flex-end', flex: '1 1 0%', padding: '0' }}>
            {
              menus.map((item) => (
                <div class="menu-button">
                  <div class="text" key={item.no}><a href={`${item.menuLnkg}`}>{item.menuNm}</a></div>
                </div>
              ))}
          </div>
          <div class="button-container">
            
              {sessionStorage.getItem('emlAddr') ? (
                <div class="button-signin">
                  <div class="text"><a href="#" onClick={logout}>로그아웃</a></div>
                </div>
              ) : (
                <div class="button-container">
                  <div class="button-signin">
                    <div class="text"><Link to="./lgn/lgn">로그인</Link></div>
                  </div>
                  <div class="button-register">
                    <div class="text text-register"><Link to="">회원가입</Link></div>
                  </div>
                </div>
              )}
            
            
          </div>
        </div>
        
      </div>
    );
};

export default Header;