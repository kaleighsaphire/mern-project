const express = require('express')
const router = express.Router()
const { getLogs, addLog, updateLog, deleteLog } = require('../controllers/logController')

const {protect} = require('../middleware/authMiddleware')

// router.get('/', protect, getLogs)

// router.post('/', protect, addLog)

// router.put('/:id', protect, updateLog)

// router.delete('/:id', protect, deleteLog)

// Condensed routing option:
router.route('/').get(protect, getLogs).post(protect, addLog)
router.route('/:id').delete(protect, deleteLog).put(protect, updateLog)

module.exports = router