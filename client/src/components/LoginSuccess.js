import React, { useState,useEffect, useContext } from 'react'
import { Button,IconButton, Modal, Typography } from '@mui/material';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import alcocare from '../img/alcocare.png'
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import axios from 'axios';
import Tips from './childViews/Tips';
import SemiTips from './childViews/SemiTips';
import Help from './childViews/Help';
import Amount from './childViews/Amount';
import LiquorIcon from '@mui/icons-material/Liquor';
import GlobalEmail from './GlobalEmail';

const LoginSuccess = () => {
  
const [maxDrink, setMaxDrink] = useState(0); // 이 값을 보낼 예정
const [send, setSend] = useState(false);
const [clientCnt, setClientSet] = useState(0);
const [val,setVal] = useState(0)
const [open, setOpen] = React.useState(false);
const [open2,setOpen2] = React.useState(false);
const [open3,setOpen3] = React.useState(false);
const [open4,setOpen4] = React.useState(false);
const [isHalf, setIsHalf] = useState(1);
const [amount,setAmount] = useState(0);

const [nickname,SetNickname] = useState('');   
const {email} = useContext(GlobalEmail);
const [cmd, setCmd] = useState({
  drink: 0,
  isHalf: 1 //1 한잔 -1 반잔
});


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/');

      // 데이터에서 "nickname" 추출
   //   const extractedNicknames = response.data[0].KaKaoData.properties.nickname 
      console.log(response);
      const emailCheck = response.data.find(response => response.KaKaoData.kakao_account.email.toString() === email)
      
      console.log(emailCheck)
      if(emailCheck){
        const extractedNicknames = emailCheck.KaKaoData.properties.nickname
        const amountPerson = emailCheck.KaKaoData.amount;
        setAmount(amountPerson);
        console.log(amountPerson)
         
      console.log(extractedNicknames);
      // 추출된 닉네임을 상태에 설정
      SetNickname(extractedNicknames);
        
    }else {
        console.log("Email not found in the response data.");
      }
   
      console.log(email+"이메일")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행





useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/get-data');
      setVal(response.data.value);
      setClientSet(response.data.clientCnt);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


 

  fetchData();
  const interval = setInterval(() => {
    fetchData();}
  , 100);
  return () => clearInterval(interval);
});

useEffect(()=>{ // 서버로 값 보냄
  const sendData = async () =>{
    try{
      await axios.post('http://localhost:3001/send-data-react', 
      {val : maxDrink});
    } catch(error){
      console.error('Error fetching data:', error);
    }
  }
  if(send) sendData();
})




const handleClose = () => {
  setOpen(false);
};
const handleOpen = () => {
  setOpen(true);
};

const handleClose2 = () => {
  setOpen2(false);
};
const handleOpen2 = () => {
  setOpen2(true);
};

const handleClose3 =() => {
  setOpen3(false);
  
}

const handleOpen3 = () => {
  setOpen3(true);
  
};

const handleClose4 =() => {
  setOpen4(false);
}

const handleOpen4 = () => {
  setOpen4(true);
};

const isHalf_cmd = (isH) => {
  let newCmd = {drink: cmd.drink, isHalf: isH};
  setCmd(newCmd);
}

const drink_cmd = (d) => {
  let newCmd = {drink: d, isHalf: cmd.isHalf};
  setCmd(newCmd); 
}




return (
    <div style={{justifyContent:'center',alignItems:'center'}}>
    <div style={{alignItems:'center', justifyContent:'center',display:'flex',marginBottom:50}} >
    <img src={alcocare}></img>
  </div>
  <div>
  <Typography align="center" style={{ fontWeight: 'bold' }} variant="subtitle1" gutterBottom>
     환영합니다 {nickname} 회원님
  </Typography>
  <Typography align="center" style={{ fontWeight: 'bold' }} variant="subtitle1" gutterBottom>
    남은 주량은 {amount}입니다
  </Typography>
  </div>
  <div style={{ alignItems: 'center', justifyContent:'center',textAlign:'center' }}>
  <Typography align="center" style={{ fontWeight: 'bold' }} variant="subtitle1" gutterBottom>
     혈중 알코올 농도  {email}
  </Typography>
{/*
  <h1>Value from ESP8266:</h1>
      <p>{val !== null ? `Value: ${val}` : 'Loading value...'}</p>

  <hr/>
      <h3>설명 : cmd의 객체를 밑의 버튼들이 설정해줌, 이후 JSON으로 만든 뒤 보냄</h3>
      <p>1 : 한잔, -1 : 반잔 {clientCnt}</p>
      <p>보낼 문자열 : {JSON.stringify(cmd)}</p>
      <button onClick={()=>{setIsHalf(isHalf*-1); isHalf_cmd(isHalf);}}>{isHalf===1 ? "한잔 추가" : "반잔 추가"}</button>
      <input type='number' step="0.5" value = {maxDrink} 
        onChange={(e) => {return setMaxDrink(e.target.value)}} max="5" min="0"/>
      <button onClick={()=>{drink_cmd(maxDrink)}}>주량 추가</button>
*/}

  
  <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center',justifyContent:'center' }}>
    <Typography variant='h3' component='span' style={{ color: 'rgb(240,255,255)' }}>
      %
    </Typography>
    <Typography align='center' variant='h1' display="inline" gutterBottom style={{fontWeight:'360',fontSize:"110px" }}>
      {val}
    </Typography>
    <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', alignItems: 'center' ,textAlign:'center'}}>
      
      <Typography variant='h3' component="span" style={{ fontWeight: 'bold', marginLeft: '10px', width: '50px' }}>
        %
      </Typography>
  
      <IconButton>
        <RefreshRoundedIcon style={{backgroundColor:'white',margin:'10px', borderRadius:'20px',border:'2px solid green'}}  sx={{fontSize:35}}/>
      </IconButton>
    </div>
     </div>
     <Button variant="outlined" onClick={handleOpen}> 상세보기</Button>

     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <Tips alcoholPercent={val} handleClose={handleClose}/>
      </Modal>
     <hr/>
     <Button onClick={handleOpen2} style={{borderRadius:'40px',border:'2px solid blue '}} endIcon={<TipsAndUpdatesOutlinedIcon/>}>
      Tips
    </Button>  
    <Modal
  open={open2}
  onClose={handleClose2}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
          <SemiTips handleClose2={handleClose2} alcoholPercent={val}/>
          </Modal>   
    <Button onClick={() => window.open("https://www.kakaomobility.com/service-kakaot")} style={{borderRadius:'40px',border:'2px solid green',color:'gray',margin:'10px'}} endIcon={<LocalTaxiIcon/>}>
      TAXI
    </Button>
    <Button  onClick={handleOpen4} style={{borderRadius:'40px',border:'2px solid black',color:'black',margin:'10px'}} endIcon={<LiquorIcon/>}>
      주량
    </Button>
    
    <Modal
  open={open4}
  onClose={handleClose4}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
          <Amount handleClose4={handleClose4} alcoholPercent={val}/>
          </Modal>


      <Button  onClick={handleOpen3} style={{borderRadius:'40px',border:'2px solid black',color:'black',margin:'10px'}} endIcon={<HelpOutlineOutlinedIcon/>}>
      help
    </Button>


    <Modal
  open={open3}
  onClose={handleClose3}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
          <Help handleClose3={handleClose3}/>
          </Modal> 
</div>

    
    </div>
  )
}

export default LoginSuccess