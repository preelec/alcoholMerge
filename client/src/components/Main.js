import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import KaKaoLogin from "react-kakao-login"
import logo from '../img/logo.png'

import './component_css/CateBtn.css'
import './component_css/Main_Card.css'

// import Main_css from './component_css/Main_css.css'
export default function Main() {
  const REST_API_KEY='c6da7ce3118630b84f078a0aafca2ece';
  // const REDIRECT_URI='http://localhost:3000/Redirection';
  // 해당 링크에 인가코드 발급 해줌
  const REDIRECT_URI='http://localhost:3000/Redirection'
  // const REDIRECT_URI=`${process.env.REACT_APP_KAKAO_REDIRECT_URL}`
  // 해당 링크에서 인가코드 발급
  // client_id는 kakao developers에서 내 애플리케이션 추가했을때 생기는 REST_API키를 넣어줌
  // Redirect URI는 카카오 로그인 메뉴에 들어가서 추가를 해준다.
  // 이떄 경로 설정은 백엔드와 협의해서 맞춤
  // 대신!! Redirect URI는 반드시 프론트에서 접근할 수 있는 Host로 지정 (localhost:3000)

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  
  const loginHandler = () => {
    window.location.href = kakaoURL
  };

  const navigate = useNavigate(); 
  return (
    <div>
      
        <div className="Main_card">
        <div className="Main_circle"></div>
        <div className="Main_circle"></div>
        <div className="Main_card-inner">
        <img src={logo} style={{
          marginTop:"80px"
        }}></img>
        <div style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'space-evenly'
                  

                }}>
                    <div style={
                      {
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:'50px'
                      }
                  }>
                    {/* <div style={Main_css}><Link to="/Login">로그인</Link></div> */}

                     <svg height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H24V24H0z" fill="none"></path>
                      <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
                      </svg>
                    <button className='cateBtn' onClick={loginHandler}>로그인</button>
                    </div>
                    {/* <div style={Main_css}><Link to="/Non_Login">비회원<br/>로그인</Link></div> */}
                    <div style={   
                      {
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:'30px'
                        
                      }
                  }>
                    <svg height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H24V24H0z" fill="none"></path>
                      <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
                      </svg>
                    <button className='cateBtn' onClick={()=>navigate("/Non_Login")}>비회원</button>
                    </div>
                    <div style={
                      {
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:'30px'
                      }
                  }>
                    <svg height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H24V24H0z" fill="none"></path>
                      <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
                      </svg>
                    {/* <div style={Main_css}><button onClick={()=>bnt_confirm()}>설명서</button></div> */}
                    <button className='cateBtn'>설명서</button>
                    </div>
                    <p style={{display:'flex', flexDirection:'row-reverse',paddingRight:'20px', fontWeight:'bold'}}>회원가입하셨나요 ?</p>
                </div>
        </div>
    </div>
</div>    

  )
}
