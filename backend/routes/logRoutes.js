const express = require('express')
const router = express.Router()
const { getLogs, addLog, updateLog, deleteLog } = require('../controllers/logController')

router.get('/', getLogs)

router.post('/', addLog)

router.put('/:id', updateLog)

router.delete('/:id', deleteLog)

// Condensed routing option:
// router.route('/').get(getLogs).post(addLog)
// router.route('/:id').delete(deleteLog).put(updateLog)

module.exports = router