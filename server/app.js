
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())

//body-parsing
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const LoginUser = [];
const Non_LoginUser =[];


const port = 4000;

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

app.listen(port,()=>{
    console.log('server start')
})
