const asyncHandler = require('express-async-handler')

// @desc    Get reading logs
// @route   GET /api/logs
// @access  Private
const getLogs = asyncHandler(async (req, res) => {
    res.status(200).send({message: 'Get reading logs'})
})

// @desc    Create new reading log
// @route   POST /api/logs
// @access  Private
const addLog = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).send({message: 'Create log'})
})

// @desc    Edit log
// @route   PUT /api/logs/:id
// @access  Private
const updateLog = asyncHandler(async (req, res) => {
    res.status(200).send({message: `Update log ${req.params.id}`})
})

// @desc    Delete log
// @route   DELETE /api/logs/:id
// @access  Private
const deleteLog = asyncHandler(async (req, res) => {
    res.status(200).send({message: `Delete log ${req.params.id}`})
})

module.exports = {
    getLogs, addLog, updateLog, deleteLog
}