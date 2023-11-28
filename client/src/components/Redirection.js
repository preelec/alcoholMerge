import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useEffect } from "react";
import './component_css/Redirection_css.css'
import LoginSuccess from "./LoginSuccess";
import GlobalEmail from "./GlobalEmail";
import { useContext } from "react";

const Redirection = () => {
    // const code = window.location.search;
    const {email,SetEmail} = useContext(GlobalEmail);
    const navigate = useNavigate(); 
    const storedValue = JSON.parse(sessionStorage.getItem('globalAmount'));
    const code = new URL(window.location.href).searchParams.get("code");
    const grant_type = 'authorization_code'
    const REDIRECT_URI ='http://localhost:3000/Redirection';
    // client_id 가 rest Api키
    const client_id = "c6da7ce3118630b84f078a0aafca2ece"
    
    
    useEffect(()=>{   
        // kakao 서버로 
       axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_rui=${REDIRECT_URI}&code=${code}`,{},
        {
            headers: {
                  "Content-type": 'application/x-www-form-urlencoded;charset=utf-8',
              },
        }).then((res)=>{
            console.log(res);
            const {data} = res;
            const {access_token} = data;
            // axios.post('http://localhost:4000/',{access_token:access_token}).then(()=>console.log("send token"))
            if(access_token){
                console.log(`Bearer ${access_token}`)
                axios.post("https://kapi.kakao.com/v2/user/me",{},{
                    headers:{
                        Authorization: `Bearer ${access_token}`,
                        "Content-Type":"application/x-www-from-urlencoded",
                    }
                }).then((res)=>{
                    //resdata에서 유저 정보를 출력가능
                    console.log("데이터 받기 성공:");
<<<<<<< HEAD
                    console.log(res.data+"resdata");
                    const KaKaoData = res.data
                    SetEmail(res.data.kakao_account.email)
                    console.log(KaKaoData); 
                    const userData = KaKaoData.kakao_account
                    
                    KaKaoData['amount'] = storedValue
                    axios.post('http://localhost:3001/',{KaKaoData:KaKaoData}).then(()=>console.log("send userData"))
=======
                    
                    console.log(res.data.properties.nickname)
                    const sendNickValue = res.data.properties.nickname
                    axios.post('http://localhost:4000/Login',{sendNickValue:sendNickValue}).then(()=>{
                        console.log("send nick")
                    })
                    // const userData = KaKaoData.kakao_account
                    // axios.post('http://localhost:4000/',{userData:userData}).then(()=>console.log("send userData"))
>>>>>>> 1564a17e5f4ff3df1dd64a4c2aa7983faa84df12
                    navigate('/LoginSuccess')
                })
            }else{
                console.log("access_token 없음!");
                alert(`회원정보가 없습니다! ${<br></br>} 회원가입을 해주세요!`)
                // const isChekc = confirm("회원가입을 하시겠습니까?")
                // 회원가입을 하겠다 ture일 경우 회원가입 페이지 --> 이거 카카오 회원가입 페이지로 수정
                // if(isChekc){
                    
                // }else{ 
                //     // 회원가입을 하지 않겠다 false --> main페이지로 이동
                //     navigate('/')
                // }
            }
        })
    },[])
  




    return(
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'10px',
        }}>
            <div>현재 로그인 중 입니다!<br/>기다려주세요! </div>
            <div className="dot-spinner">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
</div>
            
        </div>
    )   
}
  export default Redirection;