const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
console.log('connecting to', url)
mongoose.set('useFindAndModify', false)
mongoose.connect(url, { useNewUrlParser:true})
    .then(result => {
        console.log('connected to Mongodb')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB: ', error.message)
    }
)
var uniqueValidator = require('mongoose-unique-validator')
const personSchema = new mongoose.Schema({
    name:{ 
        type: String,
        minlength:3,
        required:true,
        unique:true
    },
    number: {
        type:String,
        minlength:8,
        required:true
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})
personSchema.plugin(uniqueValidator, { message: 'Error, expected name to be unique'})
module.exports = mongoose.model('Person', personSchema)