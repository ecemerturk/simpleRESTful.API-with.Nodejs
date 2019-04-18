var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var User = require('./models/user')

var author = require('./services/userService')

var app = express()

app.use(bodyParser.json())

mongoose.connect('mongodb+srv://admin:admin@cluster0-cj6jh.gcp.mongodb.net/test?retryWrites=true', (error) => {
    if (!error) {
        console.log('connected to DB')
    }
})

app.use('/author', author.router)

app.listen(8080)