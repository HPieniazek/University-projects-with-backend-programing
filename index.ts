const express = require('express') 
const app = express() 
app.get('/', function (req, res) {
     res.send('Hello World') 
    }) 
app.get('/', function (req, res) {
    res.send(2+2) 
    }) 

app.listen(3000)