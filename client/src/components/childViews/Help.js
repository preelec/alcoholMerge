import { Box,  IconButton, Typography } from '@mui/material';
import React from 'react'

import CloseIcon from '@mui/icons-material/Close';

const Help = ({ handleClose3 }) => {
    // 클릭 이벤트 핸들러 함수 정의
    const handleIconButtonClick = () => {
      handleClose3();
    };    
  
  
   
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



    return (
    <Box sx={stylemodal}>
      <IconButton style={{position:'absolute',right:'10px', top:'10px'}} onClick={handleClose3} aria-label="delete" size="small">
       <CloseIcon fontSize="inherit" />
       </IconButton>
       <Typography sx={{ fontSize: 14 }} gutterBottom>
        제작자 전화번호: 010-7242-9457
        </Typography>
        <br/>
        
       <Typography sx={{ fontSize: 14 }} gutterBottom>
        제작자 이메일: woals9457@naver.com
        </Typography>

    </Box>
  )
}

export default Help;