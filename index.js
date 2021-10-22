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







// ./ for same level archive


app.post('/', (req,res)=>{
   let tablename = req.body.name;
   res.json({ user: 'example' });

    
});




const port_number = process.env.port || 3000; 

app.listen(port_number, function(){
    console.log('Possible instructions/message while listening to ' + port_number+ '');
});