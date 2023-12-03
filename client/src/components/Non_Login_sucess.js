import React, { useState,useEffect } from 'react'
import { Button,IconButton, Modal, Typography } from '@mui/material';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import ShareIcon from '@mui/icons-material/Share';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import alcocare from '../img/alcocare.png'
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import axios from 'axios';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import Tips from './childViews/Tips';
import SemiTips from './childViews/SemiTips';
import Help from './childViews/Help';
import LiquorIcon from '@mui/icons-material/Liquor';
const Non_Login_sucess = () => {
  const [maxDrink, setMaxDrink] = useState(0); 
  const [clientCnt, setClientSet] = useState(0);
  const [val,setVal] = useState(0)
  const [s,setS] = useState(5);
  const [open, setOpen] = React.useState(false);
  const [open2,setOpen2] = React.useState(false);
  const [open3,setOpen3] = React.useState(false);
  const [open4,setOpen4] = React.useState(false);
  const [isHalf, setIsHalf] = useState(1);
  const [amount,setAmount] = useState(0);
  const [mode,setMode] = useState("반잔모드")
  const [nickname,SetNickname] = useState('');   
  const [sex2,setSex2] = useState(0);
  const [weight,setWeight] = useState(0)
  const [cmd, setCmd] = useState({
    drink: -300,
    isHalf: 1 //1 한잔 -1 반잔
  });
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

useEffect(() => {
  const fetchData = async () => {
    try {
      const email = JSON.parse(localStorage.getItem('NonLoginUser')); 
  
  
      const response = await axios.get('http://localhost:3001/Non_Login');

      const emailCheck = response.data.find(response => response.nickName.toString() === email)
      console.log(emailCheck)
      if(emailCheck){
        const extractedNicknames = emailCheck.nickName;
        const amountPerson = emailCheck.amount;
        const sex = emailCheck.sex;
        const weight = emailCheck.weight
        setCmd(prevCmd => ({
          ...prevCmd,
          drink: amountPerson
        }));
        
        setAmount(amountPerson);
        console.log(amountPerson);
       
        setWeight(weight)
        console.log(weight)
        

        console.log(amountPerson)
        if(sex==1){
          setSex2(0.86)
          
        }else{
          setSex2(0.64)
        }
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

  fetchData()
}, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행


useEffect(()=>{
  const d = (50*0.16*0.7894)*val/(10*sex2*weight)
  setMaxDrink(d.toFixed(4))
  alert(val=maxDrink)

},)

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
  , 3000 );
  return () => clearInterval(interval);
});

useEffect(()=>{ // 서버로 값 보냄
  const sendData = async () =>{
    try{
      if(cmd.drink>-200){
      await axios.post('http://localhost:3001/send-data-react', 
      {val : JSON.stringify(cmd)});
      }
    } catch(error){
      console.error('Error fetching data:', error);
    }
  }
  sendData();
})


useEffect(() =>{
  if(isHalf==1){
    setMode("한잔모드")
  }else{
    setMode("반잔모드")
    
  }
},[isHalf])


const isHalf_cmd = (isH) => {
  console.log(cmd)
  let newCmd = {drink: amount, isHalf: isH};
  setCmd(newCmd);
}




return (
    <div style={{justifyContent:'center',alignItems:'center'}}>
    <div style={{alignItems:'center', justifyContent:'center',display:'flex',marginBottom:50}} >
    <img src={alcocare}></img>
  </div>
  <div style={{ alignItems: 'center', justifyContent:'center',textAlign:'center' }}>
  <Typography align="center" style={{ fontWeight: 'bold' }} variant="subtitle1" gutterBottom>
     환영합니다 비회원 {nickname}님 
  </Typography>
  <Typography align="center" style={{ fontWeight: 'bold' }} variant="subtitle1" gutterBottom>
    현재 마신 잔은 {val} 이며  주량까지 남은 잔은{amount-val} 입니다
  </Typography>
 
 
 
 
  <Typography align="center" style={{ fontWeight: 'bold' }} variant="subtitle1" gutterBottom>
     혈중 알코올 농도
  </Typography>
    
  
  <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center',justifyContent:'center' }}>
    <Typography variant='h3' component='span' style={{ color: 'rgb(240,255,255)' }}>
      %
    </Typography>
    <Typography align='center' variant='h1' display="inline" gutterBottom style={{fontWeight:'360',fontSize:"110px" }}>
      {maxDrink}
    </Typography>
    <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', alignItems: 'center' ,textAlign:'center'}}>
      
      <Typography variant='h3' component="span" style={{ fontWeight: 'bold', marginLeft: '10px', width: '50px' }}>
        %
      </Typography>
  
      <IconButton>
        <RefreshRoundedIcon style={{backgroundColor:'white', borderRadius:'20px',border:'2px solid green'}}  sx={{fontSize:35}}/>
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
       <Tips alcoholPercent={maxDrink} handleClose={handleClose}/>
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
          <SemiTips handleClose2={handleClose2} alcoholPercent={maxDrink}/>
          
          </Modal>   
          <Button onClick={() => window.open("https://www.kakaomobility.com/service-kakaot")} style={{borderRadius:'40px',border:'2px solid green',color:'gray',margin:'10px'}} endIcon={<LocalTaxiIcon/>}>
      TAXI
    </Button>
      <Button  onClick={handleOpen3} style={{borderRadius:'40px',border:'2px solid black',color:'black'}} endIcon={<HelpOutlineOutlinedIcon/>}>
      help
    </Button>
    <Modal
  open={open3}
  onClose={handleClose3}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
          <Help handleClose3={handleClose3}/>
          </Modal> 


          <Button  style={{borderRadius:'40px',border:'2px solid black',color:'black',margin:'10px'}} onClick={()=>{setIsHalf(isHalf*-1); isHalf_cmd(isHalf); console.log(isHalf)}} endIcon={<LiquorIcon/>} > {mode} </Button>

</div>
    
    </div>
  )
}

export default Non_Login_sucess;