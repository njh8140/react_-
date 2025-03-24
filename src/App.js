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
import UserAtndRsltForm from './onlineStudy/UserAtndRsltForm';
import SrvyRslt from './onlineStudy/SrvyRslt';
import SrvyReg from './onlineStudy/SrvyReg';
import SrvyUpdate from './onlineStudy/SrvyUpdate';
import UserGetSrvy from './onlineStudy/UserGetSrvy';
import UserTest from './onlineStudy/UserTest';
import InstTestReg from './onlineStudy/InstTestReg';
import InstTestRsltList from './onlineStudy/InstTestRsltList';

import InstMbrJoin from './lctr/InstMbrJoin';
import InstMbrMdfcn from './lctr/InstMbrMdfcn';
import LctrAply from './lctr/LctrAply';
import MbrJoin from './lctr/MbrJoin';
import MbrMdfcn from './lctr/MbrMdfcn';
import LctrSeqMdfcn from './lctr/LctrSeqMdfcn';
import LctrReg from './lctr/LctrReg';
import LctrStatsSrch from './lctr/LctrStatsSrch';
import LctrMdfcn from './lctr/LctrMdfcn';
import LctrDtlStats from './lctr/LctrDtlStats';
import LctrAplyStatsSrch from './lctr/LctrAplyStatsSrch';
import LctrSeqStatsSrch from './lctr/LctrSeqStatsSrch';
import LctrSeqDtlMdfcn from './lctr/LctrSeqDtlMdfcn';
import LctrSeq from './lctr/LctrSeq';
import MngLctrSeq from './lctr/MngLctrSeq';
import MngLctrSeqMbrMdfcn from './lctr/MngLctrSeqMbrMdfcn';
import InstMbrLctrSeq from './lctr/InstMbrLctrSeq';
import EndLctrSeq from './lctr/EndLctrSeq';
import PrgrsLctrSeq from './lctr/PrgrsLctrSeq';
import LctrSeqReg from './lctr/LctrSeqReg';
import InstLctrSeqReg from './lctr/InstLctrSeqReg';


function App() {
  return (
    <div className="App">
      <MyProvider>
        <BrowserRouter>
          <Header />
            <header className="App-header">
            <Routes>
              <Route path="/" element={<Index/>} exact></Route>
              <Route path="/ntc/NtcIndex" element={<NtcIndex/>} exact></Route>
              <Route path="/ntc/NtcDtl" element={<NtcDtl/>} exact></Route>
              <Route path="/ntc/NtcReg" element={<NtcReg/>} exact></Route>
              <Route path="/menu/MenuIndex" element={<MenuIndex/>} exact></Route>
              <Route path="/menu/MenuReg" element={<MenuReg/>} exact></Route>
              <Route path="/lgn/Lgn" element={<Lgn/>} exact></Route>
              <Route path="/mbr/MbrIndex" element={<MbrIndex/>} exact></Route>

              <Route path="/onlineStudy/AtndRslt/:seq" element={<AtndRslt />} />
              <Route path="/onlineStudy/SrvyReg" element={<SrvyReg />} />
              <Route path="/onlineStudy/SrvyRslt" element={<SrvyRslt />} />
              <Route path="/onlineStudy/SrvyUpdate" element={<SrvyUpdate />} />
              <Route path="/onlineStudy/UserAtndRslt/:seq/:emlAddr/:instEmlAddr" element={<UserAtndRslt />} />
              <Route path="/onlineStudy/UserAtndRslt/:seq/:emlAddr" element={<UserAtndRslt />} />
              <Route path="/onlineStudy/AtndRsltForm" element={<AtndRsltForm />} />
              <Route path="/onlineStudy/UserAtndRsltForm" element={<UserAtndRsltForm />} />
              <Route path="/onlineStudy/UserTest" element={<UserTest />} />
              <Route path="/onlineStudy/InstTestReg" element={<InstTestReg />} />
              <Route path="/onlineStudy/UserGetSrvy" element={<UserGetSrvy />} />
              <Route path="/onlineStudy/InstTestRsltList" element={<InstTestRsltList />} />

              <Route path="/lctr/instMbrJoin" element={<InstMbrJoin/>} exact></Route>
              <Route path="/lctr/instMbrMdfcn" element={<InstMbrMdfcn/>} exact></Route>
              <Route path="/lctr/lctrAply" element={<LctrAply/>} exact></Route>
              <Route path="/lctr/mbrJoin" element={<MbrJoin/>} exact></Route>
              <Route path="/lctr/mbrMdfcn" element={<MbrMdfcn/>} exact></Route>
              <Route path="/lctr/lctrSeqMdfcn" element={<LctrSeqMdfcn/>} exact></Route>
              <Route path="/lctr/lctrReg" element={<LctrReg/>} exact></Route>
              <Route path="/lctr/lctrStatsSrch" element={<LctrStatsSrch/>} exact></Route>
              <Route path="/lctr/lctrMdfcn" element={<LctrMdfcn/>} exact></Route>
              <Route path="/lctr/lctrDtlStats" element={<LctrDtlStats/>} exact></Route>
              <Route path="/lctr/lctrAplyStatsSrch" element={<LctrAplyStatsSrch/>} exact></Route>
              <Route path="/lctr/lctrSeqStatsSrch" element={<LctrSeqStatsSrch/>} exact></Route>
              <Route path="/lctr/lctrSeqDtlMdfcn" element={<LctrSeqDtlMdfcn/>} exact></Route>
              <Route path="/lctr/lctrSeq" element={<LctrSeq/>} exact></Route>
              <Route path="/lctr/mngLctrSeq" element={<MngLctrSeq/>} exact></Route>
              <Route path="/lctr/mngLctrSeqMbrMdfcn" element={<MngLctrSeqMbrMdfcn/>} exact></Route>
              <Route path="/lctr/instMbrLctrSeq" element={<InstMbrLctrSeq/>} exact></Route>
              <Route path="/lctr/endLctrSeq" element={<EndLctrSeq/>} exact></Route>
              <Route path="/lctr/prgrsLctrSeq" element={<PrgrsLctrSeq/>} exact></Route>
              <Route path="/lctr/lctrSeqReg" element={<LctrSeqReg/>} exact></Route>

              <Route path="/lctrStatsSrch/lctrDtlStats/:lctrSeq" element={<LctrDtlStats />} exact></Route>
              <Route path="/lctrStatsSrch/lctrSeqReg/:lctrSeq" element={<LctrSeqReg />} exact></Route> {/* 새 강의 등록 페이지 */}
              <Route path="/lctrStatsSrch/lctrMdfcn/:lctrSeq" element={<LctrMdfcn />} /> {/* 강의 수정 페이지 */}
              <Route path="/instLctrSeqReg" element={<InstLctrSeqReg/>} exact></Route>
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
