const express = require ('express');
const app = express ();
const pool = require('./config_database.js');
app.use(express.static(__dirname + '/front'));
var path = require('path');
const bodyParser = require("body-parser");
const { send } = require('process');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const Router_file = require ('./Routerfile');
var distance = require('distance-matrix-api');
var weather = require('openweather-apis');
const link = "https://api.openweathermap.org/data/2.5/weather?";
distance.key('AlphaDMAufq2jjuOxPF3pTGC4JA8fmoNzYiacAjP');
const appid='d7b7e5b12928806a189cffd3df38513d';
weather.setAPPID(appid);
weather.setLang('co');








// ./ for same level archive


app.post('/', (req,res)=>{
   let tablename = req.body.name;
   res.json({user:'tj'});

    
});




const port_number = process.env.port || 3000; 

app.listen(port_number, function(){
    console.log('Possible instructions/message while listening to ' + port_number+ '');
});