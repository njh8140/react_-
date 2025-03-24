import React , { createContext, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './css/App.css';
import { MyProvider } from "./components/Mycontext";
import Index from './components/Index';
import Header from './components/Header';
import Footer from './components/Footer';
import Lgn from './lgn/Lgn';
import MenuIndex from './menu/MenuIndex';
import MenuReg from './menu/MenuReg';
import NtcIndex from './ntc/NtcIndex';
import NtcDtl from './ntc/NtcDtl';
import NtcReg from './ntc/NtcReg';
import MbrIndex from './mbr/MbrIndex';
import Chatbot from './js/Chatbot'; // Chatbot 컴포넌트 임포트

import './css/StyleLMS.css';

import AtndRslt from './onlineStudy/AtndRslt';
import UserAtndRslt from './onlineStudy/UserAtndRslt'
import AtndRsltForm from './onlineStudy/AtndRsltForm';

import SrvyRslt from './onlineStudy/SrvyRslt';
import SrvyReg from './onlineStudy/SrvyReg';
import SrvyUpdate from './onlineStudy/SrvyUpdate';
import UserGetSrvy from './onlineStudy/UserGetSrvy';

import UserTest from './onlineStudy/UserTest';
import InstTestReg from './onlineStudy/InstTestReg';
import InstTestRsltList from './onlineStudy/InstTestRsltList';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <BrowserRouter>
          <Header />
            <header className="App-header">
            <Routes>
              <Route path="/" element={<Index/>} exact></Route>
              <Route path="/ntc/NtcIndex.js" element={<NtcIndex/>} exact></Route>
              <Route path="/ntc/NtcDtl.js" element={<NtcDtl/>} exact></Route>
              <Route path="/ntc/NtcReg.js" element={<NtcReg/>} exact></Route>
              <Route path="/menu/MenuIndex.js" element={<MenuIndex/>} exact></Route>
              <Route path="/menu/MenuReg.js" element={<MenuReg/>} exact></Route>
              <Route path="/lgn/Lgn.js" element={<Lgn/>} exact></Route>
              <Route path="/mbr/MbrIndex.js" element={<MbrIndex/>} exact></Route>

              <Route path="/atndRslt/:seq" element={<AtndRslt />} />
              <Route path="/SrvyReg" element={<SrvyReg />} />
              <Route path="/SrvyRslt" element={<SrvyRslt />} />
              <Route path="/SrvyUpdate" element={<SrvyUpdate />} />
              <Route path="/userAtndRslt/:seq/:emlAddr/:instEmlAddr" element={<UserAtndRslt />} />
              <Route path="/userAtndRslt/:seq/:emlAddr" element={<UserAtndRslt />} />
              <Route path="/atndRsltForm" element={<AtndRsltForm />} />
              <Route path="/UserTest" element={<UserTest />} />
              <Route path="/InstTestReg" element={<InstTestReg />} />
              <Route path="/UserGetSrvy" element={<UserGetSrvy />} />
              <Route path="/InstTestRsltList" element={<InstTestRsltList />} />
            </Routes>
            </header>
            <Chatbot /> 
            <Footer />
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
