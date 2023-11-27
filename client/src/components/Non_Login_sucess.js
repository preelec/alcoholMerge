import React, { useState,useEffect } from 'react'
import { Button,IconButton, Modal, Typography } from '@mui/material';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import ShareIcon from '@mui/icons-material/Share';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import alcocare from '../img/alcocare.png'
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';


import Tips from './childViews/Tips';
import SemiTips from './childViews/SemiTips';
import Help from './childViews/Help';

const Non_Login_sucess = () => {

const [alcoholPercent,setAlcoholPercent] = useState(0.072)
const [open, setOpen] = React.useState(false);
const [open2,setOpen2] = React.useState(false);
const [open3,setOpen3] = React.useState(false);
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





return (
    <div style={{justifyContent:'center',alignItems:'center'}}>
    <div style={{alignItems:'center', justifyContent:'center',display:'flex',marginBottom:50}} >
    <img src={alcocare}></img>
  </div>
  <div style={{ alignItems: 'center', justifyContent:'center',textAlign:'center' }}>
  <Typography align="center" style={{ fontWeight: 'bold' }} variant="subtitle1" gutterBottom>
     혈중 알코올 농도
  </Typography>
    
  
  <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center',justifyContent:'center' }}>
    <Typography variant='h3' component='span' style={{ color: 'rgb(240,255,255)' }}>
      %
    </Typography>
    <Typography align='center' variant='h1' display="inline" gutterBottom style={{fontWeight:'360',fontSize:"110px" }}>
      {alcoholPercent}
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
       <Tips alcoholPercent={alcoholPercent} handleClose={handleClose}/>
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
          <SemiTips handleClose2={handleClose2} alcoholPercent={alcoholPercent}/>
          
          </Modal>   


    <Button style={{borderRadius:'40px',border:'2px solid gray',color:'gray'}} endIcon={<ShareIcon/>}>
      share
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
</div>
    
    </div>
  )
}

export default Non_Login_sucess;