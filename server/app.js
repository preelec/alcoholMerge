const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //json 파일 형태로 주고 받음.

let arduinoValue = null; //아두이노의 값
let reactValue = null; //React의 값
const nickname = null;



<<<<<<< HEAD
const LoginUser = [];
const Non_LoginUser =[];

=======
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
>>>>>>> 309e4d973ccd4b3dc6a64defb3dcffba89dc214f

app.post('/send-data', (req, res) => {
  arduinoValue = req.body.val; //arduino에게 값을 받음
  console.log('ArduinoValue :', arduinoValue);
  res.send(reactValue); //서버에서 react 값을 보냄
  console.log('Forwarding value to React:', arduinoValue);
});

<<<<<<< HEAD
app.get('/Login',(req,res)=>{
    // LoginUser.push(req.query) 
    res.json(LoginUser)
})

app.post('/Login',(req,res)=>{
    const data = req.body;
    LoginUser.push(data);
    console.log('post success')
})


app.get('/Non_Login',(req,res)=>{
    // Non_LoginUser.push(req.query) 
    res.json(Non_LoginUser)
})


app.post('/Non_Login',(req,res)=>{
    const data = req.body;
    Non_LoginUser.push(data);
    console.log('post success')
})
=======
app.get('/get-data', (req, res) => { //react에게 값을 보내기 위해 json으로 만듬
  res.json({ value: arduinoValue });
});

app.post('/send-data-react', (req, res) => { //React측에서 값을 받음
  reactValue = req.body.val;
  console.log('ReactValue:', reactValue);
  res.send('Value received successfully.');
});
>>>>>>> 309e4d973ccd4b3dc6a64defb3dcffba89dc214f

/*
const LoginUser = [];
app.get('/',(req,res)=>{
  // LoginUser.push(req.query) 
  res.json(LoginUser)
})

app.post('/',(req,res)=>{
  const data = req.body;
  LoginUser.push(data);
  console.log('post success')
})
*/


const login_user = []
app.get('/',(req, res) => {
  res.json(login_user);
});

app.post('/',(req,res)=>{
  const userData = req.body;
  login_user.push(userData)
  res.send("포스트 성공")
})

app.get('/Non_Login',(req,res)=>{
  // Non_LoginUser.push(req.query) 
  res.json(Non_LoginUser)
})


app.post('/Non_Login',(req,res)=>{
  const data = req.body;
  Non_LoginUser.push(data);
  console.log('post success')
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
