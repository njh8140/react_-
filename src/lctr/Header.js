import React from 'react'
import {Link} from 'react-router-dom'
import "./css/Header.css"

const Header = () => {
    return (
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 1.00)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0' }}>
        <div class="header-container">
          <div class="icon-container">
            <div class="icon">
              <img src="/img/logo.png" style={{ width: '90px', height: '90px', padding: '5' }} alt="icon" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', columnGap: '8px', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'flex-end', flex: '1 1 0%', padding: '0' }}>
            <div class="button">
              <div class="text"><Link to="./ntc/NtcIndex.js">공지사항</Link></div>
            </div>
            <div class="button-solutions">
              <div class="text">Solutions</div>
            </div>
            <div class="button-solutions">
              <div class="text">Community</div>
            </div>
            <div class="button-solutions">
              <div class="text">Resources</div>
            </div>
            <div class="button-solutions">
              <div class="text">Pricing</div>
            </div>
            <div class="button-solutions">
              <div class="text">Contact</div>
            </div>
          </div>
          <div class="button-container">
            <div class="button-signin">
              <div class="text"><Link to="./lgn/lgn.js">로그인</Link></div>
            </div>
            <div class="button-register">
              <div class="text text-register">회원가입</div>
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default Header;