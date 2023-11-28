// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Redirection from './components/Redirection';
import Login  from './components/Login'
import LoginSuccess from './components/LoginSuccess'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Main from './components/Main';
import Non_Login from './components/Non_Login';
import GlobalEmail from './components/GlobalEmail';
import KakaoLogin from 'react-kakao-login';
import Amount from './components/childViews/Amount';
import Non_Login_sucess from './components/Non_Login_sucess';
function App() {
  // const navigate = useNavigate;

  const [email,SetEmail] = useState("이메일 정보 없음")
  return (
    <div className="App">
    <BrowserRouter>
     <GlobalEmail.Provider value={{ email, SetEmail }}>
        <Routes>
          <Route path='/Login' element={<Login />} unmountOnExit={false}></Route>
          <Route path='/LoginSuccess' element={<LoginSuccess />}></Route>
          <Route path='/Redirection' element={<Redirection />} unmountOnExit={false}></Route>
          <Route path='/' element={<Main />} unmountOnExit={false}></Route>
          <Route path="/Non_Login" element={<Non_Login />} unmountOnExit={false}></Route>
          <Route path="/Amount" element={<Amount/>} unmountOnExit={false}></Route>
          <Route path='/Non_Login_sucess' element={<Non_Login_sucess/>}></Route>
        </Routes>
      </GlobalEmail.Provider>
     
    </BrowserRouter>
  </div>
  );
}

export default App;
