const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express ();
const pool = require('./config_database.js');
app
  .use(express.static(path.join(__dirname, 'public')))
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

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .post('/', (req, res) => {
    let ciudad = pool.escape(req.body.ciudad);
    ciudad=ciudad.toString();
    
    

  
    

    let fecha = pool.escape(req.body.fecha );
    fecha=fecha.toString();
    let int_fecha=parseInt(fecha, 10);

    let valor_minimo = pool.escape(req.body.valor_minimo);
    valor_minimo=valor_minimo.toString();
    valor_minimo=valor_minimo.replace("'","");
    valor_minimo=valor_minimo.replace("'","");
    let int_valor_minimo=parseInt(valor_minimo, 10);    
    

    


    let valor_maximo = pool.escape(req.body.valor_maximo );
    valor_maximo=valor_maximo.toString();
    valor_maximo=valor_maximo.replace("'","");
    valor_maximo=valor_maximo.replace("'","");
    let int_valor_maximo=parseInt(valor_maximo, 10);    
    
    
    let tiempo_maximo = pool.escape(req.body.tiempo_maximo );
    tiempo_maximo=tiempo_maximo.toString();
    tiempo_maximo=tiempo_maximo.replace("'","");
    tiempo_maximo=tiempo_maximo.replace("'","");
    let int_tiempo_maximo=parseInt(tiempo_maximo, 10);  
   

    let tiempo_minimo = pool.escape(req.body.tiempo_minimo );
    tiempo_minimo=tiempo_minimo.toString();
    tiempo_minimo=tiempo_minimo.replace("'","");
    tiempo_minimo=tiempo_minimo.replace("'","");
    let int_tiempo_minimo=parseInt(tiempo_minimo, 10); 
    

    let actividad = pool.escape(req.body.actividad );
    actividad=actividad.toString();
    actividad=actividad.replace("'(", "(");
    actividad=actividad.replace(")'", ")");
    actividad=actividad.replace(/\\"/g, "'");
   
    let localizacion1= req.body.latit;
    let localizacion2= req.body.longi;
    

    
    



    
    let possibleinstruction = "SELECT a.nombreActividad, l.nombreLocal, a.descripcion, a.precio, a.tiempo, l.localizacion FROM actividad a left join local l on l.idlocal=a.idLocal left join ciudad c on c.idCiudad=l.idCiudad WHERE a.precio<="+int_valor_maximo+" and a.precio>="+ int_valor_minimo +" and a.tiempo<="+int_tiempo_maximo+" and a.tiempo>="+int_tiempo_minimo + " and a.tipoActividad="+actividad+" AND c.nombre = "+ ciudad + " ORDER BY a.precio desc" ;
    
    req.app.set('tiempo', int_tiempo_maximo)
    req.app.set('answer', possibleinstruction.toString())
    req.app.set('localizacion1', localizacion1)
    req.app.set('localizacion2', localizacion2)
    return res.redirect('/Resultado');
 

    
    

  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
