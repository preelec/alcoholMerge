
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())

//body-parsing
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


const port = 4000;

app.get('/',(req,res)=>{
    infor.push(req.query) 
    res.json(infor)
})

app.post('/',(req,res)=>{
    const data = req.body;
    infor.push(data);
    console.log('post success')
})

app.listen(port,()=>{
    console.log('server start')
})
