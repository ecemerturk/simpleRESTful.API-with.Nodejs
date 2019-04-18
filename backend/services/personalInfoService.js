var express = require('express')
var router = express.Router()

var Info = require('../models/personalInformation')

router.post('/personalInformation', (request,response) =>{
    var info = new Info(request.body);
    info.save((error,result)=>{
        if(error){
            return response.sendStatus(500).send({message:error})
        }
        return response.sendStatus(201)
    })
})

router.get('', async(reques,response)=>{
    var infos= await Info.find({});
    response.send(infos);
})

var info = {router}
module.exports = info 