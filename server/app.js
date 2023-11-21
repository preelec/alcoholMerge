const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //json 파일 형태로 주고 받음.

let arduinoValue = null; //아두이노의 값
let reactValue = null; //React의 값

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/send-data', (req, res) => {
  arduinoValue = req.body.val; //arduino에게 값을 받음
  console.log('ArduinoValue :', arduinoValue);
  res.send(reactValue); //서버에서 react 값을 보냄
  console.log('Forwarding value to React:', arduinoValue);
});

app.get('/get-data', (req, res) => { //react에게 값을 보내기 위해 json으로 만듬
  res.json({ value: arduinoValue });
});

app.post('/send-data-react', (req, res) => { //React측에서 값을 받음
  reactValue = req.body.val;
  console.log('ReactValue:', reactValue);
  res.send('Value received successfully.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});