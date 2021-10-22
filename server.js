const express = require ('express');
const app = express ();

app.use(express.static(__dirname + '/front'));
var path = require('path');
const bodyParser = require("body-parser");
const { send } = require('process');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let server = require('http').Server(app);









// ./ for same level archive


app.post('/', (req,res)=>{
    let tablename = req.body.name
    res.json({ user: 'tj' });

    
});




const port = process.env.PORT || 3000; 

server.listen(port, ()=>{
    console.log('Possible instructions/message while listening to ' + port_number+ '');
});