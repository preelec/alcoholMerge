// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Redirection from './components/Redirection';
import Login  from './components/Login'
import LoginSuccess from './components/LoginSuccess'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Main from './components/Main';
import Non_Login from './components/Non_Login';
function App() {
  // const navigate = useNavigate;
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/LoginSuccess' element={<LoginSuccess></LoginSuccess>}></Route>
        <Route path='/Redirection' element={<Redirection></Redirection>}></Route>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path="/Non_Login" element={<Non_Login></Non_Login>}></Route>
      </Routes>
  </BrowserRouter>
    </div> 
  );
}

export default App;
