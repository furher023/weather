const express = require('express');
const app = express();
const PORT = 3000;
const request = require('request');
const key = "b3054ad09befe14ffb5c8190f4059de8";
var bodyparser = require('body-parser');
var path = require('path');
app.use(bodyparser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res,next)=>{

 res.render('index.ejs', {Express: express});
});

app.post('/temp',(req,res,next)=>{
 var city = req.body.city;
 console.log(city);
 var url ="http://api.weatherstack.com/current?access_key=2ae8b2bbb6f4ba1d5499290d6bde8cd4&query="+city;
 request(url, function (err, response, body) {
  if (err) {
   console.log('error:', error);
  } else {
   var status = JSON.parse(body);
   console.log('body:', status);
   res.render('index.ejs',{data: status});
  }
 });
});

app.listen(PORT,(err)=>{
 if(err)
 throw err;
 console.log("Coonected to Port 3000");
});