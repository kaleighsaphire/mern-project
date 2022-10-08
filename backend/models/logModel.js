const mongoose = require('mongoose')

const logSchema = mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    lastName: {
        type: String,
        required: [true, 'Please add an Author']
    },
    firstName: {
        type: String,
         
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
    rating: {
        type: String,
        required: [true, 'Please add a rating']
    },
    }, 
    {timestamps: true}
)
module.exports = mongoose.model('Log', logSchema)