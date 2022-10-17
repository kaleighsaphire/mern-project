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
    lastName: {
        type: String,
        required: [true, 'Please add an Author']
    },
    firstName: {
        type: String,
    },
    genre: {
        type: String,
        required: [true, 'Please select a genre']
    },
    own: {
        type: Boolean,
        default: true,
    },
    read: {
        type: Boolean,
        default: false,
    },
    eBook: {
        type: Boolean,
        default: false,
    }
    }, 
    {timestamps: true}
)
module.exports = mongoose.model('Book', bookSchema)