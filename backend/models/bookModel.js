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
        required: [true, 'Please add a book title']
    },
    author: {
        type: String,
        required: [true, 'Please add an author']
    },
    genre: {
        type: String,
        required: [true, 'Please select a genre']
    },
    own: {
        type: Boolean,
        default: true,
    }
    }, 
    {timestamps: true}
)
module.exports = mongoose.model('Book', bookSchema)