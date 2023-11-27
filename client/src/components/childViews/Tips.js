import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Link } from '@mui/material';



const Tips = (props) => {
    const { alcoholPercent, handleClose } = props;
    const [showDrive, setShowDrive] = useState('');
    const [zeroAlcohol, setZeroAlcohol] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
  
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
      maxWidth: 500,
    };
   
    useEffect(()=>{
    if(alcoholPercent<0.03){
        setShowDrive('운전이 금지되는 수준은 아니지만 운전을 하지않으시는걸 권장합니다')
    }else if(alcoholPercent<0.08 && 0.03<alcoholPercent){
        setShowDrive('현재 차량 운전시 면허 100일간 정지및 1년이하의 징역이나 500만원 이하의 벌금 수준입니다.')
    }else if(alcoholPercent<0.2&&0.08<alcoholPercent){
        setShowDrive('현재 차량 운전시 면허취소및 1년~2년이하의 징역및 500만원 이상 1000만원 이하의 벌금 수준입니다.')
      }else{
        setShowDrive('현재 차량 운전시 면허취소 및 2년~5년 이하의 징역및 1천만원이상 2천만원 이하의 벌금 수준입니다.')
      }
      setZeroAlcohol(alcoholPercent/0.015)
      setHour(Math.floor(zeroAlcohol));      
      setMinute(Math.round((zeroAlcohol%1)*60));
  },[alcoholPercent,zeroAlcohol]) 

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );  
    
    return (
  <div>
    <Box sx={stylemodal}>
       <IconButton style={{position:'absolute',right:'10px', top:'10px'}} onClick={handleClose} aria-label="delete" size="small">
       <CloseIcon fontSize="inherit" />
       </IconButton>

       <Typography sx={{ fontSize: 14 }} gutterBottom>
          현재 측정한 사용자님의 혈중 알코올농도는
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
        <b> {alcoholPercent}% </b>이며 알코올 농도가 0%가 되려면<b> {hour}시간 {minute} 분이 걸립니다. </b>
        </Typography>
        <Typography variant="body2">
        <b>{showDrive} </b>
          <br />
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{fontSize:8}}>
         ※알코올 농도 계산 시간은 개인적차이나 오차가 있을 수 도 있습니다.
        </Typography>


        <Button size="small"><Link href="https://www.sangdammoa.com/content/calcul_alcohol"> 더보기</Link> </Button>
    </Box>
    <br/>
  </div>
  
     )
}

export default Tips;