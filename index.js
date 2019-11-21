require('./model/db');
const express = require('express');
const nodeapp = require('./route/application.route');

var bodyParser = require('body-parser');
var cors = require('cors')
var app = express()
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200  
}
app.use(express.json());  
app.use(express.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use('/test', (req,res) =>{
    res.status(200).send('this is test');
})
app.use('/app',nodeapp);

app.listen(3000, ()=>{
    console.log('Express server started at port :3000');
});
