import { Box,  Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import Input from '@mui/joy/Input';
import axios from 'axios';
import GlobalEmail from '../GlobalEmail';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
const Amount = ({ handleClose4 }) => {
  const [globalAmount,setGlobalAmount] = useState(0);
  const [weight,setWeight] = useState(0);
  const [sex,setSex] = useState(0);
    const REST_API_KEY='c6da7ce3118630b84f078a0aafca2ece';
  // const REDIRECT_URI='http://localhost:3000/Redirection';
  // 해당 링크에 인가코드 발급 해줌
  const REDIRECT_URI='http://localhost:3000/Redirection'

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  
    const {email} = useContext(GlobalEmail);
    
    const stylemodal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4, 
        maxWidth: 500
      };







      const enter = async () =>{
        const storedValue = JSON.parse(localStorage.getItem('globalAmount'));
        console.log(storedValue)
        localStorage.setItem('globalAmount', JSON.stringify(globalAmount));
        localStorage.setItem('weight', JSON.stringify(weight));
        localStorage.setItem('sex', JSON.stringify(sex));
            console.log(globalAmount);
         window.location.href = kakaoURL
        }


    return (
    <Box sx={stylemodal}>
     <Input placeholder='주량을 입력해주세요(잔)' onChange={(e)=>{setGlobalAmount(e.target.value)}}  type='number'/>
     <br></br>
     <Input placeholder='몸무게를 입력해주세요(kg)' onChange={(e)=>{setWeight(e.target.value)}}  type='number'/>
     <br></br>
     <Input placeholder='성별을 입력해주세요(남자면 1 여자면 0)' onChange={(e)=>{setSex(e.target.value)}}  type='number'/>
     <Button variant="contained" onClick={enter} >
        확인
</Button>
    </Box>
  
  )
}

export default Amount;