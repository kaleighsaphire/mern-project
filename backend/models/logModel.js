const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a text value']
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
    }, 
    {
    timestamps: true,
    }
)
module.exports = mongoose.model('Log', logSchema)