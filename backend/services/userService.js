var express = require('express')
var router = express.Router()

var User = require('../models/user')

router.post('/user', (request,response) =>{
    var user = new User(request.body);
    user.save((error,result)=>{
        if(error){
            return response.sendStatus(500).send({message:error})
        }
        return response.sendStatus(201)
    })
})

router.get('/user', async(reques,response)=>{
    var users= await User.find({});
    response.send(users);
})

var user = {router}
module.exports = user 