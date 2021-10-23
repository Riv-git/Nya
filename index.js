const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .post('/', (req,res)=>{
    let tablename = req.body.name;
    
    res.json({ user: 'tj' });

         
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
