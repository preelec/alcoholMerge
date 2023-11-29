import React, { useState,useEffect } from 'react'
import './component_css/Non_Login_Btn.css'
import './component_css/Non_Login_Card.css'
import logo from '../img/logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Non_Login = () => {
const navigate = useNavigate(); 
const [amount,setAmount] = useState('');
const [nickName,setNickName] = useState('');

const Non_Login_bnt = ()=>{

// axios.post('http://localhost:3001/Non_Login').then((res)=>{
   navigate('/Non_Login_sucess')
// })

}
// 비회원 로그인 페이지
  return (
    <div>
    <div className="Non_Login_card">
    <div className="Non_Login_circle"></div>
    <div className="Non_Login_circle"></div>
    <div className="Non_Login_card-inner" style={{display:'flex', alignItems:'center'}}>
    <div className="group">
      <img src={logo} style={{
        marginTop:"80px"
      }}></img>
    <div style={{display:'flex'}}>
    <svg height="32" width="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H24V24H0z" fill="none"></path>
    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
    </svg>
      <input placeholder="주량을입력" type="search" class="input" onChange={(e)=>setNickName(e.target.value)}/>
    </div>
    <div style={{display:'flex',marginTop:'50px'}}>
    <svg height="32" width="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H24V24H0z" fill="none"></path>
    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
    </svg>
    <input placeholder="닉네임을입력" type="search" class="input" onChange={(e)=>{setAmount(e.target.value)}}/>
    </div>
    <div style={{display:'flex',marginTop:'50px',flexDirection:'row-reverse'}}>


    <button onClick={Non_Login_bnt} className='cateBtn'>로그인</button>
   </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Non_Login;