const mongoose = require('mongoose')
const validator = require('validator')
const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required:true,
        validate(value){
           if (!validator.blacklist(value, 'fuck')){
               throw new Error('Description contains bad words.')
           }
           else if(validator.equals(value, 'dolayı')){
                throw new Error('Dolayı word is not valid.')
            }
         
        }
    },
    completed: {
        type: Boolean,
        required: false,
        default: false,
     
    }
})

module.exports = Task

