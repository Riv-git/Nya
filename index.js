const express = require ('express');
const app = express ();

app.use(express.static(__dirname + '/front'));
var path = require('path');
const bodyParser = require("body-parser");
const { send } = require('process');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var distance = require('distance-matrix-api');
var weather = require('openweather-apis');
const link = "https://api.openweathermap.org/data/2.5/weather?";
distance.key('AlphaDMAufq2jjuOxPF3pTGC4JA8fmoNzYiacAjP');
const appid='d7b7e5b12928806a189cffd3df38513d';
weather.setAPPID(appid);
weather.setLang('co');


const pool = require('./config_database.js');





// ./ for same level archive


app.post('/', (req,res)=>{
   let tablename = pool.escape(req.body.name);
   let possibleinstruction = 'SELECT * FROM Ciudad'
   pool.query(possibleinstruction,
    function (error, results, fields) {
   if (error) throw error;
   let rowsy = JSON.parse(JSON.stringify(results[0]));
   res.json({ user: rowsy });
   });  
   console.log(req.body); 
   

   

    
});




const port_number = process.env.port || 3000; 

app.listen(port_number, function(){
    console.log('Possible instructions/message while listening to ' + port_number+ '');
});