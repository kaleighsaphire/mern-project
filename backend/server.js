const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5050

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/logs', require('./routes/logRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))