const mysql = require('mysql');
if(process.env.NODE_ENV!='production'){
    require('dotenv').config();
    }
let config_database = {
    connectionLimit : 10,
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b5bd937adf901c',
    password: '93ca7983',
    database: 'heroku_a6f0ae4fb2f818b',
    port: 3306
  };
  let pool = mysql.createPool(config_database);
  
  module.exports = pool;