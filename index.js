const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send('Olá, mundo!')
})

app.get('/oie', function(req, res) {
    res.send('Oieeee')
})

app.listen(3000)