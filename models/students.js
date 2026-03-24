// models/students.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name: {type:String,Required:false},
    age: {type: Number,Required: false},
    email: {type: String, Required: false},
    phone: {type: String, Required: false},
    address:{type: String, Required: false},
    photo: {type: String}// save to base64 encoded

});

module.exports = mongoose.model('Student',studentSchema);