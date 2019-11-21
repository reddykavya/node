const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let usermyapplication = new Schema({
    username:{
        type:String
    },
    lastname:{
        type:String
    },
    middlename:{
        type:String
    },
    mobilenumber:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    confirm_password:{
        type:String
    }

});
module.exports = mongoose.model('AKR', usermyapplication);