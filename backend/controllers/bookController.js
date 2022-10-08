const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel')
const User = require('../models/userModel')

// @desc    Get books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find({ user: req.user.id })

    res.status(200).json(books)
})

// @desc    Create new book
// @route   POST /api/books
// @access  Private
const addBook = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.genre) {
        res.status(400)
        throw new Error('Please fill in all fields')
    }

    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        user: req.user.id,
        own: req.body.own,
        read: req.body.read
    })
    res.status(200).json(book)
})

// @desc    Edit book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)

    if (!book) {
        res.status(400)
        throw new Error('Book not found')
    }

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    // Ensure login user matches log user
    if(log.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedBook)
})

// @desc    Delete book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)

    if (!book) {
        res.status(400)
        throw new Error('Book not found')
    }

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    // Ensure login user matches log user
    if(book.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await book.remove() 

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getBooks, addBook, updateBook, deleteBook
}