var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')

var info = require('./services/personalInfoService')
var user = require('./services/userService')

var app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://admin:admin@cluster0-cj6jh.gcp.mongodb.net/test?retryWrites=true', (error) => {
    if (!error) {
        console.log('connected to DB')
    }
})

app.use('/info', info.router)
app.use('/user', user.router)

app.listen(8080);