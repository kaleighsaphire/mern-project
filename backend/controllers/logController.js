const asyncHandler = require('express-async-handler')

const Log = require('../models/logModel')
const User = require('../models/userModel')

// @desc    Get reading logs
// @route   GET /api/logs
// @access  Private
const getLogs = asyncHandler(async (req, res) => {
    const logs = await Log.find({ user: req.user.id })

    res.status(200).json(logs)
})

// @desc    Create new reading log
// @route   POST /api/logs
// @access  Private
const addLog = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const log = await Log.create({
        title: req.body.title,
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(log)
})

// @desc    Edit log
// @route   PUT /api/logs/:id
// @access  Private
const updateLog = asyncHandler(async (req, res) => {
    const log = await Log.findById(req.params.id)

    if (!log) {
        res.status(400)
        throw new Error('Log entry not found')
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

    const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedLog)
})

// @desc    Delete log
// @route   DELETE /api/logs/:id
// @access  Private
const deleteLog = asyncHandler(async (req, res) => {
    const log = await Log.findById(req.params.id)

    if (!log) {
        res.status(400)
        throw new Error('Log entry not found')
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

    await log.remove() 

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getLogs, addLog, updateLog, deleteLog
}