const express = require("express");
const env = require("dotenv");
const app = express();
const cors = require("cors");
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser")


env.config();
const port = process.env.PORT || 2000


app.use(cors());
//app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`Server is running on port `+port);
});

app.get('/subscribeget/',(req,res)=>{
  res.status(201).send('Tested');  
});

app.post('/subscribe/',(req,res)=>{
  const data = JSON.stringify(req.body);
  console.log(data);
  //res.status(201).write(String(req));
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: 'monishreddy969@gmail.com',
      pass: 'Monish.reddy,96.'
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  
  const mailOptions = {
    from: 'monishreddy969@gmail.com',
    to: 'swaroopsv96@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html:data
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});


