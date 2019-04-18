var mongoose = require('mongoose')

var personalInfoSchema = new mongoose.Schema({
    email:String,
    firstName:String,
    lastName:String,
})

module.exports = mongoose.model('PersonalInformation',personalInfoSchema)