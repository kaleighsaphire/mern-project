const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
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
    author: {
        type: String,
        required: [true, 'Please add an author']
    },
    }, 
    {timestamps: true}
)
module.exports = mongoose.model('Book', bookSchema)