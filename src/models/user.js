const mongoose = require('mongoose')
const validator = require('validator')
const User = mongoose.model('User', {
    name: {
        type: String ,
        required: true,
        trim: true
    },
    password: {
       type: String,
       required: true,
       trim: true,
       minlength: 7,
       validate(value){
           if (validator.contains(value,'password')){
               throw new Error('The password can\'t contain password in it.' )
            } // else if(value.length < 6){
           //     throw new Error('The password must be greater than 6')
           // }
           // or we can use minlength
       }
   },
    
    email:{
       type: String,
       required: true,
       trim: true,
       validate(value){
           if(!validator.isEmail(value)) {
               throw new Error('Email is invalid')
           }
       }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0 ) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})


module.exports = User