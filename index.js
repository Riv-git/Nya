const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express ();
app
  .use(express.static(path.join(__dirname, 'public')))
const bodyParser = require("body-parser");
const { send } = require('process');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    let tablename = req.body.name;
    res.json({ user: 'tj' });

  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
