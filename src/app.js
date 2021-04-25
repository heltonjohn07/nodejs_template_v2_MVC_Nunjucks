const express = require('express')
const cors = require('cors')
const routes = require('./routes');
const njk = require('nunjucks')
var path = require('path');
const PORT = 3333
const HOST = '192.168.1.11'

const app = express()
app.use(cors())

app.set('view engine','.html')
njk.configure(path.join(__dirname, 'views'),{
    autoescape: true,
    express: app,
    watch:true
})


app.use(express.urlencoded({ extended: true })); 

// app.use(express.json());
app.use(routes);




app.listen(PORT, HOST ,()=>{
    console.log(`Server Running at: ${HOST}:${PORT} `)
})